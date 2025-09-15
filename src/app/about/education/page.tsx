import AboutHero from "@/components/AboutHero";
import MobileBreadcrumb from "@/components/MobileBreadcrumb";
import { education } from "@/data/education";

const EducationPage = () => {
	return (
		<div className="container py-12 md:py-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* Left Side - Hero Section (Desktop) */}
				<div className="lg:col-span-4 hidden lg:block">
					<div className="sticky top-8">
						<AboutHero />
					</div>
				</div>

				{/* Right Side - Education Content */}
				<div className="lg:col-span-8">
					<MobileBreadcrumb currentPage="Education" />

					{/* Mobile Hero (condensed) */}
					<div className="lg:hidden mb-8">
						<h1 className="text-2xl font-bold mb-4">Education</h1>
						<p className="text-muted-foreground">
							Academic background and educational achievements.
						</p>
					</div>

					{/* Education Timeline */}
					<div className="space-y-8">
						{education.map((edu, index) => (
							<div key={index} className="border-l-2 border-primary pl-6 py-4">
								<h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
								<p className="text-muted-foreground text-lg mb-1">
									{edu.school} • {edu.degree}
								</p>
								<p className="text-sm text-muted-foreground mb-4">
									{edu.period} • {edu.location}
								</p>
								<ul className="space-y-1 list-disc pl-5">
									{edu.details.map((detail, i) => (
										<li key={i}>{detail}</li>
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

export default EducationPage;