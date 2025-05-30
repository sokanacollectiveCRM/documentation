---
id: implementation
title: Implementation Details
sidebar_position: 2
---

## Overview

## Supabase Implementation

This section serves as a basic overview of how we used supabase to implement the functions defined in our interfaces.

### PDF creation

There are several reasons why we want to generate a PDF: To view a template, download a template, generate a filled PDF, and preview a filled PDF. 

To create contracts, an admin must upload a template .docx file (from Word or Google Docs) to get started. They can specify which fields they want to autopopulate using the {} function.

We have made the following fields to be autofilled using these keywords:

- `{clientname}`
- `{fee}`
- `{deposit}`

Whereever these keywords are used in a document, our route will use the library **docx-templater** to populate those fields. **This is case sensitive**.

This generated document is then converted to a pdf using **docx-pdf**, and then sent back to the caller as a buffer.

:::note
There's a helper function called convertToPdf in `utils/convertToPdf`. This is mainly because the original library uses a callback function to convert from a docx to pdf. We instead want a promise, so we wrap the callback function in a promise to fit our use case.
:::

#### Why Docx to pdf?

PDF format is significantly better for viewing and generating. Docx is not a friendly format for our purposes of simply viewing a template (requires a full on editor and might require an expensive library to parse correctly). What Docx is good at is being modified while mostly retaining it's style.

You'll probably notice that the final pdf we generated looks nothing like the original docx file. This is because the **docx-pdf** library uses **mammoth** as a dependency, which parses Docx files into HTML without preserving style through CSS. The HTML is then converted into a pdf.

This is an area of improvement, but might require more expensive and advanced libraries to handle this conversion.

### Supabase Client Repository

To recap, the ability to sign up and log in is determined by whether you are in the users table. This is especially relevant for clients, who might appear inside the CRM in a table, but won't have the ability to log in. 

Once approved, a backend request will add them to the users table, link that ID to the entry in client_info, and they will be good to go to sign up.

To account for these scenarios, our client fetches utilise a join function. In particular, it tries to grab the client's entries from the user table as well in ALL cases.

**What happens if the user is null?** We will instead use the information from the clients_info table. If there is a linking entry in the users table, we grab that as well with a join.

Firstly, first name and last name are both in the users table and client_info table. If a client signs up and happens to change their name, the information from the users table will be prioritized (when fetching) because it is more recent. If the user is null (they can't sign up yet), then we just use the information from the request form.

This is outlined in `mapToClient()`. We first check if the user join is null. If it is, create a User entity with information from the request form. If the user is indeed valid, then use that for the User entity instead.

## General Implementation

### Lite vs Detailed Clients

To start, the `client` entity under `entities/client` has many optional fields. The reason for this is due to how our client fetches work. 

Our client fetch has two modes: Lite and Detailed. If you add a `?detailed=true` param to the end of your client fetch, you will grab a fully filled Client entity. If not, only a slightly filled Client entity is returned with basic fields like name, email, and status are filled.

This is intended to improve security, privacy, and performance. With this method, when you grab all the clients from the backend, you are only fetching 5-6 fields per entry instead of 15+. This will be especially apparent once we hit 100+ clients.
