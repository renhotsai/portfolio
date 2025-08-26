export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectDetail extends ProjectCardProps {
  longDescription: string;
  images?: { url: string; title: string; description?: string }[];
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    containerization?: string[];
    networking?: string[];
    infrastructure?: string[];
    services?: string[];
    tools?: string[];
  };
  challenges?: string[];
  learnings?: string[];
}


export const projectsData: Record<string, ProjectDetail> = {
  "car-rent": {
    id: "car-rent",
    title: "RentEV - Electric Vehicle Rental Platform",
    description: "A peer-to-peer electric vehicle rental platform built with React Native and Expo, featuring dual mobile applications for vehicle owners and renters with cross-platform support for iOS, Android, and web.",
    longDescription: "RentEV is a comprehensive electric vehicle rental platform consisting of two separate React Native applications built with Expo SDK 50. The platform enables a peer-to-peer marketplace where electric vehicle owners can list their vehicles for rent and earn income, while renters can browse and book available electric vehicles. The Owner App allows vehicle owners to list vehicles, manage rental requests, and track usage and earnings. The Renter App provides users with the ability to browse available electric vehicles, submit rental requests, and manage their bookings. Built as a group project with modern React Native development practices, the platform supports cross-platform deployment on iOS, Android, and web platforms.",
    tags: ["React Native", "Expo", "Electric Vehicle", "Peer-to-Peer", "Cross-Platform"],
    imageUrl: "/Images/car-rent-0.PNG",
    images: [
      {
        url: "/Images/car-rent-1.PNG",
        title: "Main Interface",
        description: "Home screen of the RentEV platform showing the main navigation and featured electric vehicles"
      },
      {
        url: "/Images/car-rent-2.PNG",
        title: "Vehicle Browse",
        description: "Electric vehicle browsing interface with filtering and search capabilities for renters"
      },
      {
        url: "/Images/car-rent-3.PNG",
        title: "Owner Dashboard",
        description: "Vehicle owner interface for listing vehicles and managing rental requests"
      },
      {
        url: "/Images/car-rent-4.PNG",
        title: "Booking Management",
        description: "Rental request management system for both owners and renters"
      },
      {
        url: "/Images/car-rent-5.PNG",
        title: "Vehicle Details",
        description: "Detailed view of electric vehicles with specifications and rental information"
      },
      {
        url: "/Images/car-rent-6.PNG",
        title: "User Profile",
        description: "User profile management interface with rental history and preferences"
      },
      {
        url: "/Images/car-rent-7.PNG",
        title: "Earnings Tracking",
        description: "Owner earnings and usage tracking dashboard for vehicle monetization"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/group3-rentEV",
    features: [
      "Dual-app architecture with separate Owner and Renter applications",
      "Electric vehicle listing and management for owners",
      "Vehicle browsing and booking system for renters",
      "Peer-to-peer rental marketplace functionality",
      "Cross-platform support (iOS, Android, Web)",
      "Rental request management and approval system",
      "Vehicle usage and earnings tracking for owners",
      "Booking management and history for renters",
      "Custom app icons and splash screens",
      "Adaptive icons for Android platform",
      "Modern React Native UI components",
      "Educational group project demonstrating collaboration"
    ],
    techStack: {
      frontend: ["React Native", "Expo SDK 50", "JavaScript", "React 18.2.0"],
      tools: ["Expo CLI", "Node.js", "npm", "Git", "VS Code"],
      services: ["Expo Go", "Cross-platform deployment"]
    },
    challenges: [
      "Developing dual-app architecture for different user types (owners vs renters)",
      "Implementing peer-to-peer marketplace functionality",
      "Ensuring cross-platform compatibility across iOS, Android, and web",
      "Managing complex state between owner and renter applications",
      "Creating intuitive interfaces for electric vehicle rental workflows",
      "Coordinating group development with multiple contributors",
      "Implementing responsive design for various screen sizes and platforms"
    ],
    learnings: [
      "Advanced React Native development with Expo SDK 50",
      "Cross-platform mobile app development and deployment",
      "Peer-to-peer marketplace architecture and user experience design",
      "Electric vehicle industry insights and rental platform requirements",
      "Group project collaboration and version control with Git",
      "Modern JavaScript and React 18 development patterns",
      "Mobile app icon and splash screen design principles",
      "Educational project development with real-world application scenarios"
    ]
  },
  "housing-rental": {
    id: "housing-rental",
    title: "Mobile Rental Platform",
    description: "An Android mobile application built with Kotlin featuring Firebase integration, Google Maps, and location services for rental management and discovery.",
    longDescription: "A comprehensive Android mobile rental application developed as a group project using modern Android development practices. Built with Kotlin and leveraging Firebase for backend services, the app integrates Google Maps SDK for location-based features and includes Firebase Authentication for user management. The project follows MVC architecture with organized controllers, models, and views, demonstrating professional Android development patterns with Material Design principles and comprehensive testing implementation.",
    tags: ["Kotlin", "Android", "Firebase", "Google Maps", "Mobile Development"],
    imageUrl: "/Images/housing-rental-1.png",
    images: [
      {
        url: "/Images/housing-rental-0.png",
        title: "Main Interface",
        description: "Home screen showing the main rental platform interface with navigation and key features"
      },
      {
        url: "/Images/housing-rental-1.png",
        title: "Google Maps Integration",
        description: "Location-based services with Google Maps SDK showing rental locations and proximity features"
      },
      {
        url: "/Images/housing-rental-2.png",
        title: "Firebase Features",
        description: "User authentication and Firebase Firestore integration for real-time data synchronization"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
    features: [
      "Firebase Authentication for secure user login and registration",
      "Google Maps SDK integration for location-based services",
      "Firebase Firestore for real-time data synchronization",
      "Location services integration for proximity-based features",
      "Material Design UI components for modern interface",
      "MVC architecture with organized code structure",
      "JSON data parsing with Gson library",
      "Comprehensive testing with JUnit and Espresso",
      "View binding for efficient UI handling",
      "Firebase Analytics for user behavior tracking",
      "Google Services integration for enhanced functionality",
      "Gradle build system with Kotlin DSL configuration"
    ],
    techStack: {
      frontend: ["Kotlin", "Android SDK", "Material Design", "ConstraintLayout"],
      backend: ["Firebase Authentication", "Firebase Firestore", "Firebase Analytics"],
      services: ["Google Maps SDK", "Google Location Services", "Google Services"],
      tools: ["Android Studio", "Gradle", "Git", "Secrets Gradle Plugin", "JUnit", "Espresso", "AndroidX Test"]
    },
    challenges: [
      "Integrating multiple Google and Firebase services seamlessly",
      "Implementing secure authentication and data handling",
      "Managing location permissions and privacy considerations",
      "Creating responsive UI across various Android device sizes",
      "Organizing complex MVC architecture for team collaboration",
      "Handling real-time data synchronization with Firestore",
      "Implementing comprehensive testing strategy for mobile app"
    ],
    learnings: [
      "Advanced Kotlin programming for Android development",
      "Firebase ecosystem integration and real-time database management",
      "Google Maps SDK implementation and location-based features",
      "Android MVC architecture and professional code organization",
      "Mobile authentication and security best practices",
      "Material Design principles and modern Android UI development",
      "Gradle build system configuration with Kotlin DSL",
      "Android testing frameworks and quality assurance practices"
    ]
  },
  "bookbond": {
    id: "bookbond",
    title: "BookBond",
    description: "A comprehensive mobile social platform for book enthusiasts built with React Native and Expo, featuring Firebase integration, book discovery, reading progress tracking, and community discussions with modern UI components.",
    longDescription: "BookBond is a comprehensive mobile social platform designed for book lovers, built with React Native and Expo framework. The application leverages Firebase for authentication, real-time data synchronization, and cloud storage, providing a seamless experience for book discovery, social networking, and reading community features. Users can discover new books, share their reading experiences, track their progress, and connect with fellow book enthusiasts through a beautifully designed interface with modern navigation patterns.",
    tags: ["React Native", "Expo", "Firebase", "TypeScript", "Social Platform"],
    imageUrl: "/Images/bookbond-0.PNG",
    images: [
      {
        url: "/Images/bookbond-0.PNG",
        title: "Main Interface",
        description: "Home screen showing the main book discovery and social features"
      },
      {
        url: "/Images/bookbond-1.PNG",
        title: "Book Discovery",
        description: "Browse and search through extensive book catalog with filtering options"
      },
      {
        url: "/Images/bookbond-2.PNG",
        title: "Reading Progress",
        description: "Track reading progress, set goals, and manage personal book collections"
      },
      {
        url: "/Images/bookbond-3.PNG",
        title: "Social Features",
        description: "Community discussions, book reviews, and social networking capabilities"
      },
      {
        url: "/Images/bookbond-4.PNG",
        title: "User Profile",
        description: "Personal profiles with reading statistics and social connections"
      },
      {
        url: "/Images/bookbond-5.PNG",
        title: "Additional Features",
        description: "Advanced features including notifications, settings, and community engagement"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/BookBond/tree/main/bookbond-mobile",
    features: [
      "Book discovery and advanced search functionality with filtering",
      "Social networking platform for book enthusiasts and readers",
      "Reading progress tracking with personal statistics and goals",
      "Book reviews, ratings, and detailed user feedback system",
      "Community discussions, forums, and book-focused conversations",
      "Firebase Authentication with secure user management",
      "Real-time data synchronization across devices",
      "Personalized reading recommendations based on preferences",
      "Image picker integration for profile and book photos",
      "Location services for local book events and meetups",
      "Push notifications for community updates and reading reminders",
      "Async storage for offline functionality and data persistence",
      "Cross-platform mobile compatibility (iOS/Android)"
    ],
    techStack: {
      frontend: ["React Native", "Expo", "TypeScript", "React Navigation"],
      backend: ["Firebase", "Firebase Functions", "Node.js"],
      database: ["Firebase Firestore", "Firebase Realtime Database"],
      services: ["Firebase Authentication", "Firebase Storage", "Firebase Cloud Messaging"],
      tools: ["Expo CLI", "Babel", "Metro", "Git", "VS Code"]
    },
    challenges: [
      "Building a scalable social networking architecture with Firebase",
      "Implementing real-time chat and community discussions",
      "Creating an engaging and intuitive user experience across platforms",
      "Managing complex state with reading progress and social interactions",
      "Optimizing performance for large book catalogs and user data",
      "Integrating multiple device capabilities (camera, location, notifications)",
      "Ensuring secure authentication and data privacy for social features"
    ],
    learnings: [
      "Advanced React Native development with Expo framework",
      "Firebase ecosystem integration and real-time database management",
      "Social media app architecture patterns and best practices",
      "Mobile app performance optimization and state management",
      "Cross-platform mobile app deployment and testing strategies",
      "User authentication and security implementation",
      "Community-driven feature development and user engagement patterns"
    ]
  },
  "handycourse": {
    id: "handycourse",
    title: "HandyCourse - iOS Course Management Platform",
    description: "A comprehensive iOS course management application built with SwiftUI and Firebase, featuring dual-role functionality for students and instructors with real-time data synchronization and interactive learning capabilities.",
    longDescription: "HandyCourse is a modern iOS course management platform designed to facilitate seamless interaction between instructors and students. Built with SwiftUI and powered by Firebase backend services, the application provides comprehensive course management capabilities with role-based access control. Students can discover and enroll in courses across multiple categories (Tech, Data Science, Business, Language, Art, Personal Development), access video content, track progress, and manage grades. Instructors can create and manage courses, upload content, track student rosters, and assign grades. The app features real-time data updates, secure authentication, and a responsive SwiftUI interface designed for iOS 14.0+ devices.",
    tags: ["SwiftUI", "Firebase", "iOS", "Course Management", "Education"],
    imageUrl: "/Images/handy-course-0.png",
    images: [
      {
        url: "/Images/handy-course-1.png",
        title: "Main Interface",
        description: "Home screen showing the main course management interface with navigation and featured courses"
      },
      {
        url: "/Images/handy-course-2.png",
        title: "Course Discovery",
        description: "Course catalog with multiple categories including Tech, Data Science, Business, and more"
      },
      {
        url: "/Images/handy-course-3.png",
        title: "Student Dashboard",
        description: "Student interface for course enrollment, progress tracking, and grade management"
      },
      {
        url: "/Images/handy-course-4.png",
        title: "Instructor Panel",
        description: "Instructor dashboard for course creation, content upload, and student roster management"
      },
      {
        url: "/Images/handy-course-5.png",
        title: "Video Learning",
        description: "Interactive video content interface with progress tracking and learning materials"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/HandyCourse",
    features: [
      "Dual-role system for students and instructors with role-based access control",
      "Course discovery and enrollment across 6 major categories",
      "Interactive video content with progress tracking",
      "Real-time grade tracking and analytics for students",
      "Comprehensive course creation and management tools for instructors",
      "Student roster management and grade assignment capabilities",
      "Firebase Authentication for secure user management",
      "Firebase Firestore for real-time data synchronization",
      "Firebase Storage for media content and course materials",
      "SwiftUI-based responsive interface optimized for iOS 14.0+",
      "Profile management system for both user types",
      "Modern iOS design patterns with intuitive navigation",
      "Team-developed with specialized roles (Lead, UI/UX, Backend)"
    ],
    techStack: {
      frontend: ["SwiftUI", "Swift 5.3+", "iOS 14.0+"],
      backend: ["Firebase Authentication", "Firebase Firestore", "Firebase Storage"],
      tools: ["Xcode 12.0+", "Git", "Firebase Console"],
      services: ["Firebase", "Real-time Database", "Cloud Storage"]
    },
    challenges: [
      "Implementing role-based access control for dual user types",
      "Managing real-time data synchronization across multiple user sessions",
      "Creating intuitive SwiftUI interfaces for complex educational workflows",
      "Handling media storage and streaming for video course content",
      "Designing scalable Firebase architecture for course management",
      "Ensuring responsive UI across different iOS device sizes",
      "Coordinating team development with specialized roles and responsibilities"
    ],
    learnings: [
      "Advanced SwiftUI development and iOS 14.0+ feature implementation",
      "Firebase ecosystem integration for authentication and real-time databases",
      "Educational app architecture and user experience design principles",
      "Role-based access control implementation in mobile applications",
      "Team collaboration and project management in iOS development",
      "Real-time data synchronization patterns and best practices",
      "Modern iOS design patterns and responsive interface development",
      "Course management system architecture and educational technology insights"
    ]
  },
  "restaurant": {
    id: "restaurant",
    title: "JCA Pizza - Restaurant Delivery System",
    description: "A comprehensive full-stack restaurant delivery management system built with Node.js, Express, and MongoDB, featuring multi-role functionality for customers, restaurant staff, and delivery drivers.",
    longDescription: "JCA Pizza is a complete restaurant delivery management system that supports three distinct user roles: customers, restaurant staff, and delivery drivers. Built with Node.js and MongoDB, the application handles the entire order lifecycle from customer browsing and ordering to kitchen management and delivery tracking. The system features customizable pizza ordering, real-time order status updates, driver assignment, and delivery confirmation with photo uploads. The architecture uses Express.js with Handlebars templating, Mongoose for database operations, and includes session management and file upload capabilities.",
    tags: ["Node.js", "Express", "MongoDB", "Full-Stack", "Delivery System"],
    imageUrl: "/Images/restaurant-0.jpg",
    images: [
      {
        url: "/Images/restaurant-0.jpg",
        title: "Main Interface",
        description: "Customer-facing interface showing menu browsing and ordering functionality"
      },
      {
        url: "/Images/restaurant-1.jpg",
        title: "Order Management",
        description: "Restaurant staff dashboard for managing orders and tracking delivery status"
      },
      {
        url: "/Images/restaurant-2.jpg",
        title: "Delivery Tracking",
        description: "Driver interface and delivery tracking system with status updates"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Restaurant",
    features: [
      "Multi-role user system (Customer, Restaurant Staff, Driver)",
      "Interactive menu browsing and pizza customization",
      "Real-time order tracking with status updates",
      "Kitchen order management and processing dashboard",
      "Driver assignment and delivery task management",
      "Delivery completion with photo confirmation",
      "Order search and filtering capabilities",
      "Order cancellation for undelivered items",
      "Session-based user authentication",
      "File upload functionality for delivery photos",
      "Comprehensive order history and tracking",
      "Responsive web interface design"
    ],
    techStack: {
      frontend: ["Handlebars", "CSS3", "JavaScript"],
      backend: ["Node.js", "Express.js", "Mongoose"],
      database: ["MongoDB"],
      services: ["Express-Session", "Multer", "Express-Handlebars"],
      tools: ["Git", "npm", "Nodemon"]
    },
    challenges: [
      "Implementing multi-role authentication and authorization system",
      "Managing complex order state transitions and workflow",
      "Creating intuitive interfaces for different user types",
      "Handling file uploads for delivery confirmation photos",
      "Designing efficient database schema for order tracking",
      "Implementing real-time order status updates across user roles",
      "Managing order cancellation logic and business rules"
    ],
    learnings: [
      "Full-stack Node.js development with Express framework",
      "MongoDB database design and Mongoose ODM usage",
      "Multi-role user management and session handling",
      "Restaurant industry workflow and order management processes",
      "File upload handling and server-side validation",
      "Handlebars templating engine and server-side rendering",
      "RESTful API design for multi-user applications",
      "Order lifecycle management and status tracking systems"
    ]
  },
  "ace-my-career": {
    id: "ace-my-career",
    title: "Ace My Career",
    description: "Enterprise-scale job search platform built on AWS hybrid architecture combining serverless Lambda functions and containerized ECS services with AI-powered document processing.",
    longDescription: "Ace My Career is a sophisticated cloud-native job search platform featuring a hybrid AWS architecture that combines serverless Lambda functions with containerized ECS services. The platform leverages Docker containers managed by ECS with Auto Scaling Groups, AWS Textract for AI-powered resume parsing, Amazon S3 for secure document storage, and RDS PostgreSQL for data persistence. The architecture includes VPC networking, CloudFront CDN for global content delivery, Route 53 for DNS management, and Application Load Balancers for traffic distribution, ensuring enterprise-grade scalability, security, and performance.",
    tags: ["AWS ECS", "Docker", "AWS Lambda", "AWS Textract", "Hybrid Architecture"],
    imageUrl: "/Images/acemycareer-real-0.png",
    images: [
      {
        url: "/Images/acemycareer-real-0.png",
        title: "Application Interface",
        description: "Main dashboard showing job search functionality and user interface"
      },
      {
        url: "/Images/acemycareer-real-1.png",
        title: "AWS Architecture Diagram",
        description: "Comprehensive AWS infrastructure diagram featuring hybrid serverless and containerized architecture with ECS, Lambda, Textract, and auto-scaling components"
      },
      {
        url: "/Images/acemycareer-real-2.png",
        title: "Job Search Features",
        description: "Advanced job search interface with filtering capabilities and application tracking dashboard"
      },
      {
        url: "/Images/acemycareer-real-3.png",
        title: "Resume Processing",
        description: "AI-powered resume parsing with AWS Textract integration and document storage in Amazon S3"
      }
    ],
    liveUrl: "https://acemycareer.online/",
    githubUrl: "https://github.com/renhotsai/job-search",
    features: [
      "Advanced job search with filters",
      "Application tracking dashboard",
      "AI-powered resume parsing with AWS Textract",
      "Resume document storage in Amazon S3",
      "User profile and skill tracking",
      "Job alerts and notifications",
      "Interview preparation tools",
      "Career analytics and insights",
      "Hybrid serverless and containerized architecture",
      "Auto-scaling with ECS and Lambda functions",
      "Global content delivery with CloudFront CDN"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["AWS Lambda", "Node.js", "Serverless Functions"],
      database: ["Amazon RDS", "PostgreSQL"],
      containerization: ["Docker", "Amazon ECS", "Amazon ECR"],
      networking: ["VPC", "Route 53", "CloudFront", "Application Load Balancer", "NAT Gateway"],
      infrastructure: ["Auto Scaling Groups", "EC2", "Security Groups", "IAM"],
      services: ["AWS Textract", "Amazon S3", "Lambda", "ECS", "ECR"]
    },
    challenges: [
      "Designing hybrid serverless and containerized architecture",
      "Implementing AI document processing with AWS Textract",
      "Managing container orchestration with ECS and Auto Scaling",
      "Configuring complex VPC networking and security groups",
      "Optimizing CloudFront CDN and Route 53 DNS routing",
      "Ensuring secure communication between Lambda and ECS services",
      "Managing Docker images with ECR and deployment pipelines"
    ],
    learnings: [
      "Hybrid serverless and container architecture design",
      "AWS ECS container orchestration and management",
      "Docker containerization and ECR image registry",
      "VPC networking, subnets, and security configuration",
      "CloudFront CDN optimization and Route 53 DNS management",
      "Application Load Balancer configuration and traffic routing",
      "Auto Scaling Groups and EC2 instance management",
      "AWS Textract integration for document processing",
      "Multi-tier application security and IAM policies"
    ]
  },
  "festival": {
    id: "festival",
    title: "Just For Laughs Comedy Festival Website",
    description: "A responsive comedy festival website featuring artist showcases, interactive ticket purchasing, and venue mapping for the Just For Laughs Comedy Festival in Toronto, built with modern frontend technologies.",
    longDescription: "This is a comprehensive comedy festival website created for the Just For Laughs Comedy Festival (September 21-30, 2023) in Toronto, ON. The project demonstrates modern web development skills through a realistic event website implementation featuring artist galleries, interactive ticket purchasing system, and venue mapping. Built as an educational project with HTML5, CSS3, and JavaScript, the site showcases responsive design principles and includes an interactive map powered by Leaflet.js displaying 20+ Toronto venues. The ticket system offers multiple pass types with dynamic pricing and the artist showcase highlights headliners, The 42 performers, and street acts.",
    tags: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "Responsive Design"],
    imageUrl: "/Images/festival-0.jpg",
    images: [
      {
        url: "/Images/festival-0.jpg",
        title: "Festival Homepage",
        description: "Main landing page showcasing the Just For Laughs Comedy Festival with hero section and navigation"
      },
      {
        url: "/Images/festival-1.jpg",
        title: "Artist Showcase",
        description: "Interactive artist galleries displaying headliners, The 42 performers, and street acts with scrollable image galleries"
      },
      {
        url: "/Images/festival-2.jpg",
        title: "Ticket System",
        description: "Interactive ticket purchasing interface with multiple pass types and dynamic pricing system"
      },
      {
        url: "/Images/festival-3.jpg",
        title: "Venue Map",
        description: "Leaflet.js powered interactive map displaying 20+ Toronto comedy venues and locations"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Festival",
    features: [
      "Responsive artist showcase with image galleries for 20+ performers",
      "Interactive ticket purchasing system with multiple pass types",
      "Leaflet.js powered interactive venue map with 20+ Toronto locations",
      "Multiple ticket categories (Individual, Classic Pass, Headliner Pass)",
      "Dynamic pricing system ($39.50 - $204 range)",
      "Mobile-responsive design with smooth scrolling galleries",
      "Venue information integration (Scotiabank Arena, Comedy Bar, etc.)",
      "Contact and information pages with festival details",
      "Font Awesome and Ionicons integration for enhanced UI",
      "Semantic HTML structure with accessibility considerations",
      "Educational project demonstrating real-world web development",
      "Clean project structure with organized assets and views"
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript ES6+"],
      services: ["Leaflet.js", "OpenStreetMap", "Font Awesome", "Ionicons"],
      tools: ["Git", "Modern Web Browsers"]
    },
    challenges: [
      "Creating responsive design that works across all device sizes",
      "Implementing interactive map functionality with venue details",
      "Designing intuitive ticket purchasing flow with multiple options",
      "Managing client-side JavaScript for dynamic ticket pricing",
      "Creating smooth scrolling galleries for artist showcases",
      "Implementing accessible and semantic HTML structure",
      "Balancing educational goals with realistic festival website design"
    ],
    learnings: [
      "Modern frontend web development with vanilla JavaScript",
      "Responsive design principles and mobile-first approach",
      "Interactive mapping integration with Leaflet.js and OpenStreetMap",
      "Client-side JavaScript for dynamic content and pricing",
      "Web accessibility and semantic HTML best practices",
      "Project structure organization for maintainable frontend code",
      "Comedy festival industry insights and event website requirements",
      "Educational project development with real-world application scenarios"
    ]
  },
  "smartshop": {
    id: "smartshop",
    title: "SmartShop",
    description: "A React Native mobile app with Expo that integrates shopping and cooking experiences, featuring recipe discovery, real-time product search, and location-based store finder powered by Firebase.",
    longDescription: "SmartShop is a comprehensive React Native mobile application built with Expo that revolutionizes the shopping and cooking experience. The app seamlessly integrates recipe discovery with product search and location services, allowing users to find recipes, locate ingredients, and discover nearby stores. Built with Firebase backend for real-time data synchronization, authentication, and cloud storage, SmartShop offers a complete culinary and shopping ecosystem.",
    tags: ["React Native", "Expo", "Firebase", "Mobile App", "Recipe Discovery"],
    imageUrl: "/Images/smart-shop-0.PNG",
    images: [
      {
        url: "/Images/smart-shop-0.PNG",
        title: "Main Interface",
        description: "Home screen showing the main shopping and recipe interface"
      },
      {
        url: "/Images/smart-shop-1.PNG",
        title: "Recipe Discovery",
        description: "Browse through detailed recipes with ingredients and preparation steps"
      },
      {
        url: "/Images/smart-shop-2.PNG",
        title: "Product Search",
        description: "Real-time product search with price information and filtering"
      },
      {
        url: "/Images/smart-shop-3.PNG",
        title: "Store Locator",
        description: "Interactive maps showing nearby stores and location services"
      },
      {
        url: "/Images/smart-shop-4.PNG",
        title: "User Features",
        description: "Authentication, community interaction, and user profile management"
      }
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/SmartShop",
    features: [
      "Recipe discovery with detailed ingredients and preparation steps",
      "Real-time product search with price information",
      "Location-based store finder with interactive maps",
      "Firebase authentication and user management",
      "Community interaction and social features",
      "Tag-based product filtering system",
      "Premium nutrition information for recipes",
      "Cross-platform mobile compatibility (iOS/Android)",
      "Donation functionality and community support",
      "Nearby product finding based on location services"
    ],
    techStack: {
      frontend: ["React Native", "Expo", "React Navigation v6"],
      backend: ["Firebase", "Firestore", "Firebase Auth"],
      database: ["Firebase Firestore", "Real-time Database"],
      services: ["Firebase Authentication", "Firebase Cloud Storage"],
      tools: ["Expo CLI", "React Native Maps", "Expo Vector Icons", "Node.js"]
    },
    challenges: [
      "Integrating multiple Firebase services for seamless real-time experience",
      "Implementing complex location-based services with React Native Maps",
      "Creating smooth navigation between recipe discovery and product search",
      "Managing real-time data synchronization across multiple app features",
      "Optimizing performance for cross-platform mobile deployment",
      "Implementing secure user authentication and community features",
      "Balancing feature complexity with intuitive user experience"
    ],
    learnings: [
      "Advanced React Native development with Expo framework",
      "Firebase ecosystem integration and real-time database management",
      "Location-based services and interactive map implementation",
      "Cross-platform mobile app architecture and navigation patterns",
      "Real-time data synchronization and state management",
      "Mobile app authentication and security best practices",
      "Community-driven feature development and user engagement",
      "Mobile app deployment and testing strategies"
    ]
  }
};

// Generate sampleProjects from projectsData to avoid duplication
export const sampleProjects: ProjectCardProps[] = Object.values(projectsData).map((project) => ({
  id: project.id,
  title: project.title,
  description: project.description,
  tags: project.tags,
  imageUrl: project.imageUrl,
  liveUrl: project.liveUrl,
  githubUrl: project.githubUrl
}));