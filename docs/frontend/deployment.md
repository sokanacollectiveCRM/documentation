---
id: deployment
title: Deployment Guide
sidebar_position: 5
---

# Deploying the Frontend

The frontend application is deployed on Vercel for its ease of use. The frontend has been designed to work with any provider.

## Vercel Deployment

### Prerequisites

- A Vercel account
- Access to the project repository
- Environment variables ready

The link to the vercel account is already provided in the credentials document. Follow this [link](https://docs.google.com/document/d/1XxuBfhTmrafgHsZHrzHwQyeqGB8e__duY9SmgVo0VEc/edit?usp=sharing0). If the credentials aren't working, it is likely that you can login through Github or Google.

### Environment Variables

The environment variables have already been configured for you in the frontend settings. If they are to be changed, you can easily do so under Settings -> Environment Variables

### Automatic Deployments

- Pushes to `main` trigger production deployments
- Pull requests create preview deployments
- Failed builds block merging to main

### Troubleshooting

Common deployment issues:

1. Environment Variables

   - Missing `REACT_APP_` prefix
   - Incorrect API URL format
   - Environment variables not set in Vercel

2. Type Errors

   - Run `npm run build` in the local repository to expose type errors. Fixing all of these will fix your deployment issues.

### Rolling Back

To revert to a previous version:

1. Go to your project on Vercel
2. Navigate to Deployments
3. Locate the desired previous deployment
4. Click "Promote to Production"

## Production Optimization

1. Build Command

```bash
npm run build
```

2. Output

- Creates optimized production build in `build/`
- Minifies all JavaScript and CSS
- Optimizes static assets

3. Performance Considerations

- Enable gzip compression
- Implement code splitting
- Optimize asset loading
- Configure proper caching headers

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Frontend Repository](https://github.com/disc-template/frontend)
