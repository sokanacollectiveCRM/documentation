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

The main source folder containing all application logic. It is organized into domain-driven subdirectories following clean architecture principles (e.g., controllers, use cases, repositories, etc.).

### `routes/`

Entry point for all API requests.

### `controllers/`

Contains the logic for handling HTTP requests. Controllers receive input from routes, invoke use cases, and return responses. Controllers should never directly interact with
a repository or service, it is solely to handle requests and responses.

### `usecases/`

Implements application-specific logic using entities and repositories. These represent “actions” a user or system can perform. These also should not directly handle a database action, nor should it directly front a request. This acts as a reusable piece of logic that works with any kind of database service.

### `services/`

Contains service logic for external APIs, utilities, and third-party integrations that don’t belong directly in business logic.

### `repositories/`

Defines interfaces and implementations for database requests. Repositories abstract how data is fetched or stored (e.g., from Supabase, PostgreSQL, etc.).

### `middleware/`

Express middleware functions that intercept requests for authentication, logging, validation, and role checking.

### `domains/`

Error checking abstractions

### `entities/`

Classes that represent business logic, such as users, clients, request forms, etc.

### `utils/`

Contains reusable functions.

### `server.ts`

The main application file that:

- Initializes the Express application
- Sets up global middleware
- Connects routes
- Configures error handling
- Starts the server

### `index.ts`

Initializes all the instances of repositories and services to be reused across the application.

### `supabase.ts`

Initializes the supabase client

### `types.ts`

Defines basic type signatures, mostly used to define modified Requests that are passed to a controller from a middleware.

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
- If private, use the provided authMiddleware to check for authentication before querying.
- Specify the roles that are allowed to access this endpoint using authorizeRoles with an array of strings to specify which roles are allowed.
2. Add corresponding controller files in the `controllers/` directory
3. Add a corresponding use case to define the interactinos between the controller and its services/repositories
4. Add to a service or repository to both the interface and supabase equivalent if the function is related to an already established service.
5. If needed, create an interface AND supabase implementation of that interface.
4. Update the main `server.js` file to include new routes

## Best Practices

- Keep files focused and single-purpose
- Follow the established directory structure
- Create new directories only when functionality doesn't fit existing categories
- Use meaningful file names that describe their purpose
- Keep related files close together in the directory structure

## Configuration Files

The project includes several configuration files in the root directory:

- `tsconfig.json`: JavaScript language service configuration
- `eslint.config.mjs`: Code style and linting rules
- `package.json`: Project dependencies and scripts
