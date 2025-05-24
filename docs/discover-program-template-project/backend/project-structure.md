---
id: project-structure
title: Backend Project Structure
sidebar_position: 2
---

# Backend Project Structure

The backend template follows a domain driven design designed to be scalable and maintainable. Because this format requires some knowledge of DDD, please do the research on its principles before contributing. This document will explain the organization of the project and the purpose of each directory.

## Directory Overview

```bash
backend/
├── src/
│   ├── controllers/           # Handles HTTP requests and responses
│   │   ├── authController.ts      # Authentication operations
│   │   ├── clientController.ts    # Client management
│   │   ├── contractController.ts  # Contract generation and management
│   │   ├── EmailController.ts     # Email notifications
│   │   ├── RequestFormController.ts # Service request forms
│   │   └── userController.ts      # User operations and hours tracking
│   │
│   ├── domains/               # Domain errors and exceptions
│   │   └── errors/            # Error type definitions
│   │
│   ├── entities/              # Core business models
│   │   ├── Client.ts          # Client entity
│   │   ├── Hours.ts           # Work hour tracking
│   │   ├── RequestForm.ts     # Service request data
│   │   ├── Template.ts        # Contract templates
│   │   └── User.ts            # User entity
│   │
│   ├── middleware/            # Request processing middleware
│   │   ├── authMiddleware.ts  # Authentication checks
│   │   └── authorizeRoles.ts  # Role-based access control
│   │
│   ├── repositories/          # Data access layer
│   │   ├── interface/         # Repository interfaces
│   │   │   ├── clientRepository.ts
│   │   │   └── userRepository.ts
│   │   ├── requestFormRepository.ts
│   │   ├── supabaseClientRepository.ts
│   │   └── supabaseUserRepository.ts
│   │
│   ├── routes/                # API route definitions
│   │   ├── authRoutes.ts      # Authentication endpoints
│   │   ├── clientRoutes.ts    # Client management endpoints
│   │   ├── contractRoutes.ts  # Contract operations
│   │   ├── doulaRoutes.ts     # Doula-specific endpoints
│   │   ├── EmailRoutes.ts     # Email notification endpoints
│   │   ├── requestRoute.ts    # Service request endpoints
│   │   └── specificUserRoutes.ts # User-specific operations
│   │
│   ├── services/              # External service integrations
│   │   ├── interface/         # Service interfaces
│   │   ├── RequestFormService.ts
│   │   ├── supabaseAuthService.ts
│   │   └── supabaseContractService.ts
│   │
│   ├── usecase/               # Application business logic
│   │   ├── authUseCase.ts     # Authentication logic
│   │   ├── clientUseCase.ts   # Client operations
│   │   ├── contractUseCase.ts # Contract handling
│   │   └── userUseCase.ts     # User operations
│   │
│   ├── utils/                 # Utility functions
│   │   └── convertToPdf.ts    # PDF conversion
│   │
│   ├── index.ts               # Application initialization
│   ├── server.ts              # Express server setup
│   ├── supabase.ts            # Supabase client configuration
│   └── types.ts               # Type definitions

```

## Core Directories

### `src/` Directory

The source directory contains all the application code. Everything is organized into specific subdirectories based on their functionality.

### `config/`

Contains configuration files for external services and application settings.

- `supabase.js`: Configuration for Supabase database connection and authentication

### `controllers/`

Houses the business logic for the application, separating it from the route definitions.

- `authController.js`: Handles user authentication and authorization logic

### `middleware/`

Contains Express middleware functions that process requests before they reach the route handlers.

- `authMiddleware.js`: Handles authentication verification and user session management

### `routes/`

Defines API endpoints and connects them to their corresponding controllers.

- `authRoutes.js`: Authentication-related routes (login, signup, etc.)

### `server.js`

The main application file that:

- Initializes the Express application
- Sets up global middleware
- Connects routes
- Configures error handling
- Starts the server

## Protected Files

The following files should not be modified directly:

```bash
├── node_modules/       # Project dependencies
├── eslint.config.mjs  # Linting configuration
├── package-lock.json  # Dependency lock file
└── package.json       # Project metadata and scripts
```

These files are essential for the project's configuration and dependencies:

- `node_modules/`: Automatically managed by npm
- `eslint.config.mjs`: Maintains consistent code style across all projects
- `package.json` & `package-lock.json`: Managed through npm commands

## Adding New Features

When adding new features to the backend:

1. Create new route files in the `routes/` directory for new API endpoints
2. Add corresponding controller files in the `controllers/` directory
3. If needed, create new middleware in the `middleware/` directory
4. Update the main `server.js` file to include new routes

## Best Practices

- Keep files focused and single-purpose
- Follow the established directory structure
- Create new directories only when functionality doesn't fit existing categories
- Use meaningful file names that describe their purpose
- Keep related files close together in the directory structure

## Configuration Files

The project includes several configuration files in the root directory:

- `jsconfig.json`: JavaScript language service configuration
- `eslint.config.mjs`: Code style and linting rules
- `package.json`: Project dependencies and scripts

These files are pre-configured for the DISCover Program's needs and ensure consistency across all projects.
