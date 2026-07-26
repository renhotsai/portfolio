import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Cloud Computing Technologies and Mobile Application Development and Strategy certificates from George Brown College (Ontario College Graduate Certificate).",
  alternates: {
    canonical: "/about/certificates",
  },
};

export default function CertificatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
