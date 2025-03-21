// components/ui/ProjectCard.js
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative hover:scale-105 transition-transform">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {project.authors.map((author, i) => (
            <span key={i}>
              {author.isMe ? (
                <span className="font-bold underline">{author.name}</span>
              ) : (
                author.name
              )}
              {i < project.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="text-sm text-gray-500">{project.venue}</p>
      </div>
    </div>
  );
}
