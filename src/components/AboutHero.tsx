import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutHero = () => {
	return (
		<div className="flex flex-col items-center space-y-6 md:space-y-8">
			<Avatar className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56">
				<AvatarImage src="/Images/Jeremy-WFcyBsvIZyLUozH4k7MON7w2tFfIbj.jpg" alt="Jeremy"
				             className="object-cover scale-150 object-top"/>
				<AvatarFallback>JT</AvatarFallback>
			</Avatar>
			<div className="space-y-4 md:space-y-6 text-center">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h1>
				<p className="text-muted-foreground text-base md:text-lg max-w-2xl">
					Backend Engineer and Full-Stack Developer with 5+ years of coding experience, including 3+ years of
					professional experience in backend systems and payment processing integration. Currently pursuing
					advanced cloud computing studies at George Brown College. Experienced in Agile development methodologies
					and delivering high-quality, maintainable code. Specialized in building robust web applications, RESTful
					APIs, and scalable backend systems using C#, JavaScript/TypeScript, Node.js, and modern cloud
					technologies. Proven expertise in AWS cloud architecture, database optimization, and creating
					enterprise-level solutions that handle high-volume transactions.
				</p>
				<Link href="/resume/JeremyTsai-2025.pdf" target="_blank" rel="noopener noreferrer">
					<Button>Download Resume</Button>
				</Link>
			</div>
		</div>
	);
};

export default AboutHero;