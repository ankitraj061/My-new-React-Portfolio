# Ankit Raj Portfolio

An interactive developer portfolio built with React, Vite, Tailwind CSS, and Three.js.  
The site showcases my profile, skills, experience, education, and projects with a 3D landing experience and a working contact form.

## Live Website

[https://ankitraj.fun/](https://ankitraj.fun/)

## Features

- 3D hero section using `@react-three/fiber` and `three`
- Animated 3D models (island, bird, plane, fox, sky)
- Multi-page routing with React Router (`/`, `/about`, `/projects`, `/contact`)
- Work experience and education timeline
- Skills and interests showcase
- Projects grid with GitHub/live links
- Contact form integrated with EmailJS
- Responsive design for mobile and desktop

## Tech Stack

- React 18
- Vite 4
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- React Router DOM
- EmailJS (`@emailjs/browser`)
- Lucide React icons

## Project Structure

```txt
.
├── public/
├── src/
│   ├── assets/          # icons, images, audio, 3D models
│   ├── components/      # shared UI components
│   ├── constants/       # skills, projects, social links, timeline data
│   ├── hooks/           # custom hooks (alert handling)
│   ├── models/          # 3D model wrappers/components
│   ├── pages/           # Home, About, Projects, Contact
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

By default, Vite serves the app at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

These are required for the Contact page form submission.

## Deployment

This project is configured for deployment on Vercel (`vercel.json` is included).

General deployment flow:

1. Push code to GitHub.
2. Import the repository in Vercel.
3. Add the required EmailJS environment variables in Vercel Project Settings.
4. Deploy.

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Author

Ankit Raj  
- Portfolio: [https://ankitraj061.vercel.app/](https://ankitraj061.vercel.app/)
- GitHub: [https://github.com/ankitraj061](https://github.com/ankitraj061)
- LinkedIn: [https://www.linkedin.com/in/ankitraj061](https://www.linkedin.com/in/ankitraj061)
