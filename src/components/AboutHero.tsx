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
					Full-Stack / Backend Engineer with 3 years of professional experience building payment system integrations,
					banking applications, and RESTful APIs in Node.js, TypeScript, and C#. Cloud-certified through George Brown
					College (AWS, Azure), with hands-on experience in Docker containerization, PostgreSQL/MSSQL optimization,
					and production deployment. Legally entitled to work in Canada — currently targeting Backend or Full-Stack
					Engineering roles in the Greater Toronto Area.
				</p>
				<a href="/resume/Jeremy_Tsai_202606.pdf" download="Jeremy_Tsai_202606.pdf">
					<Button>Download Resume</Button>
				</a>
			</div>
		</div>
	);
};

export default AboutHero;