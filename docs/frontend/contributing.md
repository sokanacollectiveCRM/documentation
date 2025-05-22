---
id: contributing
sidebar_position: 5
---

# Contributing Guidelines

This guide explains how to contribute to the DISC Workshop Series Website. Due to our deployment setup, we follow a specific fork-based workflow.

## Repository Setup

There are two main repositories involved in our workflow:

1. **DISC-NU Organization Fork**

   - URL: [https://github.com/DISC-NU/disc-fall-2024-workshop-series-website](https://github.com/DISC-NU/disc-fall-2024-workshop-series-website)
   - This is where all contributors should make their initial contributions

2. **Main Repository**
   - URL: [https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website](https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website)
   - This is the production repository where approved changes are ultimately merged
   - Hosted on Vercel under the hobbyist tier plan

> **Note**: We use this two-repository setup to maintain deployment on Vercel's hobbyist tier plan, which isn't available for organization-owned repositories.

## Contributing Workflow

### 1. Initial Setup

```bash
# Clone the DISC-NU organization fork
git clone https://github.com/DISC-NU/disc-fall-2024-workshop-series-website.git
cd disc-fall-2024-workshop-series-website

# Add the main repository as a remote
git remote add upstream https://github.com/ethanpaneraa/disc-fall-2024-workshop-series-website.git
```

### 2. Making Changes

1. Ensure your local main branch is up to date:

```bash
git checkout main
git pull origin main
git pull upstream main
```

2. Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them:

```bash
git add .
git commit -m "Descriptive commit message"
```

### 3. Submitting Changes

#### Step 1: Pull Request to DISC-NU Fork

1. Push your changes to the DISC-NU fork:

```bash
git push origin feature/your-feature-name
```

2. Go to the [DISC-NU repository](https://github.com/DISC-NU/disc-fall-2024-workshop-series-website)
3. Create a Pull Request from your branch to the main branch
4. Wait for review and approval

#### Step 2: Pull Request to Main Repository

After your changes are approved and merged into the DISC-NU fork:

1. A maintainer will create a Pull Request from the DISC-NU fork to the main repository
2. Changes will be reviewed again
3. Upon approval, changes will be merged and automatically deployed via Vercel

## Best Practices

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (e.g., "Add", "Fix", "Update")
- Keep the first line under 50 characters
- Add more detailed explanation in the body if needed

Example:

```bash
git commit -m "Add workshop 3 content" -m "Added content for Git and VSCode workshop including:
- Installation guides
- Basic commands
- Best practices"
```

### Branch Naming

Follow this format:

- Features: `feature/description`
- Fixes: `fix/description`
- Content: `content/description`

Examples:

- `feature/add-search`
- `fix/navigation-bug`
- `content/workshop-3`

### Pull Request Guidelines

1. **Title**: Clear and descriptive
2. **Description**: Include:
   - What changes were made
   - Why changes were made
   - Any related issues or PRs
3. **Size**: Keep PRs focused and reasonably sized
4. **Testing**: Ensure all changes work locally

### Code Style

1. Follow existing code patterns
2. Use TypeScript features appropriately
3. Follow Tailwind CSS conventions
4. Comment complex logic
5. Use meaningful variable names

## Common Tasks

### Adding Workshop Content

1. Create new branch: `content/workshop-X`
2. Add content in `/contents/content/workshops/workshop-X`
3. Update route configuration if needed
4. Follow PR process as described above

### Fixing Bugs

1. Create branch: `fix/bug-description`
2. Make minimal necessary changes
3. Add tests if possible
4. Follow PR process

## Getting Help

If you need assistance:

1. Check existing documentation
2. Ask in DISC Discord channel
3. Contact the maintainers
4. Create an issue in the DISC-NU repository

## Why This Setup?

We use this two-repository setup because:

1. It allows us to use Vercel's hobbyist tier plan for deployment
2. Provides a clear review process
3. Maintains code quality through double review
4. Keeps deployment costs minimal

Remember, while this workflow might seem complex, it's designed to ensure quality while keeping our deployment costs at zero.
