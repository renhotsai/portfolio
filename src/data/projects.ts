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

export const sampleProjects: ProjectCardProps[] = [
  {
    id: "car-rent",
    title: "Car Rent Application",
    description: "A responsive mobile app for car rental booking with real-time data synchronization and secure authentication using React Native and Firebase.",
    tags: ["React Native", "Firebase", "Authentication", "Firestore"],
    imageUrl: "/Images/CarRent-ss2ky9BceJc0eS6Qx0NztypyQMPAxE.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
  },
  {
    id: "housing-rental",
    title: "Housing Rental App",
    description: "A comprehensive rental platform for finding and managing housing properties with advanced search features built with Kotlin for Android.",
    tags: ["Kotlin", "Android", "Mobile Development", "Rental Platform"],
    imageUrl: "/Images/HousingRentalApp-WQGWs7GMs3OSOaFRUxRQRsMIpxNMi5.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
  },
  {
    id: "bookbond",
    title: "BookBond",
    description: "A comprehensive mobile social platform for book enthusiasts built with React Native and Expo, featuring Firebase integration, book discovery, reading progress tracking, and community discussions with modern UI components.",
    tags: ["React Native", "Expo", "Firebase", "TypeScript", "Social Platform"],
    imageUrl: "/Images/bookbond-0.PNG",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/BookBond/tree/main/bookbond-mobile",
  },
  {
    id: "online-store",
    title: "Online Store",
    description: "An iOS e-commerce application built with Swift featuring product browsing, shopping cart, and secure checkout functionality.",
    tags: ["Swift", "iOS", "E-commerce", "Mobile App"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/OnlineStore",
  },
  {
    id: "handycourse",
    title: "HandyCourse",
    description: "An educational iOS platform offering various courses with progress tracking and interactive learning built with Swift.",
    tags: ["Swift", "iOS", "Education", "Progress Tracking"],
    imageUrl: "/Images/handycourse-KXOO4lFpXUyL1tvsRRJONFABrhlIXx.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/HandyCourse",
  },
  {
    id: "restaurant",
    title: "Restaurant App",
    description: "A restaurant management and ordering system built with JavaScript featuring menu management and order processing.",
    tags: ["JavaScript", "Restaurant", "Order Management", "Frontend"],
    imageUrl: "/Images/PizzaStore-jvVXVkxPEpzVq17sUHJfBM4JQSxAKs.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Festival",
  },
  {
    id: "ace-my-career",
    title: "Ace My Career",
    description: "A comprehensive job search application built with TypeScript featuring job listings, application tracking, and user profiles.",
    tags: ["TypeScript", "Job Search", "Career Platform", "Web App"],
    imageUrl: "/Images/acemycareer-real.png",
    liveUrl: "https://acemycareer.online/",
    githubUrl: "https://github.com/GBC-CloudTechHeros/acemycareer-app",
  },
  {
    id: "festival",
    title: "Festival",
    description: "A festival management and event platform featuring event listings, ticket booking, and attendee management built with modern web technologies.",
    tags: ["JavaScript", "Event Management", "Festival Platform", "Web App"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Festival",
  },
  {
    id: "smartshop",
    title: "SmartShop",
    description: "A React Native mobile app with Expo that integrates shopping and cooking experiences, featuring recipe discovery, real-time product search, and location-based store finder powered by Firebase.",
    tags: ["React Native", "Expo", "Firebase", "Mobile App", "Recipe Discovery"],
    imageUrl: "/Images/smart-shop-0.PNG",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/SmartShop",
  },
];

export const projectsData: Record<string, ProjectDetail> = {
  "car-rent": {
    id: "car-rent",
    title: "Car Rent Application",
    description: "A responsive mobile app for car rental booking with real-time data synchronization and secure authentication using React Native and Firebase.",
    longDescription: "A comprehensive car rental mobile application that allows users to browse available vehicles, make reservations, and manage their bookings. The app features real-time synchronization with Firebase, secure user authentication, and an intuitive interface designed for both iOS and Android platforms.",
    tags: ["React Native", "Firebase", "Authentication", "Firestore"],
    imageUrl: "/Images/CarRent-ss2ky9BceJc0eS6Qx0NztypyQMPAxE.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
    features: [
      "User authentication and profile management",
      "Browse and filter available vehicles",
      "Real-time booking and availability checking",
      "Push notifications for booking updates",
      "GPS integration for location services",
      "Payment processing integration"
    ],
    techStack: {
      frontend: ["React Native", "TypeScript", "React Navigation"],
      backend: ["Firebase", "Firestore", "Firebase Functions"],
      tools: ["Expo", "Git", "VS Code"]
    },
    challenges: [
      "Implementing real-time data synchronization across multiple users",
      "Ensuring secure authentication and data protection",
      "Optimizing performance for both iOS and Android platforms"
    ],
    learnings: [
      "Advanced React Native development patterns",
      "Firebase real-time database management",
      "Mobile app security best practices"
    ]
  },
  "housing-rental": {
    id: "housing-rental",
    title: "Housing Rental App",
    description: "A comprehensive rental platform for finding and managing housing properties with advanced search features built with Kotlin for Android.",
    longDescription: "An Android application designed to streamline the process of finding and managing rental properties. Features advanced search capabilities, property management tools, and a user-friendly interface built with modern Android development practices.",
    tags: ["Kotlin", "Android", "Mobile Development", "Rental Platform"],
    imageUrl: "/Images/HousingRentalApp-WQGWs7GMs3OSOaFRUxRQRsMIpxNMi5.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/mobile-rental",
    features: [
      "Advanced property search and filtering",
      "Property listing management",
      "User profile and preferences",
      "Favorite properties bookmarking",
      "In-app messaging system",
      "Photo gallery and virtual tours"
    ],
    techStack: {
      frontend: ["Kotlin", "Android SDK", "Material Design"],
      database: ["Room Database", "SQLite"],
      tools: ["Android Studio", "Gradle", "Git"]
    },
    challenges: [
      "Implementing complex search algorithms",
      "Managing large datasets efficiently",
      "Creating responsive UI for various screen sizes"
    ],
    learnings: [
      "Advanced Kotlin programming techniques",
      "Android architecture components",
      "Database optimization strategies"
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
  "online-store": {
    id: "online-store",
    title: "Online Store",
    description: "An iOS e-commerce application built with Swift featuring product browsing, shopping cart, and secure checkout functionality.",
    longDescription: "A full-featured iOS e-commerce application that provides a seamless shopping experience. Built with Swift and following iOS design guidelines, the app includes product catalog browsing, shopping cart management, and secure payment processing.",
    tags: ["Swift", "iOS", "E-commerce", "Mobile App"],
    imageUrl: "/Images/PizzaStore-jvVXVkxPEpzVq17sUHJfBM4JQSxAKs.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/OnlineStore",
    features: [
      "Product catalog with categories",
      "Shopping cart management",
      "User authentication and profiles",
      "Secure payment processing",
      "Order history and tracking",
      "Product search and filtering",
      "Wishlist functionality"
    ],
    techStack: {
      frontend: ["Swift", "UIKit", "Core Data"],
      backend: ["iOS SDK", "Core Location"],
      tools: ["Xcode", "Git", "CocoaPods"]
    },
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state across multiple views",
      "Ensuring smooth performance with large product catalogs"
    ],
    learnings: [
      "Advanced Swift programming",
      "iOS app architecture patterns",
      "Mobile payment integration"
    ]
  },
  "handycourse": {
    id: "handycourse",
    title: "HandyCourse",
    description: "An educational iOS platform offering various courses with progress tracking and interactive learning built with Swift.",
    longDescription: "HandyCourse is an innovative educational platform for iOS that offers a wide range of courses with interactive learning features. The app includes progress tracking, quizzes, video content, and a comprehensive learning management system designed to enhance the mobile learning experience.",
    tags: ["Swift", "iOS", "Education", "Progress Tracking"],
    imageUrl: "/Images/handycourse-KXOO4lFpXUyL1tvsRRJONFABrhlIXx.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/HandyCourse",
    features: [
      "Course catalog and enrollment",
      "Video streaming and offline viewing",
      "Interactive quizzes and assessments",
      "Progress tracking and analytics",
      "Certificate generation",
      "Discussion forums",
      "Push notifications for deadlines"
    ],
    techStack: {
      frontend: ["Swift", "UIKit", "AVKit"],
      backend: ["Core Data", "CloudKit"],
      tools: ["Xcode", "Git", "TestFlight"]
    },
    challenges: [
      "Implementing video streaming with offline capabilities",
      "Creating engaging interactive learning modules",
      "Managing complex progress tracking algorithms"
    ],
    learnings: [
      "iOS multimedia programming",
      "Educational app UX design principles",
      "Data persistence and synchronization"
    ]
  },
  "restaurant": {
    id: "restaurant",
    title: "Restaurant App",
    description: "A restaurant management and ordering system built with JavaScript featuring menu management and order processing.",
    longDescription: "A comprehensive restaurant management system that handles both customer-facing ordering and backend restaurant operations. The application includes menu management, order processing, status tracking, and customer service features built with modern JavaScript technologies.",
    tags: ["JavaScript", "Restaurant", "Order Management", "Frontend"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Restaurant",
    features: [
      "Digital menu with categories",
      "Order placement and tracking",
      "Real-time order status updates",
      "Kitchen management dashboard",
      "Customer feedback system",
      "Inventory management",
      "Analytics and reporting"
    ],
    techStack: {
      frontend: ["JavaScript", "Handlebars", "CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Git", "VS Code"]
    },
    challenges: [
      "Implementing real-time order status tracking",
      "Managing complex restaurant workflow",
      "Creating an intuitive admin dashboard"
    ],
    learnings: [
      "Full-stack JavaScript development",
      "Real-time web application architecture",
      "Restaurant industry workflow optimization"
    ]
  },
  "ace-my-career": {
    id: "ace-my-career",
    title: "Ace My Career",
    description: "Enterprise-scale job search platform built on AWS hybrid architecture combining serverless Lambda functions and containerized ECS services with AI-powered document processing.",
    longDescription: "Ace My Career is a sophisticated cloud-native job search platform featuring a hybrid AWS architecture that combines serverless Lambda functions with containerized ECS services. The platform leverages Docker containers managed by ECS with Auto Scaling Groups, AWS Textract for AI-powered resume parsing, Amazon S3 for secure document storage, and RDS PostgreSQL for data persistence. The architecture includes VPC networking, CloudFront CDN for global content delivery, Route 53 for DNS management, and Application Load Balancers for traffic distribution, ensuring enterprise-grade scalability, security, and performance.",
    tags: ["AWS ECS", "Docker", "AWS Lambda", "AWS Textract", "Hybrid Architecture"],
    imageUrl: "/Images/acemycareer-real.png",
    images: [
      {
        url: "/Images/acemycareer-real.png",
        title: "Application Interface",
        description: "Main dashboard showing job search functionality and user interface"
      },
      {
        url: "/Images/101480126_AceMyCareer_Diagram.png",
        title: "AWS Serverless Architecture",
        description: "Comprehensive AWS infrastructure diagram featuring serverless Lambda functions, AWS Textract for document processing, S3 for file storage, RDS PostgreSQL database, load balancers, and auto-scaling components across multiple availability zones"
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
    title: "Festival",
    description: "A festival management and event platform featuring event listings, ticket booking, and attendee management built with modern web technologies.",
    longDescription: "Festival is a comprehensive event management platform designed to handle festival organization, ticket sales, and attendee management. The application provides tools for event organizers to create, promote, and manage festivals while offering attendees an intuitive interface for discovering and booking events.",
    tags: ["JavaScript", "Event Management", "Festival Platform", "Web App"],
    imageUrl: "/Images/Festival-XBg4IYsq0oo5XEaQmepzlAvvwyUT1T.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/Festival",
    features: [
      "Event creation and management",
      "Ticket booking and payment processing",
      "Attendee registration and check-in",
      "Festival scheduling and lineup management",
      "Vendor and sponsor management",
      "Real-time event updates",
      "Mobile-responsive design",
      "Event analytics and reporting"
    ],
    techStack: {
      frontend: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Git", "VS Code", "npm"]
    },
    challenges: [
      "Managing complex event scheduling and timing",
      "Implementing secure payment processing for tickets",
      "Creating scalable architecture for high-traffic events",
      "Designing intuitive user experience for diverse audiences"
    ],
    learnings: [
      "Event management system architecture",
      "Payment gateway integration",
      "Real-time data synchronization",
      "User experience design for event platforms"
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