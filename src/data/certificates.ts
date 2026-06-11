
export interface Certificate {
	id: string;
	title: string;
	description: string;
	pdfUrl?: string;
	externalUrl?: string;
	issuer?: string;
}

export const certificates: Certificate[] = [
	{
		id: "mobile-dev",
		title: "Mobile App Development Certificate",
		description: "Ontario College Graduate Certificate - Mobile Application Development and Strategy",
		pdfUrl: "/certificate/Ontario College Graduate Cert. - Mobile Application Development and Strategy.pdf",
		issuer: "George Brown College",
	},
	{
		id: "cloud-computing",
		title: "Cloud Computing Technologies Certificate",
		description: "Ontario College Graduate Certificate - Cloud Computing Technologies",
		pdfUrl: "/certificate/Ontario College Graduate Cert. - Cloud Computing Technologies.pdf",
		issuer: "George Brown College",
	},
	{
		id: "aws-cloud-practitioner",
		title: "AWS Certified Cloud Practitioner",
		description: "Foundational AWS certification covering core services, security, pricing, and architecture.",
		externalUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
		issuer: "Amazon Web Services",
	},
	{
		id: "azure-fundamentals",
		title: "Microsoft Azure Fundamentals (AZ-900)",
		description: "Foundational Azure certification covering cloud concepts, services, security, and compliance.",
		externalUrl: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
		issuer: "Microsoft",
	},
];
