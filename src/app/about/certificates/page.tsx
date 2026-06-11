import type { Metadata } from "next";
import CertificatesClientPage from "./_ClientPage";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Jeremy Tsai's professional certifications: Ontario College Graduate Certificates in Cloud Computing Technologies and Mobile Application Development.",
};

export default function CertificatesPage() {
  return <CertificatesClientPage />;
}
