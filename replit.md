# Overview

This is a personal portfolio website for Eric Marins, a front-end web developer. The portfolio showcases the developer's skills, projects, professional journey, and provides contact functionality. It features a modern, animated user interface with sections for About, Skills, Journey (timeline), Projects (Works), and Contact. The site is designed to be responsive and visually appealing with smooth animations and interactions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a component-based React architecture with Create React App as the build tool. The project follows a modular structure where each major section (About, Skills, Journey, Works, Contact) is implemented as a separate component. The main application flow is managed through a single-page application structure using React Router for any external link handling.

## Animation System
Framer Motion is used extensively throughout the application for animations and transitions. Each component implements custom animation variants for entrance effects, hover states, and scroll-based animations. The animation system includes loading animations, scroll-triggered reveals, and interactive hover effects.

## State Management
The application uses React's built-in useState for local component state management. No external state management library is implemented, keeping the architecture simple and lightweight. State is primarily used for navigation toggle, form handling, tab switching in the Works section, and loading states.

## Form Handling
Contact form functionality is integrated with Netlify's built-in form handling system. The form uses a hidden HTML form in the index.html for Netlify's post-processing, while the React component handles the user interface and form submission via fetch API.

## Navigation System
Features a mobile-first collapsible side navigation with smooth scrolling functionality implemented via react-scroll library. The navigation includes social media links and smooth transitions between sections.

## Project Structure
- `/src/components/` - Contains all reusable UI components
- `/src/pages/` - Contains page-level components
- `/src/styles/` - Component-specific CSS files
- `/src/data/` - Static data for skills, projects, and other content
- `/src/images/` - Static assets and images

# External Dependencies

## Core Technologies
- **React 18.2.0** - Main UI library for component-based architecture
- **React DOM 18.2.0** - DOM rendering for React components
- **React Router DOM 6.4.2** - Client-side routing for external link handling

## Animation and UI
- **Framer Motion 7.6.4** - Advanced animation library for page transitions and component animations
- **React Icons 4.4.0** - Icon library providing consistent iconography
- **React Scroll 1.8.8** - Smooth scrolling functionality for navigation

## User Interaction
- **React Toastify 10.0.6** - Toast notification system for user feedback

## Development and Build
- **Create React App** - Build tooling and development server
- **React Scripts 5.0.0** - Build scripts and configuration

## Deployment
- **Netlify** - Hosting platform with form handling capabilities
- **Serve 14.2.5** - Static file serving for production builds

## Testing
- **@testing-library/jest-dom 5.16.2** - Jest DOM testing utilities
- **@testing-library/react 12.1.3** - React component testing
- **@testing-library/user-event 13.5.0** - User interaction testing

The application is configured for deployment on Netlify with integrated form processing and optimized for performance with modern web standards.