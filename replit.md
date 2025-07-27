# Portfolio Website

## Overview

This is a modern, interactive portfolio website for Rakesh Kumar Sharma, a Java Developer specializing in microservices architecture. The application features a cyberpunk/matrix-inspired design with a glass morphism aesthetic, built using React, TypeScript, and Express.js with a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Monorepo Structure
The application follows a monorepo pattern with clear separation between client and server code:
- **Frontend**: React with TypeScript in the `client/` directory
- **Backend**: Express.js with TypeScript in the `server/` directory  
- **Shared**: Common types and schemas in the `shared/` directory
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations

### Design System
- **UI Framework**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Theme**: Dark cyberpunk aesthetic with neon accent colors (green, blue, purple, orange)
- **Typography**: Inter for body text, JetBrains Mono for code elements

## Key Components

### Frontend Architecture
- **React Router**: Using Wouter for client-side routing
- **State Management**: TanStack Query for server state, React hooks for local state
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Comprehensive component library based on Radix UI primitives
- **Animations**: Custom CSS animations for matrix rain effect and typing animations

### Backend Architecture
- **Express.js**: RESTful API server with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL (configured for Neon serverless)
- **Validation**: Zod schemas shared between client and server
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Vite integration for hot module replacement

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, name, email, subject, message, createdAt)
- **Schema Validation**: Drizzle-Zod integration for runtime type safety

## Data Flow

### Contact Form Workflow
1. User fills out contact form on portfolio website
2. Client-side validation using React Hook Form + Zod
3. Form submission via TanStack Query mutation
4. Server validates data using shared Zod schemas
5. Contact message stored in PostgreSQL database
6. Success/error feedback displayed to user via toast notifications

### Development Workflow
1. Vite dev server for frontend with HMR
2. Express server with TypeScript compilation via tsx
3. Database migrations managed through Drizzle Kit
4. Shared types ensure consistency between client/server

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the entire stack
- **Vite**: Build tool and development server

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **Drizzle Kit**: Database migrations and schema management

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Form & Validation
- **React Hook Form**: Performant form library
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod resolver for React Hook Form

### Developer Experience
- **TanStack Query**: Server state management
- **Wouter**: Lightweight React router
- **date-fns**: Date utility library

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Serves static files from Express with API routes
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Production Optimizations
- Static asset serving through Express
- TypeScript compilation for both client and server
- Database connection pooling via Neon serverless
- Error boundary implementation with proper error handling

The architecture prioritizes developer experience with hot reloading, type safety, and clear separation of concerns while maintaining a cohesive design system throughout the application.