import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline",
  description:
    "Full timeline of Jeremy Tsai's work experience and education, from military service through backend engineering roles to cloud computing certification.",
  alternates: {
    canonical: "/about/pipeline",
  },
};

export default function PipelineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
