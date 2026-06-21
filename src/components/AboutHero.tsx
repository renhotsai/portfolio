import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
					Backend / Full-Stack Engineer with 2+ years building RESTful APIs and cloud-native services on AWS and
					Azure. Skilled in C#, Node.js, and TypeScript, with hands-on use of Claude and Claude Code to speed up
					development. Based in Toronto, ON — open to Backend, Full-Stack, or Cloud Engineering roles.
				</p>
				<a href="/resume/Jeremy_Tsai_202606.pdf" download="Jeremy_Tsai_202606.pdf">
					<Button>Download Resume</Button>
				</a>
			</div>
		</div>
	);
};

export default AboutHero;