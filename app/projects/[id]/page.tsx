import Image from "next/image";
import Link from "next/link";
import { getProjectById, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) {
    return (
      <div className="min-h-screen w-full bg-background text-foreground px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects" className="text-sm text-muted-foreground underline mb-6 inline-block">← Back to projects</Link>
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-4">No project matches id <strong>{params.id}</strong>.</p>
          <p className="mb-4">Available projects:</p>
          <ul className="list-disc ml-6">
            {projects.map((p) => (
              <li key={p.id}>
                <Link href={`/projects/${p.id}`} className="text-accent underline">{p.id} — {p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background text-foreground px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-sm text-muted-foreground underline mb-6 inline-block">← Back to projects</Link>

        <div className="rounded-2xl overflow-hidden border border-border">
          <div className="relative h-80 w-full">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="flex gap-2 items-center mb-6">
              {project.tags?.map((t) => (
                <span key={t} className="text-sm bg-muted/40 px-3 py-1 rounded">{t}</span>
              ))}
            </div>

            <div className="prose max-w-none">
              <h2>Overview</h2>
              <p>
                This is a placeholder overview for <strong>{project.title}</strong>. Replace with detailed
                description, screenshots, links to repo, live demo, and tech stack.
              </p>

              <h3>Role & contributions</h3>
              <ul>
                <li>Designed UI and components</li>
                <li>Implemented frontend with React/Next.js</li>
                <li>Optimized performance and accessibility</li>
              </ul>

              <div className="mt-8">
                <Link href="#" className="inline-block px-6 py-3 bg-accent text-white rounded-lg">View Live Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
