import type { Metadata } from "next";
import AboutClientPage from "./_ClientPage";

export const metadata: Metadata = {
  title: "About",
  description: "Jeremy Tsai's background: 2+ years backend engineering in Taipei, George Brown College cloud & mobile certificates, skills in Node.js, TypeScript, AWS, Azure, and Docker.",
};

export default function AboutPage() {
  return <AboutClientPage />;
}
