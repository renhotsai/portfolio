import { Badge } from "@/components/ui/badge";
import AboutHero from "@/components/AboutHero";
import MobileBreadcrumb from "@/components/MobileBreadcrumb";
import { experiences } from "@/data/experiences";

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
					<div className="lg:hidden mb-8">
						<h1 className="text-2xl font-bold mb-4">Experience</h1>
						<p className="text-muted-foreground">
							Professional experience and career achievements.
						</p>
					</div>

					{/* Experience Timeline */}
					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<div key={index} className="border-l-2 border-primary pl-6 py-4">
								<h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
								<p className="text-muted-foreground text-lg mb-1">{exp.company}</p>
								<p className="text-sm text-muted-foreground mb-4">{exp.period} • {exp.location}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{exp.badges.map((badge, i) => (
										<Badge key={i} variant="secondary">{badge}</Badge>
									))}
								</div>
								<ul className="space-y-2 list-disc pl-5">
									{exp.responsibilities.map((item, i) => (
										<li key={i}>{item}</li>
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