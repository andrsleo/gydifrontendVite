# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**affiliategydi** is a React + TypeScript + Vite real estate affiliate platform frontend. The application features property catalog browsing, user authentication, and a dashboard for managing affiliates.

## Commands

### Development
```bash
npm run dev          # Start Vite dev server with HMR (default: http://localhost:5173)
npm run build        # Type-check with tsc -b, then build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on the codebase
```

## Architecture

### Tech Stack
- **React 19** with **TypeScript** for UI
- **Vite 7** as build tool with SWC plugin for fast refresh
- **React Router v7** for routing
- **Tailwind CSS** for styling
- **React Hook Form + Zod** for form validation
- **Lucide React** for icons

### Project Structure

```
src/
├── features/          # Feature-based modules (e.g., auth)
│   └── auth/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── schemas/   # Zod schemas for validation
│       └── services/
├── pages/             # Route pages (LoginPage, DashboardPage, CatalogPage, etc.)
├── components/        # Reusable UI components
│   ├── layout/        # Header, Sidebar (authenticated layout)
│   └── ui/            # Generic components (Button, Input, Modal, Badge, etc.)
├── layouts/           # Layout wrappers (DashboardLayout)
├── routes/            # Route guards (PrivateRoute)
├── services/          # API service layer (propertyService)
├── interfaces/        # TypeScript interfaces (Property, PaginatedResponse)
├── mocks/             # Mock data for development
├── config/            # Centralized config from env variables
├── context/           # React Context providers (AuthContext)
└── hooks/             # Custom React hooks
```

### Key Architectural Patterns

#### 1. Path Aliases
- Uses `@/` alias pointing to `src/` directory (configured in vite.config.ts)
- Always use `@/` imports instead of relative paths

#### 2. Authentication Flow
- **AuthContext** (`src/context/AuthContext.tsx`) manages global auth state
- **PrivateRoute** component protects authenticated routes
- Login is simulated (no real API yet): `admin@demo.com` / `123456`
- User state persists in React Context (session-only, no localStorage)

#### 3. API Service Layer
- **propertyService** (`src/services/propertyService.ts`) centralizes API calls
- Uses `apiFetch<T>()` helper with error handling
- Falls back to mock data when API is unavailable
- API base URL configured via `VITE_API_BASE_URL` environment variable

#### 4. Environment Configuration
- Centralized in `src/config/config.ts`
- Environment files: `.env.development`, `.env.production`, `.env.test`
- Key variables:
  - `VITE_API_BASE_URL`: Backend API endpoint
  - `VITE_LOG_LEVEL`: Logging level (debug/info/warn/error)

#### 5. Routing Structure
```
/login              → LoginPage (public)
/catalog            → CatalogPage (public - property listings)
/catalog/:id        → PropertyDetailPage (public)
/dashboard/*        → DashboardPage (protected)
  ├── /resumen      → Summary tab
  ├── /usuarios     → Users tab
  └── /configuracion → Settings tab
```

#### 6. Component Organization
- **UI components** are reusable, atomic design elements in `components/ui/`
- **Layout components** handle page structure (Sidebar, Header) in `components/layout/`
- **Feature components** are specific to features (e.g., `features/auth/components/`)
- Mix of `.tsx` (TypeScript) and `.jsx` (legacy JavaScript) files - prefer `.tsx` for new components

#### 7. Forms & Validation
- Use **React Hook Form** with **Zod** resolvers
- Schemas defined in `features/*/schemas/` (e.g., `loginSchema.ts`)
- Example pattern:
  ```typescript
  import { useForm } from 'react-hook-form';
  import { zodResolver } from '@hookform/resolvers/zod';
  import { loginSchema } from '@/features/auth/schemas/loginSchema';
  ```

#### 8. Styling Approach
- **Tailwind CSS** utility-first
- Custom theme colors defined in `tailwind.config.js`:
  - `primary`: #2563eb (blue)
  - `secondary`: #9333ea (purple)
- No component library used - custom components built with Tailwind

### Data Flow

1. **API Requests**: Components → Services (`propertyService`) → Backend API
2. **Authentication**: Login → AuthContext → PrivateRoute guards → Protected pages
3. **Mock Fallback**: If API fails, services return mock data from `src/mocks/`

### TypeScript Configuration

- Uses project references with `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config)
- Strict mode enabled for type safety

### Development Notes

- The app is configured to run against a backend API at `http://localhost:8080` by default
- When the backend is unavailable, the app gracefully falls back to mock data
- Authentication is currently simulated; replace with real API integration when ready
- Some legacy files still use `.jsx` and `.js` - migrate to `.tsx` and `.ts` for consistency
