import "./gauri.scss";
import { getSeoMetadata } from "@/app/utils/seoMetadata";

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: "/dr-gauri-agarwal",
    hierarchyCandidates: [
      ["Doctors", "All IVF Specialists - Profiles"],
      ["Doctors"],
      [],
    ],
  });
}

export default function DrGauriAgarwalLayout({ children }) {
  return children;
}
