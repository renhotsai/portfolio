import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PipelineEntry } from "@/data/pipeline";

export default function PipelineTimeline({ entries }: { entries: PipelineEntry[] }) {
	return (
		<div className="relative border-l-2 border-border ml-4 space-y-0">
			{entries.map((entry, index) => {
				const isWork = entry.type === "work";
				const Icon = isWork ? Briefcase : GraduationCap;
				return (
					<div key={index} className="relative pl-8 md:pl-10 pb-8 md:pb-10 last:pb-0">
						<span
							className={cn(
								"absolute left-0 top-[20px] -translate-x-1/2 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-background",
								isWork ? "border-primary" : "border-blue-500"
							)}
						>
							<Icon className={cn("h-3 w-3", isWork ? "text-primary" : "text-blue-500")} />
						</span>

						<div className="flex items-center gap-2 mb-2">
							<Badge
								variant="secondary"
								className={cn(
									"gap-1 text-xs",
									isWork ? "bg-primary/10 text-primary" : "bg-blue-500/10 text-blue-500"
								)}
							>
								<Icon className="h-3 w-3" />
								{isWork ? "Work" : "Education"}
							</Badge>
						</div>

						<h3 className="text-lg md:text-2xl font-semibold mb-1">{entry.title}</h3>
						<p className="text-muted-foreground text-base md:text-lg mb-0.5">
							{entry.subtitle}{entry.meta ? ` • ${entry.meta}` : ""}
						</p>
						<p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
							{entry.period} • {entry.location}
						</p>

						{entry.badges && entry.badges.length > 0 && (
							<div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
								{entry.badges.map((badge, i) => (
									<Badge key={i} variant="secondary" className="text-xs md:text-sm">
										{badge}
									</Badge>
								))}
							</div>
						)}

						<ul className="space-y-1.5 md:space-y-2 list-disc pl-4 md:pl-5 text-sm md:text-base">
							{entry.items.map((item, i) => (
								<li key={i} className="leading-relaxed">{item}</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
}
