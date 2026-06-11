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
					Backend &amp; Full-Stack Engineer with 2+ years of professional backend experience and 5+ years overall.
					Specialized in RESTful API design, payment system integrations, and cloud-native infrastructure on AWS
					and Azure. Holds dual Ontario College Graduate Certificates in Cloud Computing and Mobile Development
					from George Brown College. Currently based in Toronto, ON — open to Backend, Full-Stack, or Cloud
					Engineer roles.
				</p>
				<Link href="/resume/JeremyTsai2026.pdf" target="_blank" rel="noopener noreferrer">
					<Button>Download Resume</Button>
				</Link>
			</div>
		</div>
	);
};

export default AboutHero;