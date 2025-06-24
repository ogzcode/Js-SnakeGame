---
title: Installation
description: Installation guide for the project
category: Getting Started
order: 1
---

# Installation

This guide contains all the necessary steps to quickly set up and run your project.

## Prerequisites

Before getting started, make sure the following tools are installed on your system:

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0+)
- **Git** (for version control)

### Check Node.js Version

To check your current Node.js version:

::TabView
#preview
```bash
node --version
# v18.17.0

npm --version  
# 9.6.7
```

#code
```bash
# Run these commands in terminal
node --version
npm --version
```
::

## Installation Methods

### 1. Installation with NPM

The easiest installation method is using npm:

::TabView
#preview
```bash
# Create a new project
npx create-nuxt-app@latest my-awesome-project

# Navigate to project directory
cd my-awesome-project

# Install dependencies
npm install

# Start development server
npm run dev
```

#code
```bash
npx create-nuxt-app@latest my-awesome-project
cd my-awesome-project
npm install
npm run dev
```
::

### 2. Installation with Yarn

If you prefer using Yarn:

::TabView
#preview
```bash
# Create a new project
yarn create nuxt-app my-awesome-project

# Navigate to project directory
cd my-awesome-project

# Install dependencies
yarn install

# Start development server
yarn dev
```

#code
```bash
yarn create nuxt-app my-awesome-project
cd my-awesome-project
yarn install
yarn dev
```
::

### 3. Installation with Git Clone

To clone an existing repository:

::TabView
#preview
```bash
# Clone the repository
git clone https://github.com/username/nuxt-doc-template.git

# Navigate to project directory
cd nuxt-doc-template

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

#code
```bash
git clone https://github.com/username/nuxt-doc-template.git
cd nuxt-doc-template
npm install
cp .env.example .env.local
npm run dev
```
::

## Project Structure

After installation is complete, your project structure will look like this:

```
my-awesome-project/
├── assets/           # CSS, images and other static assets
├── components/       # Vue components
├── composables/      # Vue composables
├── content/          # Markdown content files
├── layouts/          # Page layouts
├── pages/            # Page components (automatic routing)
├── plugins/          # Nuxt plugins
├── public/           # Static files
├── server/           # Server-side code
├── nuxt.config.ts    # Nuxt configuration
└── package.json      # Project dependencies
```

## Configuration

### Environment Variables

Create a `.env.local` file and add the necessary variables:

::TabView
#preview
```env
# API URL
NUXT_PUBLIC_API_URL=https://api.example.com

# Database URL
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# App Environment
NODE_ENV=development
```

#code
```env
NUXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```
::

### Nuxt Configuration

Customize the `nuxt.config.ts` file according to your project:

::TabView
#preview
```typescript
export default defineNuxtConfig({
  // CSS framework
  css: ['~/assets/css/main.css'],
  
  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  
  // Content module configuration
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  
  // Development server
  devtools: { enabled: true }
})
```

#code
```typescript
export default defineNuxtConfig({
  // CSS framework
  css: ['~/assets/css/main.css'],
  
  // Modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  
  // Content module configuration
  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  
  // Development server
  devtools: { enabled: true }
})
```
::

## Verification

To verify that the installation was successful:

1. **Check that the development server is running**
   - Go to `http://localhost:3000`
   - The homepage should load

2. **Test the build process**

::TabView
#preview
```bash
# Create production build
npm run build

# Preview the build
npm run preview
```

#code
```bash
npm run build
npm run preview
```
::

3. **Linting and type checking**

::TabView
#preview
```bash
# ESLint check
npm run lint

# TypeScript type checking
npm run typecheck

# Run all tests
npm run test
```

#code
```bash
npm run lint
npm run typecheck
npm run test
```
::

## Common Issues and Solutions

### Port Conflicts

If port 3000 is busy:

::TabView
#preview
```bash
# Specify different port
PORT=3001 npm run dev

# Or update script in package.json
"dev": "nuxt dev --port 3001"
```

#code
```bash
PORT=3001 npm run dev
```
::

### Node.js Version Issues

If your Node.js version is incompatible:

::TabView
#preview
```bash
# Install correct version using NVM
nvm install 18.17.0
nvm use 18.17.0

# Or use fnm
fnm install 18.17.0
fnm use 18.17.0
```

#code
```bash
nvm install 18.17.0
nvm use 18.17.0
```
::

### Cache Clearing

If you're experiencing build issues:

::TabView
#preview
```bash
# Clear node modules and cache
rm -rf node_modules
rm -rf .nuxt
rm package-lock.json

# Reinstall
npm install
```

#code
```bash
rm -rf node_modules .nuxt package-lock.json
npm install
```
::

## Next Steps

After installation is complete:

1. [Your First Project](/get-started/introduction) - Learn basic concepts
2. [API Reference](/api/api-reference) - Detailed API documentation
3. [Examples](/examples) - Check out ready-made examples

## Support

If you encounter issues during installation:

- 📧 **Email**: support@example.com
- 💬 **Discord**: [Join our community](https://discord.gg/example)
- 🐛 **Issues**: [GitHub Issues](https://github.com/username/repo/issues)
- 📖 **Documentation**: [Full documentation](https://docs.example.com)

Installation complete! 🎉 You can now start developing.

