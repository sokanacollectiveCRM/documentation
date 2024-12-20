---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started with DISCover Program Templates

This guide will walk you through setting up your team's development environment using our template repositories.

## Repository Setup

### Initial Setup by Tech Lead

1. The team's tech lead will receive access to the `disc-template` GitHub organization
2. Tech lead needs to create two new repositories by copying from our templates:
   - Frontend: `https://github.com/disc-template/frontend`
   - Backend: `https://github.com/disc-template/backend`

```mermaid
graph TB
    A[disc-template/frontend] -->|Copy| B[your-team/frontend]
    C[disc-template/backend] -->|Copy| D[your-team/backend]
    B -->|Deploy| E[Vercel Frontend]
    D -->|Deploy| F[Vercel Backend]
```

### Team Access

1. Tech lead adds team members as collaborators to both repositories
2. Each team member then:

```bash
# Clone frontend repository
git clone https://github.com/your-team-name/frontend.git

# Clone backend repository
git clone https://github.com/your-team-name/backend.git
```

## Development Workflow

```mermaid
graph LR
    A[Create Branch] -->|Make Changes| B[Commit]
    B -->|Push| C[Create PR]
    C -->|Review| D[Merge]
    D -->|Auto Deploy| E[Vercel]
```

### Step-by-Step Process

1. Create feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make changes and commit:

```bash
git add .
git commit -m "feat: description"
git push origin feature/your-feature-name
```

3. Create Pull Request and get reviews
4. Merge to main triggers automatic deployment

## Why This Structure?

Our repository structure is designed to:

- Enable free deployments on Vercel
- Maintain separate environments for each team
- Keep codebase organized and manageable
- Enable proper code review processes

## Next Steps

- Set up the [Backend Environment](./backend/getting-started)
  º
