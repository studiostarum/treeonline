# TreeOnline Website

This project contains the implementation for the TreeOnline website.

## Project Structure

```
project-root/
├── src/
│   ├── assets/
│   │   └── icons/
│   │       ├── ui/              # Interface elements
│   │       └── services/        # Service-specific icons
│   ├── js/
│   │   ├── components/         # Reusable UI components
│   │   ├── modules/           # Feature-specific business logic
│   │   └── main.js           # JavaScript entry point
│   ├── styles/
│   │   └── main.css          # Main stylesheet
│   └── index.html            # Entry point HTML
├── dist/                     # Build output
├── package.json             # Project configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Development:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Features

- Modern build setup with Vite
- ES modules for better code organization
- SVG icons with dynamic coloring using currentColor
- Optimized for production
- Development with hot module replacement 