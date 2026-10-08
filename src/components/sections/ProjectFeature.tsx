import { Picture } from "@/components/ui/Picture";
import { TextLink } from "@/components/ui/TextLink";
import { getStatusLabel } from "@/content/projects";
import type { ProjectFeatureProps } from "@/types/ui";
import { cn } from "@/utils/cn";

export function ProjectFeature({ project, reverse = false }: ProjectFeatureProps) {
  const [first, second] = project.gallery;
  const titleId = `project-${project.slug}`;

  return (
    <article aria-labelledby={titleId} className="grid gap-8 md:grid-cols-12 md:gap-10">
      <div className={cn("md:col-span-7", reverse && "md:order-2")}>
        <div className="aspect-[4/5] overflow-hidden rounded-sm">
          <Picture
            image={project.cover}
            sizes="(min-width: 1280px) 720px, (min-width: 768px) 58vw, 100vw"
            className="h-full object-cover"
          />
        </div>
      </div>

      <div className={cn("flex flex-col md:col-span-5", reverse && "md:order-1")}>
        <p className="text-stone">{getStatusLabel(project.status)}</p>
        <h3 id={titleId} className="font-wide mt-2 text-3xl font-semibold">
          {project.name}
        </h3>
        <p className="text-stone mt-2">
          {project.location ? `${project.type}, ${project.location}` : project.type}
        </p>
        <p className="mt-6 text-lg leading-relaxed">{project.summary}</p>
        {project.href && (
          <TextLink href={project.href} className="mt-8 self-start">
            View on Studio COKA
          </TextLink>
        )}
        {first && second && (
          <div className="mt-auto grid grid-cols-2 gap-4 pt-10">
            {[first, second].map((image) => (
              <div key={image.src} className="aspect-square overflow-hidden rounded-sm">
                <Picture
                  image={image}
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
