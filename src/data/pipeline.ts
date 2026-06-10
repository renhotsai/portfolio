import { experiences } from "./experiences";
import { education } from "./education";

export type PipelineEntryType = "work" | "education";

export interface PipelineEntry {
	type: PipelineEntryType;
	title: string;
	subtitle: string;
	meta: string;
	period: string;
	location: string;
	badges?: string[];
	items: string[];
	sortDate: string;
}

function toSortDate(period: string): string {
	const months: Record<string, string> = {
		January: "01", February: "02", March: "03", April: "04",
		May: "05", June: "06", July: "07", August: "08",
		September: "09", October: "10", November: "11", December: "12",
	};
	const parts = period.split(/[–-]/).map(s => s.trim());
	const [month, year] = parts[parts.length - 1].split(" ");
	return `${year}-${months[month] ?? "00"}`;
}

export const pipeline: PipelineEntry[] = [
	...experiences.map(exp => ({
		type: "work" as const,
		title: exp.title,
		subtitle: exp.company,
		meta: "",
		period: exp.period,
		location: exp.location,
		badges: exp.badges,
		items: exp.responsibilities,
		sortDate: toSortDate(exp.period),
	})),
	...education.map(edu => ({
		type: "education" as const,
		title: edu.title,
		subtitle: edu.school,
		meta: edu.degree,
		period: edu.period,
		location: edu.location,
		items: edu.details,
		sortDate: toSortDate(edu.period),
	})),
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
