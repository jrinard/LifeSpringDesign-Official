import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioV1 } from "@/components/sections/Portfolio-v1";
import { brandingProjects, projects } from "@/lib/demo-content";
import { createMetadata } from "@/lib/seo";
import { pageSeo } from "@/lib/seo-content";

export const metadata = createMetadata({
  title: pageSeo.projects.title,
  description: pageSeo.projects.description,
  path: pageSeo.projects.path,
  noIndex: pageSeo.projects.noIndex,
});

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <h1 className="sr-only">Projects</h1>
        <PortfolioV1 heading="Projects" projects={projects} brandingProjects={brandingProjects} />
      </main>
      <Footer />
    </>
  );
}
