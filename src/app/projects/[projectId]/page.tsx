"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MotionWrap from "@/components/MotionWrap";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  images?: { url: string; title: string; description?: string }[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    containerization?: string[];
    networking?: string[];
    infrastructure?: string[];
    services?: string[];
  };
  challenges?: string[];
  learnings?: string[];
}

const projectsData: Record<string, ProjectDetail> = {
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
    description: "A mobile social platform for book enthusiasts built with React Native, featuring book discovery, sharing, and community discussions with modern UI components.",
    longDescription: "BookBond is a comprehensive mobile social platform designed for book lovers. It combines book discovery, social networking, and reading community features in a beautifully designed React Native application. Users can discover new books, share their reading experiences, and connect with fellow book enthusiasts.",
    tags: ["React Native", "Mobile App", "JavaScript", "Expo", "Social Platform"],
    imageUrl: "/Images/bookbond-real.png",
    liveUrl: "#",
    githubUrl: "https://github.com/renhotsai/BookBond/tree/main/bookbond-mobile",
    features: [
      "Book discovery and search functionality",
      "Social networking for book enthusiasts",
      "Reading progress tracking",
      "Book reviews and ratings",
      "Community discussions and forums",
      "Personalized reading recommendations",
      "Reading challenges and goals"
    ],
    techStack: {
      frontend: ["React Native", "JavaScript", "Expo"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Expo CLI", "Git", "VS Code"]
    },
    challenges: [
      "Building a scalable social networking architecture",
      "Implementing real-time chat and discussions",
      "Creating an engaging user experience across platforms"
    ],
    learnings: [
      "React Native cross-platform development",
      "Social media app architecture patterns",
      "Mobile app performance optimization"
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
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <MotionWrap delay={0.1}>
        <Link href={`/projects?focus=${projectId}`}>
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </MotionWrap>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <MotionWrap delay={0.2}>
          <div className="space-y-4">
            {project.images && project.images.length > 1 ? (
              /* Multi-image Carousel */
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="space-y-4">
                        <div className="aspect-video relative">
                          <Image
                            src={image.url}
                            alt={image.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{image.title}</h3>
                          {image.description && (
                            <p className="text-sm text-muted-foreground">
                              {image.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
              /* Single Image */
              <div className="space-y-4">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </MotionWrap>

        <MotionWrap delay={0.3}>
          <div>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </MotionWrap>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MotionWrap delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </MotionWrap>

        <MotionWrap delay={0.5}>
          <Card>
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {project.techStack.frontend && (
                <div>
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.frontend.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.backend && (
                <div>
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.database && (
                <div>
                  <h4 className="font-semibold mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.database.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.containerization && (
                <div>
                  <h4 className="font-semibold mb-2">Containerization</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.containerization.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.networking && (
                <div>
                  <h4 className="font-semibold mb-2">Networking & CDN</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.networking.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.infrastructure && (
                <div>
                  <h4 className="font-semibold mb-2">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.infrastructure.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.services && (
                <div>
                  <h4 className="font-semibold mb-2">AWS Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.services.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </MotionWrap>

        {project.challenges && (
          <MotionWrap delay={0.6}>
            <Card>
              <CardHeader>
                <CardTitle>Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionWrap>
        )}

        {project.learnings && (
          <MotionWrap delay={0.7}>
            <Card>
              <CardHeader>
                <CardTitle>Key Learnings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionWrap>
        )}
      </div>
    </div>
  );
}