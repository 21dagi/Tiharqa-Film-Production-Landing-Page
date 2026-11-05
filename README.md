# Tiharqa Film Production — Official Website

Official website for **Tiharqa Film Production**, an Ethiopian film production company based in Addis Ababa, specializing in Amharic feature films, historical epics, and cultural documentaries.

## Tech Stack

* **Framework**: React 19 + TypeScript
* **Bundler**: Vite 7 (configured with `vite-plugin-singlefile`)
* **Styling**: Tailwind CSS v4
* **Icons**: Lucide React
* **Deployment Target**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The application runs locally at `http://localhost:5173/`.

## Production Build

```bash
npm run build
```

The build compiles into the `dist/` directory.

## Vercel Deployment

This project includes a pre-configured `vercel.json` optimized for Vite SPAs:

1. Push or import the repository to your Vercel account.
2. Vercel automatically detects the Vite framework.
3. Build command: `npm run build`
4. Output directory: `dist`
