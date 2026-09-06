# Portfolio Website Architecture

This document outlines the architecture and folder structure of the portfolio website.

## Folder Structure

```
.
├── public/
│   ├── docs/
│   │   └── arefin_cv.pdf
│   ├── images/
│   │   ├── arefino-cover-image.jpg
│   │   ├── maintenance-preview.jpg
│   │   └── portrait/
│   │       └── ohi_portrait.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Projects.tsx
│   │   └── Resume.tsx
│   ├── docs/
│   │   └── arefin_cv.pdf
│   ├── image/
│   │   ├── portrait/
│   │   │   ├── 2.png
│   │   │   ├── 3.png
│   │   │   ├── 4.png
│   │   │   ├── arefin_portrait.png
│   │   │   └── ohi_portrait.png
│   │   └── project/
│   │       └── aio-dashboard.jpg
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── netlify.toml
│   └── vite-env.d.ts
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── index.html
```

## File and Folder Descriptions

### `public/`
This directory serves static assets that are directly accessible by the browser.
- `public/docs/`: Contains downloadable documents like resumes.
  - `public/docs/arefin_cv.pdf`: The resume document.
- `public/images/`: Stores various images used across the site.
  - `public/images/arefino-cover-image.jpg`: Cover image for the portfolio.
  - `public/images/maintenance-preview.jpg`: Image shown during maintenance.
  - `public/images/portrait/ohi_portrait.png`: A portrait image.
- `public/index.html`: The main HTML file for the application.

### `src/`
This directory contains the core source code for the React application.
- `src/components/`: Houses reusable React components.
  - `src/components/About.tsx`: Component displaying information about the portfolio owner.
  - `src/components/Contact.tsx`: Component for contact information or a contact form.
  - `src/components/Projects.tsx`: Component showcasing various projects.
  - `src/components/Resume.tsx`: Component for displaying resume information (likely linking to the PDF).
- `src/docs/`: Another location for documents, potentially for internal use or direct linking.
  - `src/docs/arefin_cv.pdf`: Another instance of the resume document.
- `src/image/`: Contains images specifically used by components or within the source code.
  - `src/image/portrait/`: Portrait images.
  - `src/image/project/`: Images related to specific projects.
- `src/App.tsx`: The root component of the React application, where other components are assembled.
- `src/index.css`: Global CSS styles for the application.
- `src/main.tsx`: The entry point of the React application, responsible for rendering the `App` component.
- `src/netlify.toml`: Configuration file for Netlify deployments.
- `src/vite-env.d.ts`: TypeScript declaration file for Vite environment variables.

### Root Files
- `index.html`: The main HTML file (another instance at the root, potentially for development or build purposes).
- `package.json`: Defines project metadata, scripts, and dependencies.
  - **Example Snippet:**
    ```json
    {
      "name": "portfolio-website",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "tsc -b && vite build",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
      },
      "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.23.1"
      },
      "devDependencies": {
        "@types/react": "^18.2.66",
        "@types/react-dom": "^18.2.22",
        "@typescript-eslint/eslint-plugin": "^7.2.0",
        "@typescript-eslint/parser": "^7.2.0",
        "@vitejs/plugin-react": "^4.2.1",
        "autoprefixer": "^10.4.19",
        "eslint": "^8.57.0",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.6",
        "postcss": "^8.4.38",
        "tailwindcss": "^3.4.3",
        "typescript": "^5.2.2",
        "vite": "^5.2.0"
      }
    }
    ```
- `vite.config.ts`: Configuration file for Vite, the build tool.
  - **Example Snippet:**
    ```typescript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
    })
    ```
- `tailwind.config.js`: Configuration for Tailwind CSS.
  - **Example Snippet:**
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
- `postcss.config.js`: Configuration for PostCSS, used for processing CSS.
  - **Example Snippet:**
    ```javascript
    export default {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    ```
- `eslint.config.js`: Configuration for ESLint, a linter.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration files for different environments (base, app, and Node.js).
  - **Example Snippet (`tsconfig.json`):**
    ```json
    {
      "compilerOptions": {
        "target": "ES2020",
        "useDefineForClassFields": true,
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "module": "ESNext",
        "skipLibCheck": true,

        /* Bundler mode */
        "moduleResolution": "bundler",
        "allowImportingTsExtensions": true,
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx",

        /* Linting */
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true
      },
      "include": ["src"],
      "references": [{ "path": "./tsconfig.node.json" }]
    }
    ```
