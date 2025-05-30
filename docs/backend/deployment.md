---
id: deployment
title: Deployment Guide
sidebar_position: 5
---

# Deploying the Backend

The backend service is deployed on Vercel for seamless integration with our frontend application.

## Vercel Deployment

### Prerequisites

- A Vercel account
- Access to the project repository
- Your environment variables ready

### Environment Variables

Make sure to set these in your Vercel project settings:

```bash
FRONTEND_URL=your_frontend_url
SUPABASE_URL=your_supabase_url
SUPABASE_SERIVCE_ROLE_KEY=your_supabase_key
NODE_ENV=production
API_URL=you_api_url
```

### Troubleshooting

- Vercel expects absolute imports for files. If you want to import, let's say:

    `import { User } from 'entities/User'`

- This should instead be:

    `import { User } from '../entities/User'`

to make it ready for Vercel deployment.

Also check:

- Missing environment variables
- Incorrect build settings
- CORS configuration errors

### Rolling Back

To roll back to a previous version:

1. Visit your project on Vercel
2. Go to Deployments
3. Select the desired previous deployment
4. Click "Promote to Production"

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Backend Repository](https://github.com/disc-template/backend)
