import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MobileBreadcrumb = ({ currentPage }: { currentPage: string }) => {
	return (
		<div className="md:hidden">
			{/* Breadcrumb */}
			<div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
				<Link href="/about" className="hover:text-foreground transition-colors">
					About
				</Link>
				<ChevronRight className="h-4 w-4" />
				<span className="text-foreground font-medium">{currentPage}</span>
			</div>
		</div>
	);
};

export default MobileBreadcrumb;