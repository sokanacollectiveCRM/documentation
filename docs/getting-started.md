---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

### Login to the provided Github account

We have provided a dedicated Github account for the project. Follow this [link](https://docs.google.com/document/d/1XxuBfhTmrafgHsZHrzHwQyeqGB8e__duY9SmgVo0VEc/edit?usp=sharing) to get access to the credentials.

## Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) version 18.0 or higher
- [Git](https://git-scm.com/) for version control
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))
- [Supabase](https://supabase.com/) account
- [Google Cloud Console](https://console.cloud.google.com/) account (for OAuth)

## Installation

0. Setup directories

```bash
cd # whereever you want your code to live in, make sure you can easily access this in the future
mkdir sokanacrm
```

1. Clone the repositories:

```bash
git clone https://github.com/sokanacollectivecrm/frontend.git
git clone https://github.com/sokanacollectivecrm/backend.git
```

2. Install dependencies for the frontend:

```bash
cd frontend
npm i
```

3. Create the `.env` file for the frontend

```bash
touch .env
```

4. Copy this template for the frontend `.env`

```javascript
VITE_APP_BACKEND_URL=http://localhost:5050
```

5. Change directories into the backend

```bash
cd ..
cd backend
```

6. Install dependencies for the backend

```bash
npm i
```

7. Create `.env` file for the backend

```bash
touch .env
```

8. Copt this template for the backend `.env`

```javascript
SUPABASE_URL= #your supabase url here
SUPABASE_ANON_KEY= # your supabase anon key here
SUPABASE_SERVICE_ROLE_KEY= # your supabase service role key here
PORT=5050 # this is the default that we used when making the template
FRONTEND_URL=http://localhost:3001 # this is the default we used when making the template
API_URL=http://localhost:5050 # this is the default we used when making the template
FRONTEND_URL_DEV=http://localhost:3001 # this is the default we used when making the template
NODE_ENV=development # NOTE: you should change this to `production` when you deploy to vercel!!!!
```
:::info

You can find the supabase keys using the supabase account details from this [link](https://docs.google.com/document/d/1XxuBfhTmrafgHsZHrzHwQyeqGB8e__duY9SmgVo0VEc/edit?usp=sharing). In general, we are reusing the same email and password across multiple platforms. If a login isn't working, it is **HIGHLY LIKELY** that you need to login through Github or Google Oauth instead.

:::

## Verify Setup

For the frontend directory, start the server with the command:

_you will probably need to open two terminals for this!_

```bash
npm run dev
```

For backend, start the server with this:

```bash
npm start
```

Backend server will start at `http://localhost:5050`

Frontend server will start at `http://localhost:3001`

1. Your authentication should be configured for both email and Google login
2. Test both methods in development:
   - Try creating an account with email
   - Try signing in with Google
   - If either fails, double-check all URLs and credentials

After you have gone through all of these steps, you should be able to create users, see them populate on Supabase, and have them displayed on your web app after logging in.

You should also get emails from Supabase whenever you first sign-up and requests a password. All of the respective pages on the frontend should work with this as well.

**Please** check that you are running the correct directories. Running another project's backend can cause confusion and lead to unnecessary changes without realizing that there is no bug. **Double check whenever you are unsure of a critical bug**.

## Google Cloud Console

Google Oauth is provided as an alternative and secure way to login. Although it is already configured, you will need to reconfigure the URL if you decide to change deployment or backend provider.

To configure OAuth, you must log in to the Google Cloud Console provided with the sokana email. Again, these credentials are provided in the private document.

1. Head over to the sidebar.
2. Click on 'APIs & Services'
3. Go to Oauth Consent Screen
4. Clients
5. Sokana Collective CRM
6. You should see the redirect URL's for Oauth. Configure as you need.

You will also need to reflect these changes in Supabase under authentication -> Google.

## Development Tools

### Recommended VS Code Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier