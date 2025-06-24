# 11ty Boilerplate with Tailwind CSS, TypeScript, and SCSS

A modern, flexible starter template for [Eleventy (11ty)](https://www.11ty.dev/) with [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/), and [SCSS](https://sass-lang.com/) support.

## Features

- ⚡ **11ty Static Site Generator** - Fast, flexible, and powerful
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe JavaScript that compiles to clean code
- 🎯 **SCSS** - Advanced CSS with variables, mixins, and nesting
- 🧩 **Component System** - Reusable Nunjucks components
- 📁 **Organized Structure** - Clear separation of layouts, components, and content
- 🔄 **Live Reload** - Development server with hot reloading
- 📱 **Responsive Design** - Mobile-first approach
- ✨ **Custom Animations** - Built-in animation utilities
- 🎨 **Design System** - Consistent button, card, and form components

## Project Structure

```
src/
├── _data/                  # Global data files
│   └── site.json          # Site configuration
├── _includes/              # Reusable includes
│   ├── _layouts/          # Page layouts
│   │   └── base.njk       # Base layout template
│   └── components/        # Reusable components
│       ├── card.njk       # Card component
│       ├── hero.njk       # Hero section component
│       └── button.njk     # Button component with variants
├── assets/                 # Static assets
│   └── images/            # Image files
├── cases/                  # Case studies content
│   ├── index.njk          # Cases listing page
│   └── sample-case.md     # Sample case study
├── styles/                 # SCSS styles
│   └── input.scss         # Main SCSS file with Tailwind + custom styles
├── ts/                     # TypeScript source files
│   └── main.ts            # Main TypeScript file
└── index.njk              # Homepage
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will:
- Compile SCSS to CSS with Tailwind
- Compile TypeScript files
- Start the 11ty development server with live reload
- Watch for file changes

The site will be available at `http://localhost:8080`

### Build Commands

- `npm run build` - Build the entire project for production
- `npm run build:scss` - Compile SCSS to CSS only
- `npm run build:scss:watch` - Watch and compile SCSS files
- `npm run build:ts` - Compile TypeScript only
- `npm run build:11ty` - Build 11ty site only
- `npm run clean` - Clean the output directory

## Usage

### SCSS Features

The project includes a comprehensive SCSS setup with:

#### Variables
```scss
$primary-color: #3b82f6;
$secondary-color: #6b7280;
$font-family-base: system-ui, sans-serif;
```

#### Mixins
```scss
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}
```

#### Component Classes
- `.btn` - Button component with multiple variants
- `.card` - Card component with header, body, footer
- `.form-group` - Form styling utilities
- `.nav` - Navigation component

#### Utility Classes
- `.text-gradient` - Gradient text effect
- `.animate-fade-in` - Fade in animation
- `.hover-lift` - Hover lift effect
- `.hover-scale` - Hover scale effect

### Adding Content

#### Case Studies

Create new case studies in the `src/cases/` directory:

```markdown
---
title: Your Case Study Title
layout: base.njk
tags: cases
excerpt: Brief description of your case study
image: /assets/images/your-image.jpg
date: 2024-01-15
---

# Your Case Study Content

Write your case study content here using Markdown.
```

#### Components

Create reusable components in `src/_includes/components/`:

```njk
{% macro yourComponent(param1, param2) %}
<div class="your-classes">
    {{ param1 }}
</div>
{% endmacro %}
```

Use components in your pages:

```njk
{% from "components/yourComponent.njk" import yourComponent %}

{{ yourComponent("value1", "value2") }}
```

#### Button Component

The included button component supports multiple variants:

```njk
{% from "components/button.njk" import button %}

<!-- Basic buttons -->
{{ button("Primary", "primary") }}
{{ button("Secondary", "secondary") }}
{{ button("Success", "success") }}

<!-- Outline buttons -->
{{ button("Primary Outline", "primary", "", true) }}

<!-- Different sizes -->
{{ button("Small", "primary", "sm") }}
{{ button("Large", "primary", "lg") }}

<!-- Link buttons -->
{{ button("View Cases", "primary", "", false, "/cases/") }}
```

### Styling

#### SCSS with Tailwind

- Main styles are in `src/styles/input.scss`
- Use `@apply` to include Tailwind classes in SCSS
- Add custom components using `@layer components`
- Create custom utilities with `@layer utilities`

#### Custom SCSS

Add custom styles in the `src/styles/input.scss` file:

```scss
// Custom variables
$my-color: #ff6b6b;

// Custom mixins
@mixin my-mixin {
  // Your mixin code
}

// Custom components
@layer components {
  .my-component {
    @apply bg-blue-500 text-white;
    
    &:hover {
      @apply bg-blue-600;
    }
  }
}
```

### TypeScript

- TypeScript files go in `src/ts/`
- Compiled files are output to `dist/`
- The main TypeScript file is automatically included in the base layout

### Configuration

#### Site Data

Update site-wide information in `src/_data/site.json`:

```json
{
  "title": "Your Site Title",
  "description": "Your site description",
  "url": "https://your-domain.com"
}
```

#### 11ty Configuration

Modify `.eleventy.js` to customize 11ty behavior, add filters, or configure additional features.

#### Tailwind Configuration

Customize Tailwind in `tailwind.config.js` to add custom colors, fonts, or extend the default theme.

#### SCSS Configuration

The SCSS compilation is handled by the `sass` package. You can modify the build scripts in `package.json` to change compilation options.

## Deployment

Build the production site:

```bash
npm run build
```

The built site will be in the `_site/` directory, ready for deployment to any static hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the ISC License.
