import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Backend Engineer at Collaborate Technology building payment system APIs in C# and MSSQL, plus experience at Harmonation Inc. on banking applications.",
  alternates: {
    canonical: "/about/experience",
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
