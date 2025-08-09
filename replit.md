# Overview

This is a personal portfolio website for Khaan Claasz Coockson, a Senior Data Platform Engineer at LEGO. The application is built as a single-page portfolio showcasing professional experience, skills, education, and contact information. It serves as a professional presence and resume website with a modern, tech-focused design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using **TypeScript** and follows a component-based architecture:

- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom dark theme optimized for tech portfolios
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management (though currently no API calls)

The application uses a modular component structure with separate sections for hero, experience, skills, education, and contact information. The design emphasizes a dark tech aesthetic with cyan and green accent colors.

## Backend Architecture

The backend uses **Express.js** with **TypeScript** in a minimal setup:

- **Server Framework**: Express.js with middleware for JSON parsing and request logging
- **Storage Layer**: Abstract storage interface with in-memory implementation for user management
- **Development Setup**: Vite integration for hot module replacement in development
- **Build Process**: ESBuild for server-side bundling

The backend currently serves as a foundation with user schema defined but no active API endpoints implemented.

## Data Storage Solutions

- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Centralized schema definitions in `shared/schema.ts`
- **Development Storage**: In-memory storage implementation for user data
- **Production Ready**: Configured for Neon Database (PostgreSQL) via environment variables

The application uses a shared schema approach where database models are accessible to both frontend and backend through the shared directory.

## Authentication and Authorization

Basic user schema is defined with username/password fields, but no authentication flow is currently implemented. The storage interface includes methods for user creation and retrieval by username/ID.

## Build and Deployment

- **Development**: Concurrent client and server development with HMR
- **Production**: Static client build served by Express server
- **Asset Management**: Vite handles asset optimization and bundling
- **Environment**: Configured for Replit deployment with specific plugins

The application follows a monorepo structure with client, server, and shared code organized in separate directories.

# External Dependencies

## Database Services
- **Neon Database**: PostgreSQL hosting service for production data storage
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for server builds
- **TanStack Query**: Data fetching and caching library

## Third-party Integrations
- **Google Fonts**: Inter and JetBrains Mono fonts for typography
- **Font Awesome**: Icon library for social media and contact icons
- **Replit**: Deployment platform with specific development tooling

## Runtime Dependencies
- **Wouter**: Lightweight routing library
- **React Hook Form**: Form handling and validation
- **Date-fns**: Date manipulation utilities
- **Class Variance Authority**: Component variant management
- **CLSX/Tailwind Merge**: Conditional CSS class utilities