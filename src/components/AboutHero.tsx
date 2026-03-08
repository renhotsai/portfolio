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
					Full-Stack Engineer with 5+ years of experience, including 3+ years in professional backend and payment
					system development. Skilled in end-to-end application architecture — from RESTful API design and
					relational database schema planning to AWS cloud infrastructure. Proficient in AI-assisted development
					using tools like Claude and Cursor, and experienced in integrating LLM APIs into production applications.
					Grounded in TypeScript, Node.js, C#, and modern full-stack technologies, with ongoing cloud computing
					studies at George Brown College.
				</p>
				<Link href="/resume/JeremyTsai-2025.pdf" target="_blank" rel="noopener noreferrer">
					<Button>Download Resume</Button>
				</Link>
			</div>
		</div>
	);
};

export default AboutHero;