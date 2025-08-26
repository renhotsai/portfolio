# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jeremy's personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The project uses the new Next.js App Router and follows modern React patterns with animations powered by Framer Motion.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The development server runs on http://localhost:3000 and uses Turbopack for faster builds.

## Architecture

### Project Structure
- **Working Directory**: `/Users/renhotsai/Desktop/portfolio/portfolio/` (note the nested portfolio directory)
- **App Router**: Uses Next.js 13+ App Router pattern (`src/app/`)
- **Component Organization**: Reusable components in `src/components/`, UI primitives in `src/components/ui/`
- **Styling**: Tailwind CSS v4 with CSS variables and shadcn/ui components
- **Animations**: Framer Motion with custom `MotionWrap` component for consistent animations

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with new inline theme configuration
- **shadcn/ui** components (configured in `components.json`)
- **Framer Motion** for animations
- **Lucide React** for icons

### Component Architecture

#### Core Components
- **`Navbar`**: Sticky header with navigation links (has TODO for mobile menu)
- **`ProjectCard`**: Reusable card component for displaying projects with optional GitHub/live demo links
- **`MotionWrap`**: Custom wrapper for Framer Motion animations with consistent entrance effects
- **UI Components**: Located in `src/components/ui/` following shadcn/ui patterns

#### Pages Structure
- **Home** (`/`): Landing page with hero section and CTA buttons
- **Projects** (`/projects`): Grid layout showcasing sample projects
- **About** (`/about`): About page (structure exists)
- **Contact** (`/contact`): Contact page (structure exists)

### Styling System

The project uses Tailwind CSS v4 with:
- **CSS Variables**: Extensive use of CSS custom properties for theming
- **Dark Mode**: Full dark mode support with `.dark` class variant
- **shadcn/ui Integration**: Pre-configured component system with proper aliases
- **Custom Theme**: Inline theme configuration in `globals.css` using OKLCH color space
- **Animation Library**: `tw-animate-css` for additional animations

### TypeScript Configuration

- **Path Aliases**: `@/*` maps to `./src/*` for clean imports
- **Strict Mode**: Full TypeScript strict mode enabled
- **Next.js Plugin**: Configured for optimal Next.js development

## Development Guidelines

### Component Patterns
- Use the `MotionWrap` component for consistent animations with staggered delays
- Follow shadcn/ui patterns for new UI components
- Implement proper TypeScript interfaces for component props
- Use `cn()` utility from `@/lib/utils` for conditional class names

### Styling Conventions
- Leverage CSS variables for theming (defined in `globals.css`)
- Use Tailwind utility classes with the configured aliases
- Follow the established color system using OKLCH color space
- Maintain responsive design patterns (`md:`, `lg:` breakpoints)

### Animation Patterns
- Use `MotionWrap` with appropriate delays for staggered animations
- Implement `whileInView` for viewport-triggered animations
- Maintain consistent animation timing and easing

### File Organization
- New components go in `src/components/`
- UI primitives follow shadcn/ui patterns in `src/components/ui/`
- Pages use App Router structure in `src/app/`
- Utility functions in `src/lib/`

## Known Issues/TODOs
- Mobile menu implementation needed in `Navbar` component (`src/components/Navbar.tsx:34`)
- Sample projects in `/projects` page use placeholder data and empty image URLs