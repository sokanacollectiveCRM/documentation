---
id: next-steps
title: Next Steps
sidebar_position: 3
---

## Frontend

### 

### Profiles for Everyone! Including Doulas and Admins

It would be useful to have a profile for admins and doulas as well, which would make it easy for clients to get to know their providers and get their contact information. 

#### Proposal

Ideally, this profile page would be reusable across all three roles. Right now, the profile page is geared towards clients. 

The rendering would be completely different between a client and a doula/admin. A simple role check could be enough, but it is also valid to create two separate routes and components for the roles. 

### Contract E-sign

It is a hassle for clients to download a PDF and reupload them for an admin to approve. Moreso if they signed it wrong, which requires another reupload and delay. You could introduce an E-sign feature that fills in the client signature for you given that a client reads the terms and conditions and gives consent.

#### Proposal

One approach is to use `docx-templater` (which is already installed) to auto-populate a signature field. You would have to grab all the relevant fields **again** first (clientname, deposit, fee) to generate a final, signed PDF. This can be sent back to the frontend as a buffer for easy preview.

Another approach is to directly modify the contract PDF for that client. We do not have a library to modify PDFs, only Docx files. But this is certainly in the realm of possibility and would eliminate having to refetch the contract details.

### Invite Clients to the Platform upon contract signature

A client should be able to sign up once they are approved to do so. We have already set up authentication to allow for us. In particular, adding a client to the user table will allow them to sign up.

#### Proposal

Add a PUT request upon contract signature that adds a client to the users table. The uuid from the users table should be filled in for their client_info entry as well. This will allow the client to sign up and log in.

### Archive and Deleting Users

A client should also be prevented from logging in once their service is over.

#### Proposal

Just as a client is granted access to the platform through the users table, they can be kicked off the platform by removing them. 

It is worth considering whether they should be removed from `auth/users` as well. We have not made that decision, and leave that up to you. The idea is that if they are kicked off, their login credentials will still exist in the platform for reuse. That is, if they are archived or deleted, then they can't login. But, if they are approved for another service in the future, they can log in again with the same log in information.

This could crowd the `auth/users` table as well, which is a valid argument. Also, signing up again is not a hard task, and most clients won't return to the platform anyways. 

### Improved Integration for Pipeline

There is a secret page called **Pipeline** which has a drag and drop feature for clients. While this is a fun feature, there is little functionality other than changing client status.

#### Proposal

On top of improving the UI, there should be functionality to:

- Initiate a contract for a client
- Click on a card to go to their profile
- Sort within each column (use Dndkit's sortable library, it should be minimal code change to do so)
- Integrate it into the clients page. My suggestion is to make a tab trigger to switch between the table view and pipeline view.

### Separate rendering between roles

Our project has implemented the admin functionality of the site. Naturally, there needs to be separate rendering layouts if you are a client, or a doula. Ideally, each page should have a check for the role of the user.

#### Proposal

In the frontend `src/common/components/routes/ProtectedRoutes.tsx`, the component only checks for whether you are authenticated. To `PrivateRoutes`, you could add another check for the role of the user. The challenge would be figuring out which pages have which permissions (and checking that against the user).

## Backend

### Supabase User Repository

In the backend, this repository is intended to handle all requests for user related updates. A user includes all three roles: **admin**, **doula**, and **client**. 

While this is the intent, it appears that there are outlying functions implemented in this repository, those being: 

- `findClientsAll()`: Function already exists in clientRepository. Best not to use.
- `findClientsByDoula()`: Similarly, also already exists in clientRepository. Best not to use.
- `getHoursById()`: Is used in the Hours page but no alternative.
- `addNewHours()`: Is used in the Hours page but no alternative.

#### Proposal
These should be moved to a better fitting file if such exists, but will be kept for now. In general, it is best to separate logic into their own repositories and services.

### Improved PDF fidelity

We **used** to use the library, `docx-pdf` to convert from a Docx file into a PDF. This library does NOT preserve style, so basic properties like text size, heading, alignment, and image size may not be preserved. For now, we believe this is a simple and usable approach.

We recently switched over to use the library, `Cloud Convert` instead. This library is a subscription, third-party API. We are using the free tier, which has up to 10 conversions a day. This has much higher PDF-fidelity, but again, is limited and relies on a third party service to do the conversion for us.

We believe having 10 conversions a day is plenty for the organization's use case. The issue is that right now, grabbing a preview of a template from the `templates` page dynamically generates one of these, using up a conversion. This is slow and unnecessary.

#### Proposal

If you want to keep the PDF conversion within the application, we recommend using a more modern library to convert Docx files into PDFs. `docx-pdf` is outdated, and we only used it because of how easy it is to setup. A more modern library might preserve more fidelity, but at the cost of simplicity and performance. If the organization is not too concerned about how the contract looks, then `docx-pdf` is perfectly suited. The code that we used for `docx-pdf` should be in a previous commit.

If you like using the third-party service, either upgrade to a higher tier, or implement a PDF caching system. So, whenever the admin uploads a new template, also have the backend convert it to PDF using `Cloud Convert`, and then store the PDF buffer somewhere into the database. Then, just grab the buffer whenever you want to render it so you aren't generating a new PDF everytime (which uses a conversion). 

### Warnings for inactive clients

Another feature to implement could be a warning system for clients who have not been updated in a duly time. 

#### Proposal 

An easy implementation could be made directly with a Supabase Cron module. You can find an overview with this [link](https://supabase.com/blog/supabase-cron). This is not the only way to achieve this, you could also make this feature frontend-based by checking the updated column upon fetching clients.