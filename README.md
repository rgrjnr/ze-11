# Ze-11 - 11ty Site with Tailwind CSS and TypeScript

A modern website built with 11ty, Tailwind CSS, and TypeScript, featuring GSAP animations and PostHog analytics.

## Features

- **11ty Static Site Generator** - Fast, flexible static site generation
- **Tailwind CSS** - Utility-first CSS framework with PostCSS processing
- **TypeScript** - Type-safe JavaScript with modern ES2020 features
- **Vite** - Fast build tool for bundling and development
- **GSAP Animations** - Professional-grade animations with ScrollTrigger and ScrollSmoother
- **PostHog Analytics** - Product analytics and session recording
- **Legacy Browser Support** - Automatic polyfills for older browsers

## Build Process

### Production Build

```bash
npm run build
```

This command:

1. Compiles SCSS with Tailwind CSS using PostCSS
2. Bundles TypeScript with Vite (includes legacy browser support)
3. Generates the static site with 11ty

### Development

#### Full Development Mode (Recommended)

```bash
npm run dev:full
```

This runs all watchers concurrently:

- CSS compilation with PostCSS
- TypeScript bundling with Vite dev server
- 11ty site generation with live reload

#### Individual Development Commands

```bash
# CSS only
npm run build:css:watch

# TypeScript only (with Vite dev server)
npm run dev:js

# 11ty only
npm run watch:11ty
```

## Available Scripts

- `npm run build` - Full production build
- `npm run build:css` - Compile CSS only
- `npm run build:js` - Bundle JavaScript only
- `npm run build:11ty` - Generate static site only
- `npm run dev:full` - Full development mode with all watchers
- `npm run dev:js` - Vite development server for TypeScript
- `npm run clean` - Clean build artifacts
- `npm run serve` - Serve the built site

## Browser Support

The build process automatically generates:

- **Modern browsers**: ES2020 modules with modern features
- **Legacy browsers**: ES5 code with polyfills for older browsers

The site includes automatic browser detection and loads the appropriate bundle.

## File Structure

```
src/
├── _data/           # 11ty data files
├── _includes/       # 11ty includes/templates
├── _layouts/        # 11ty layouts
├── assets/          # Static assets (images, etc.)
├── cases/           # Case study pages
├── styles/          # SCSS files with Tailwind
└── ts/              # TypeScript source files

dist/                # Compiled JavaScript (Vite output)
_site/               # Generated static site (11ty output)
```

## Technologies Used

- **11ty** - Static site generator
- **Tailwind CSS** - CSS framework
- **PostCSS** - CSS processing
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **PostHog** - Analytics platform
