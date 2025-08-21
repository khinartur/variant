# Variant Group Test Assignment

Application for Cover letters generation

**Deployed at** [variant.khineltsev.dev](https://variant.khineltsev.dev/)

## Storybook

Project has its own Storybook with a preview of all Pages / Widgets / Components

**Deployed at** [variant-storybook.khineltsev.dev](https://variant-storybook.khineltsev.dev/)

## Tech stack

- React
- TypeScript
- React Router
- Vite.js
- CSS Modules
- Zustand
- React Hook Form
- Vercel Functions

## Offline work

Application uses **IndexedDB** for storing generated letters on a user's side

## Letter generator

Application provides API handler for Vercel Serverless Functions `/api/generate-letter.ts`. To enable it, add Environment variable to your Vercel deployment configuration:

```
OPENAI_API_KEY=your_api_key
```

When API handler is not configured or returns error, there is a fallback letter generator that uses a simple letter template.

## Development

Vite.js is used for project building. For local development run:

```
yarn dev
```

For production build run:

```
yarn build
```

For Storybook build run:

```
yarn build-storybook
```
