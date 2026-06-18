import { HomePage } from "@/components/pages/HomePage";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Home Preview",
  description: siteConfig.description,
  path: "/home",
  noIndex: true,
});

export default function HomePreviewPage() {
  return <HomePage />;
}
