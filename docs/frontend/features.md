---
id: features
title: Frontend Features
sidebar_position: 2
---

## Features

These are the main "features" used in the CRM. These features can be used as a page, or as a module within a page. For now, it seems that most of our features are tied to a single page, but we recommend keeping the **idea** of a features-based directory as it will keep everything tidy as the project gets bigger.

### (`auth/`)

The auth directory contains authentication logic. Because all of these features are tied together, there is no one landing page. AuthRoutes defines all the routes that can be taken in regards to authentication.

- `AuthCallback.tsx`: Handles the redirect and session management after an OAuth login (e.g., Google).
- `AuthRoutes.tsx`: Provides routing for all auth-related pages like login, signup, etc.
- `EmailVerification.tsx`: Handles the UI and logic for verifying a user’s email after signup.
- `GoogleButton.jsx`: Google sign-in button component that triggers OAuth.
- `Login.tsx`: Main login form page for existing users.
- `RequestPassword.tsx`: Lets users request a password reset email.
- `RequestPassword.tsx`: Handles the form for entering a new password after receiving the reset email.
- `Signup.tsx`: Sign-up form for new users to register an account.
- `styles.js`: Contains shared styling logic or style definitions used across auth components.

These files were provided under the DISC template creators (credits: Ethan Pineda, Amy Liao). You should take a look at how these features communicate with the global User Provider. This allows us to store the authenticated user and reuse them across the entire website. Please reserve this context for auth-related functions.

### Clients Directory (`/clients`)

The clients directory contains the page where admins/doulas can view their clients and make changes to them. This is also the main page to initiate a contract with a client.

- `Clients.tsx`: Main page hosting the clients page
- `ClientRoutes.tsx`: One route defining the main clients page.
- `contexts/`: Defines the contexts used to host shared, global templates and clients fetches
- `data/`: Defines the zod schemas used to parse the template and client fetches from the backend
- `components/`: List of components used to create the table and pop up dialogs (for creating contracts, deleting and archiving users, etc).

The main component lies in **ClientsBoard**. Here, we define the Drag and Drop context, the overlay for a draggable template (the template that follows your mouse when dragging), and the **ClientsTable**. 

The **ClientsTable** hosts the table itself, defining the table logic used. 
- The **DataTableToolbar** is where you'll find the buttons that allow you to filter clients, and open the popup for templates.
- We also define states like rowSelection, columnVisibility, etc... Keep in mind that **rowSelection** state will be used to pass information from the table into our **ContractCreationDialog**
- There is also **DataTablePagination**, which we use to go through multiple pages of clients.

I **encourage** you to look at the schema in data/schema.ts. This is where we define the zod schema for a **client**. If ANY of these values are incorrect when we fetch from the backend, none of your clients will render on the table (and you won't get an error message). You can wrap the parsing in a try/catch statement to print out the error message in the console. I find that most bugs are related to this.

### Hours Directory (`/hours`)

The hours directory contains components allowing doulas and admins to input work session hours. It uses the same structure as the **clients** directory with a **table** and zod schema. None of the components are named properly due to the table being copied from the **clients** feature. As such, if you are ever confused about the use of components here, take a look at **clients** first.

- `Hours.tsx`: Main page hosting the hours page
- `HoursRoute.tsx`: Provides the routing to hours page
- `/components`: Directory containing components that handle the logic of the table displayed
- `/context/clients-context`: Contains the React context for the table, also the typescript type of each row
- `/data/schema`: Contains zod schemas for the client info

### (`admin-payment/`)

The admin-payment directory contains frontend logic for what could be a payment page using Quickbooks.  There is no backend logic associated.

- `AdminPay.tsx`: Main page hosting the admin payment page
- `AdminPayRoutes.tsx`: Provides routing to admin-pay
- `icons.tsx`: Reference page for the icons used on the page

### (`inbox/`)

The inbox directory contains frontend logic for a future page that could list recent notifications and messages. There is no backend logic associated.

- `Inbox.tsx`: Main page for viewing client and team messages.
- `InboxRoutes.tsx`: Provides routing to the inbox page.
- `/components/`: The components being used to render the inbox


### (`dashboard-home/`)

Lists all the users that are in the database from the 'users' table.

- `Home.jsx`: Main dashboard landing page shown after login, showing a list of users

### (`my-account/`)

The my-account directory lets you edit your account details and profile information. The page functions using a tab trigger system from **shadcn**. This allows us to switch between profile and account details. User details are grabbed from the global **UserContext**.

- `MyAccount.tsx`: Landing page to view profile information.
- `MyAccountRoutes.tsx`: Provides routing
- `/components`: Contains input forms and tab switching containers.

### (`not-found/`)

404 Page

- `NotFound.tsx`: Basic frontend logic for when a page is invalid.

### (`pipeline/`)

Alternative page to clients, allows you to update client status using drag and drop. Very similar to **clients** page, so take a look at that first if the component usage is confusing. This is one of two pages that currently utilizes Dndkit.

- `Pipeline.tsx`: Landing page for kanban-style pipeline view.
- `PipelineRoutes.tsx`: Provides the routing.
- `/components`: Contains draggable and droppable region components
- `/data/`: Contains zod schemas for the client info

### (`profiles/`)

Detailed view page of a client when you click on them in the **clients** table.

- `Profile.tsx`: Main landing page for profiles page
- `ProfileRoutes.tsx`: Provides the routing
- `Notes.tsx`: Contains frontend logic for sending notes.
- `Documents.tsx`: Feature to view the contracts and other documents associated with a client
- `ClientInfo.tsx`: Detailed list of client information
- `OverviewLayout.tsx`: Basic summary of client information.

### (`request/`)

Public page used to send a request form to the admin. This page is intended to be public use, and is a step-by-step form. You can not pass into the next step of the form without filling out each field correctly.

Submitting this page will submit your information to the client-info table. Your information will also show up for the admin in the **clients** page.

- `RequestForm.tsx`: Main page hosting the request form.
- `RequestRoutes.tsx`: Provides the routing

## Adding New Features
When adding new features, you must first consider if you should create a new directory, or add to an existing one. In general, you should create a new directory if you are unsure, and merge features together if they share more than 50% of eachother's code.

This strategy makes it easy to trace files back to features, even if it makes the codebase larger. **Remember, once you merge features together, changing a single file could introduce new bugs without notice.**

### Creating a new feature

Ok, you want to make a new feature and directory for it.

1. Create a new directory in `features/` for your feature
2. Create a landing page for it (ex. Clients.tsx, Hours.tsx). It is important that you follow the convention used in previous pages, where we define a **fixed header** and use a **Main** component. This will make the sizing and layout of every page consistent.
3. Define the routes using the name of the feature + Routes (ex. ClientRoutes.tsx, HoursRoutes.tsx). Add it to the global list of routes under **Routes.tsx**
3. Create custom hooks in `common/hooks/` if needed (put it under the appropriate directory, ie `user/`, `doulas/`, etc)
4. Add new contexts in `common/contexts/` for shared state management

In general, add components to `common/components/` ONLY when a component is ALREADY used across multiple pages. Even if you foresee a component being reused in the future, contain it inside the features folder to make it easier to track for now.