import type { Metadata } from "next";
import { SITE_TITLE_TEMPLATE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: SITE_TITLE_TEMPLATE,
  },
  description:
    "About Jeremy Tsai — Full-Stack / Backend Engineer with 3+ years of professional experience in payment integrations, banking applications, and RESTful APIs, cloud-certified in AWS and Azure.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
