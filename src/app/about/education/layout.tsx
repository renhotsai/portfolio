import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Ontario College Graduate Certificates in Cloud Computing Technologies and Mobile Application Development from George Brown College, plus a Bachelor's in Information Technology.",
  alternates: {
    canonical: "/about/education",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
