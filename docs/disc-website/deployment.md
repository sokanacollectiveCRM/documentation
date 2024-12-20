# Deployment

## GitHub Pages Deployment

The DISC website is automatically deployed to GitHub Pages using GitHub Actions.

### Automated Deployment Process

The deployment is triggered automatically when:

- Code is pushed to the `main` branch
- A pull request is merged into `main`

Our GitHub Action workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Builds the project
5. Deploys to GitHub Pages

```yml
# Example of our deployment workflow
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NODE_ENV: production

      - name: List public directory
        run: ls -la public/

      - name: List out directory
        run: ls -la out/

      - name: Add .nojekyll file
        run: |
          touch ./out/.nojekyll
          cp -r public/* out/

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
          clean: true
```

## Pre-deployment Checks

Before pushing to main, verify locally:

- Build succeeds: `npm run build`
- Links work correctly
- Images load properly
- Components render as expected

## Troubleshooting

Common issues and solutions:

1. **Build Failures**

   - Check the GitHub Actions logs for specific errors
   - Verify all dependencies are properly listed in `package.json`
   - Ensure Node.js version matches the workflow

2. **404 Errors**

   - Verify the base path in `next.config.mjs`
   - Check if images and assets use correct paths
   - Ensure pages are properly exported

3. **Workflow Failures**
   - Check GitHub repository permissions
   - Verify GitHub Actions is enabled
   - Review workflow logs for specific errors

## Related Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
