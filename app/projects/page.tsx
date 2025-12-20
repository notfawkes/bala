import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.id}`} className="block rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="relative h-56 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags?.map((t) => (
                    <span key={t} className="text-xs bg-muted/40 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
