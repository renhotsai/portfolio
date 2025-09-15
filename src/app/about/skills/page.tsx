import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AboutHero from "@/components/AboutHero";
import MobileBreadcrumb from "@/components/MobileBreadcrumb";
import { skills } from "@/data/skills";

const SkillsPage = () => {
	return (
		<div className="container py-12 md:py-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
				{/* Left Side - Hero Section (Desktop) */}
				<div className="lg:col-span-4 hidden lg:block">
					<div className="sticky top-8">
						<AboutHero />
					</div>
				</div>

				{/* Right Side - Skills Content */}
				<div className="lg:col-span-8">
					<MobileBreadcrumb currentPage="Skills" />

					{/* Mobile Hero (condensed) */}
					<div className="lg:hidden mb-6">
						<h1 className="text-xl font-bold mb-3">Skills</h1>
						<p className="text-muted-foreground text-sm">
							Technical skills and expertise I&apos;ve developed throughout my career.
						</p>
					</div>

					{/* Skills Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
				</div>
			</div>
		</div>
	);
};

export default SkillsPage;