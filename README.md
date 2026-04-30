# React + Vite Application with Routing and API Integration

A modern React application built with Vite, featuring React Router for navigation, Tailwind CSS for styling, and integration with public APIs for dynamic content.

## Features

### 🚀 Routing & Navigation
- **React Router v7** for client-side routing
- Navigation bar with links to Home and Tasks pages
- Clean URL structure with dynamic route parameters

### 🏠 Home Page
- Fetches and displays random advice from the [Advice Slip API](https://api.adviceslip.com/)
- Loading state with animated spinner while data is being fetched
- Error handling with user-friendly messages
- Button to fetch new advice without page reload
- Responsive gradient background with centered content

### 📋 Tasks List Page
- Fetches a list of 10 tasks from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- Displays each task using a reusable `TaskCard` component
- Visual indicators for task completion status:
  - Green badge for completed tasks
  - Yellow badge for pending tasks
- Click on any task to view its details
- Loading and error states with proper feedback

### 🔍 Task Detail Page
- Dynamic routing with `tasks/:id` parameter
- Fetches and displays detailed information about selected task
- Shows task ID, User ID, Title, and Completion status
- "Back to Tasks" navigation link with arrow indicator
- Handles missing or invalid task IDs gracefully

### 🎨 UI & Styling
- **Tailwind CSS v4** for modern utility-first styling
- Fully **responsive design** optimized for mobile and desktop
- Gradient backgrounds and smooth transitions
- Loading spinners and loading states
- Consistent color scheme and typography
- Hover effects and interactive feedback

### 🛠 Development Tools
- **Vite** for fast development and optimized builds
- **ESLint** for code quality
- Hot Module Replacement (HMR) for instant updates during development
- Module-based architecture with reusable components

## Project Structure

```
Mini_React/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar with routing links
│   │   └── TaskCard.jsx        # Reusable task card component
│   ├── pages/
│   │   ├── Home.jsx            # Home page with advice API integration
│   │   ├── TasksList.jsx       # Tasks list page
│   │   └── TaskDetail.jsx      # Task detail page
│   ├── App.jsx                 # Main app with Router setup
│   ├── main.jsx                # React entry point
│   ├── App.css                 # App-specific styles
│   └── index.css               # Global styles & Tailwind directives
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Installation

1. Navigate to the project directory:
```bash
cd Mini_React
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development Server
Start the Vite development server with HMR enabled:
```bash
npm run dev
```
The application will be available at `http://localhost:5173/`

### Production Build
Build the application for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Lint Code
Check code quality with ESLint:
```bash
npm run lint
```

## Dependencies

### Production
- **React** (v18.2) - UI library
- **React DOM** (v18.2) - React rendering for the browser
- **React Router DOM** (v7.13) - Client-side routing library

### Development
- **Vite** (v5.0) - Fast build tool and dev server
- **Tailwind CSS** (v4) - Utility-first CSS framework
- **PostCSS** (v8) - CSS processing tool
- **Autoprefixer** - CSS vendor prefix tool
- **ESLint** (v8) - JavaScript linting tool
- **Vite React Plugin** - React-specific Vite plugin

## API Integration

### Advice Slip API
- **Endpoint**: `https://api.adviceslip.com/advice`
- **Usage**: Fetches random advice on the Home page
- **No authentication required**

### JSONPlaceholder API
- **Endpoint**: `https://jsonplaceholder.typicode.com/todos`
- **Usage**: Fetches a list of sample tasks
- **No authentication required**

## Browser Support

This application works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid & Flexbox
- Fetch API

## Development Notes

### Component Structure
- **Navigation**: Global navigation component used in App
- **TaskCard**: Reusable component for displaying task items
- **Pages**: Individual page components handle their own data fetching and state

### State Management
- Uses React hooks (`useState`, `useEffect`) for component state
- Props passing for child component communication

### Styling Approach
- Tailwind CSS utility classes for rapid development
- Custom CSS for component-specific styles
- Responsive design using Tailwind's breakpoints (sm, md, lg)

### Error Handling
- Try-catch blocks for API calls
- User-friendly error messages
- Loading states to prevent UI inconsistencies

## Performance Optimizations

- **Code splitting**: Route-based code splitting via React Router
- **Lazy loading**: Components load on demand
- **Fast refresh**: Instant updates during development via HMR
- **Production build**: Optimized and minified for deployment

## Future Enhancements

Potential features to add:
- Add task creation/editing functionality
- Implement task filtering and sorting
- Add pagination for large task lists
- Authentication system
- Task persistence with backend API
- Dark mode toggle
- Animations and transitions
- Search functionality

## License

This project is open source and available under the MIT License.
