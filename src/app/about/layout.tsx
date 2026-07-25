import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jeremy Tsai — Full-Stack / Backend Engineer with 3+ years of professional experience in payment integrations, banking applications, and RESTful APIs, cloud-certified in AWS and Azure.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
