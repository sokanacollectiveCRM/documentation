---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

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
mkdir disc-template
```

1. Clone the repositories:

```bash
git clone https://github.com/disc-template/frontend.git
git clone https://github.com/disc-template/backend.git
```

2. Install dependencies for the frontend:

```bash
cd frontend
npm i
```

3. Install dependencie for the backend

```bash
cd backend
npm i
```

4. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

## Supabase Setup

### 1. Create a Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Fill in project details

### 2. Create Users Table

Run this SQL in the Supabase SQL editor:

```sql
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);
```

### 3. Configure Authentication

1. Go to Authentication settings in Supabase dashboard
2. Enable Email auth provider
3. Configure Email templates (optional)
4. Set Site URL to your frontend URL

## Google OAuth Setup

### 1. Google Cloud Console

1. Create a new project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google OAuth API
3. Configure OAuth consent screen
4. Create OAuth 2.0 Client ID
   - Add authorized redirect URIs:
     - `[YOUR_SUPABASE_URL]/auth/v1/callback`
     - `http://localhost:3000/auth/callback` (for development)

### 2. Supabase OAuth Configuration

1. Go to Authentication > Providers in Supabase
2. Enable Google provider
3. Add Client ID and Client Secret from Google Cloud Console

## Environment Variables

Create `.env` file with:

```bash
FRONTEND_URL=http://localhost:3001
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
NODE_ENV=development
```

## Start Development Server

```bash
npm run dev
```

Server will start at `http://localhost:3000`

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

## Next Steps

- Review the [Project Structure](./project-structure.md)
- Check the [Contributing Guide](./contributing.md)
- Set up your [Development Environment](./development.md)
