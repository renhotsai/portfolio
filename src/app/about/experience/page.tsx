import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import AboutHero from "@/components/AboutHero";
import MobileBreadcrumb from "@/components/MobileBreadcrumb";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experience",
  description: "Jeremy Tsai's background: 2+ years backend engineering in Taipei, George Brown College cloud & mobile certificates, skills in Node.js, TypeScript, AWS, Azure, and Docker.",
};

const ExperiencePage = () => {
	return (
		<div className="container py-12 md:py-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* Left Side - Hero Section (Desktop) */}
				<div className="lg:col-span-4 hidden lg:block">
					<div className="sticky top-8">
						<AboutHero />
					</div>
				</div>

				{/* Right Side - Experience Content */}
				<div className="lg:col-span-8">
					<MobileBreadcrumb currentPage="Experience" />

					{/* Mobile Hero (condensed) */}
					<div className="lg:hidden mb-6">
						<h1 className="text-xl font-bold mb-3">Experience</h1>
						<p className="text-muted-foreground text-sm">
							Professional experience and career achievements.
						</p>
					</div>

					{/* Experience Timeline */}
					<div className="space-y-6 md:space-y-8">
						<p className="text-muted-foreground">
							Backend Engineer with 2+ years of professional experience building RESTful APIs,
							payment system integrations, and cloud-native infrastructure. Holds dual Ontario
							College Graduate Certificates in Cloud Computing (AWS/Azure) and Mobile Application
							Development from George Brown College. Currently based in Toronto and open to
							Backend, Full-Stack, or Cloud Engineer roles.
						</p>
						{experiences.map((exp, index) => (
							<div key={index} className="border-l-2 border-primary pl-4 md:pl-6 py-3 md:py-4">
								<h3 className="text-lg md:text-2xl font-semibold mb-2">{exp.title}</h3>
								<p className="text-muted-foreground text-base md:text-lg mb-1">{exp.company}</p>
								<p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{exp.period} • {exp.location}</p>
								<div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
									{exp.badges.map((badge, i) => (
										<Badge key={i} variant="secondary" className="text-xs md:text-sm">{badge}</Badge>
									))}
								</div>
								<ul className="space-y-1.5 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
									{exp.responsibilities.map((item, i) => (
										<li key={i} className="leading-relaxed">{item}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperiencePage;