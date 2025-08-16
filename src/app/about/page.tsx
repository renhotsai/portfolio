import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const skills = {
  Programming: ["JavaScript", "TypeScript", "Swift", "Kotlin", "C#", "Node.js"],
  "Web & Frontend": ["Next.js", "React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  "Mobile Development": ["React Native", "iOS Development", "Android Development", "Expo"],
  "Backend & APIs": ["Express.js", "Nest.js", "RESTful APIs", "Serverless Functions", "AWS Lambda"],
  "Database & Storage": ["PostgreSQL", "MongoDB", "MSSQL", "Firebase", "Amazon S3", "Amazon RDS"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Amazon ECS", "Amazon ECR", "CloudFront"],
  "AWS Services": ["AWS Textract", "VPC", "Route 53", "Application Load Balancer", "Auto Scaling Groups", "IAM"],
  "Development Tools": ["Git", "VS Code", "Xcode", "Android Studio", "Expo CLI", "npm"]
};

const AboutPage = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side - Hero Section */}
        <div className="lg:col-span-4">
          <div className="flex flex-col items-center lg:sticky lg:top-8 space-y-8">
            <Avatar className="w-56 h-56">
              <AvatarImage src="/Images/Jeremy-WFcyBsvIZyLUozH4k7MON7w2tFfIbj.jpg" alt="Jeremy" className="object-cover scale-150 object-top" />
              <AvatarFallback>JT</AvatarFallback>
            </Avatar>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-center">About Me</h1>
              <p className="text-muted-foreground text-lg text-left">
                Backend Engineer and Full-Stack Developer with 5+ years of coding experience, including 3+ years of professional experience in backend systems and payment processing integration. Currently pursuing advanced cloud computing studies at George Brown College. Experienced in Agile development methodologies and delivering high-quality, maintainable code. Specialized in building robust web applications, RESTful APIs, and scalable backend systems using C#, JavaScript/TypeScript, Node.js, and modern cloud technologies. Proven expertise in AWS cloud architecture, database optimization, and creating enterprise-level solutions that handle high-volume transactions.
              </p>
              <Link href="/JeremyTsai-2025.pdf" target="_blank" rel="noopener noreferrer">
                <Button>Download Resume</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Tabs Section */}
        <div className="lg:col-span-8">
          <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        <TabsContent value="skills" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm px-3 py-1">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="experience" className="mt-8">
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Backend Engineer</h3>
              <p className="text-muted-foreground text-lg mb-1">Collaborate Technology</p>
              <p className="text-sm text-muted-foreground mb-4">April 2021 - August 2023 • Taipei, Taiwan</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">C#</Badge>
                <Badge variant="secondary">RESTful APIs</Badge>
                <Badge variant="secondary">MSSQL</Badge>
                <Badge variant="secondary">Payment Systems</Badge>
                <Badge variant="secondary">Database Optimization</Badge>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>Designed and integrated RESTful APIs with third-party payment systems, ensuring secure and reliable transaction processing</li>
                <li>Developed comprehensive logging systems to track payment transactions, enabling rapid debugging and improving system reliability</li>
                <li>Optimized complex MSSQL database operations and queries, resulting in improved performance and faster response times</li>
                <li>Collaborated with cross-functional teams to deliver scalable backend solutions supporting high-volume transactions</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-muted-foreground text-lg mb-1">Harmonation Inc.</p>
              <p className="text-sm text-muted-foreground mb-4">November 2020 – April 2021 • Taipei, Taiwan</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">C#</Badge>
                <Badge variant="secondary">Windows Applications</Badge>
                <Badge variant="secondary">MSSQL</Badge>
                <Badge variant="secondary">Banking Systems</Badge>
                <Badge variant="secondary">UI/UX</Badge>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>Developed and optimized Windows applications for banking sector, improving user interface efficiency and reducing transaction processing time</li>
                <li>Built robust C# applications with MSSQL database integration, enhancing data retrieval capabilities and system performance</li>
                <li>Implemented database optimization strategies that significantly improved query response times and overall application performance</li>
                <li>Delivered solutions that increased customer satisfaction through improved application reliability and user experience</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="mt-8">
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Cloud Computing Technologies Program</h3>
              <p className="text-muted-foreground text-lg mb-1">George Brown College • Ontario College Graduate Certificate</p>
              <p className="text-sm text-muted-foreground mb-4">September 2024 – August 2025 • Casa Loma Campus, Toronto, ON</p>
              <ul className="space-y-1 list-disc pl-5">
                <li>Microsoft Azure Administration and Architecture</li>
                <li>Amazon Web Services (AWS) Cloud Practitioner and Solutions Architecture</li>
                <li>Cloud security implementation and best practices</li>
                <li>Microsoft 365 Identity and Services</li>
                <li>Advanced Linux and Windows Server Infrastructure</li>
                <li>Network fundamentals and system administration</li>
                <li>Career planning and portfolio development</li>
                <li>Work-integrated project</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Mobile Application Development and Strategy Program</h3>
              <p className="text-muted-foreground text-lg mb-1">George Brown College • Ontario College Graduate Certificate</p>
              <p className="text-sm text-muted-foreground mb-4">September 2023 – August 2024 • Casa Loma Campus, Toronto, ON</p>
              <ul className="space-y-1 list-disc pl-5">
                <li>Mobile App Development for iOS and Android platforms</li>
                <li>Kotlin and Swift Programming Languages</li>
                <li>Cross-platform mobile development</li>
                <li>Web development fundamentals (HTML5, CSS3, JavaScript)</li>
                <li>Full stack development concepts</li>
                <li>Mobile application strategy and business planning</li>
                <li>App Store and Android Market submission processes</li>
                <li>Work-integrated project</li>
              </ul>
            </div>
          </div>
        </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
