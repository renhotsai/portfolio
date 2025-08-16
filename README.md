# Jeremy's Portfolio

A modern, responsive portfolio website showcasing my work as a Backend Engineer and Full-Stack Developer.

## About

This portfolio highlights my 5+ years of coding experience, including 3+ years of professional backend engineering and payment systems integration. I specialize in building robust web applications, RESTful APIs, and scalable backend systems using modern technologies.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Projects Carousel**: Auto-rotating showcase with manual navigation
- **Project Detail Pages**: Comprehensive project information with multi-image galleries
- **Skills & Experience**: Detailed breakdown of technical skills and professional experience
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## Projects Showcase

This portfolio features 8 comprehensive projects including:

- **Ace My Career**: Enterprise-scale job search platform with AWS hybrid architecture
- **Festival**: Event management platform with ticket booking system
- **BookBond**: Social platform for book enthusiasts built with React Native
- **Car Rent Application**: Mobile app with Firebase integration
- **Online Store**: iOS e-commerce application built with Swift
- **Restaurant App**: Management and ordering system with JavaScript
- **Housing Rental App**: Android platform built with Kotlin
- **HandyCourse**: Educational iOS platform with progress tracking

## Professional Experience

- **Backend Engineer** at Collaborate Technology (2021-2023)
- **Software Engineer** at Harmonation Inc. (2020-2021)
- Currently pursuing **Cloud Computing Technologies** at George Brown College

## Core Skills

- **Backend & APIs**: C#, Node.js, RESTful APIs, Payment Systems
- **Web Development**: Next.js, React, TypeScript, JavaScript
- **Mobile Development**: React Native, Swift, Kotlin, iOS/Android
- **Cloud & DevOps**: AWS, Azure, Docker, ECS, Lambda
- **Databases**: PostgreSQL, MongoDB, MSSQL, Firebase

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/renhotsai/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── about/           # About page with experience and education
│   ├── projects/        # Projects showcase and detail pages
│   ├── contact/         # Contact information
│   └── globals.css      # Global styles and theme configuration
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── ProjectCard.tsx # Project display component
│   └── MotionWrap.tsx  # Animation wrapper component
└── lib/
    └── utils.ts        # Utility functions
```

## Key Features Implementation

### Auto-Rotating Projects Carousel
- 4-second interval auto-rotation
- Manual navigation support
- Focus preservation with URL parameters
- Smooth animations and transitions

### Project Detail Pages
- Dynamic routing with `[projectId]`
- Multi-image carousel support
- Comprehensive project information
- Technical stack breakdown
- Challenges and learnings sections

### Skills Organization
- Categorized by technology type
- Visual badge system
- Professional experience mapping
- Education timeline integration

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [renhotsai](https://github.com/renhotsai)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and modern web technologies.