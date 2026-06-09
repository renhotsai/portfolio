import AboutHero from "@/components/AboutHero";
import MobileBreadcrumb from "@/components/MobileBreadcrumb";
import PipelineTimeline from "@/components/PipelineTimeline";
import { pipeline } from "@/data/pipeline";

const PipelinePage = () => (
	<div className="container py-12 md:py-16">
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
			<div className="lg:col-span-4 hidden lg:block">
				<div className="sticky top-8">
					<AboutHero />
				</div>
			</div>
			<div className="lg:col-span-8">
				<MobileBreadcrumb currentPage="Pipeline" />
				<div className="lg:hidden mb-6">
					<h1 className="text-xl font-bold mb-3">Pipeline</h1>
					<p className="text-muted-foreground text-sm">
						Work experience and education timeline.
					</p>
				</div>
				<PipelineTimeline entries={pipeline} />
			</div>
		</div>
	</div>
);

export default PipelinePage;
