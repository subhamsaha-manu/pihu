# Poulomi - React + TypeScript + Tailwind + Vite

A simple React project built with TypeScript, Tailwind CSS, and Vite, ready for Netlify deployment.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Netlify Deployment

This project is configured for easy deployment on Netlify:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`

The `netlify.toml` file includes a redirect rule for client-side routing support.

## Project Structure

```
poulomi/
├── src/
│   ├── components/
│   │   └── SimpleComponent.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── netlify.toml
```

