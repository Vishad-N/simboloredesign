import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectProcess from "@/components/project/ProjectProcess";
import ProjectResults from "@/components/project/ProjectResults";
import NextProjectCTA from "@/components/project/NextProjectCTA";
import Navbar from "@/components/Navbar";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Next.js metadata generation
export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.slug];

  if (!project) {
    return {
      title: "Project Not Found | Simbolo",
    };
  }

  return {
    title: `${project.title} | Simbolo Projects`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-bglight min-h-screen">
      <Navbar />
      
      <ProjectHero
        title={project.title}
        category={project.category}
        shortDescription={project.shortDescription}
        heroImage={project.heroImage}
      />
      
      <ProjectOverview overview={project.overview} />
      
      <ProjectGallery images={project.gallery} />
      
      <ProjectProcess process={project.process} />
      
      <ProjectResults results={project.results} />
      
      <NextProjectCTA nextProject={project.nextProject} />
    </main>
  );
}
