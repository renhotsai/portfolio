import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = {
  Programming: ["JavaScript", "Swift", "Kotlin", "C#"],
  Web: ["HTML5", "CSS3", "Node.js", "Express.js", "Nest.js", "Next.js"],
  Mobile: ["React Native"],
  "Database Management": ["MSSQL", "MongoDB", "Firebase", "PostgreSQL"],
  "Cloud Computing": ["Azure", "AWS", "Microsoft 365"],
  Tools: ["Git", "TypeScript", "Framer Motion", "Tailwind CSS"],
};

const AboutPage = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side - Hero Section */}
        <div className="lg:col-span-4">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:sticky lg:top-8">
            <Avatar className="w-32 h-32 mb-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JT</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground mb-6 text-lg">
              Backend Engineer with expertise in developing and integrating RESTful APIs, optimizing database performance, and managing AWS infrastructure. Proficient in C#, MSSQL, and modular coding practices.
            </p>
            <Button>Download Resume</Button>
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
              <ul className="space-y-2 list-disc pl-5">
                <li>Orchestrated the integration of RESTful APIs with third-party payment systems</li>
                <li>Implemented robust logging mechanisms to meticulously record payment transactions, facilitating streamlined bug identification and resolution through effective log analysis</li>
                <li>Managed and executed intricate MSSQL operations, optimizing database performance and query execution</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-muted-foreground text-lg mb-1">Harmonation Inc.</p>
              <p className="text-sm text-muted-foreground mb-4">November 2020 – April 2021 • Taipei, Taiwan</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Enhanced user interface efficiency and reduced transaction processing time by tailoring Windows applications for banking, resulting in increased customer satisfaction</li>
                <li>Utilized C# to communicate with MSSQL databases, enhancing data retrieval and storage capabilities, and implemented optimized queries to improve database response times</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="mt-8">
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Cloud Computing Technologies Certificate</h3>
              <p className="text-muted-foreground text-lg mb-1">George Brown College</p>
              <p className="text-sm text-muted-foreground mb-4">September 2024 – August 2025 • Toronto, ON</p>
              <ul className="space-y-1 list-disc pl-5">
                <li>Microsoft 365</li>
                <li>Azure</li>
                <li>AWS</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-semibold mb-2">Mobile Application Development & Strategy</h3>
              <p className="text-muted-foreground text-lg mb-1">George Brown College • Postgrad Certificate</p>
              <p className="text-sm text-muted-foreground mb-4">September 2023 – August 2024 • Toronto, ON</p>
              <ul className="space-y-1 list-disc pl-5">
                <li>Mobile App Development for iOS and Android</li>
                <li>React Native</li>
                <li>Kotlin and Swift Programming Languages</li>
                <li>Client-Side Development Tools</li>
                <li>Server-Side Programming Concepts</li>
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
