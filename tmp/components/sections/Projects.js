"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const router = useRouter();
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    async function fetchProjects({ dict }) {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  // 📌 現在のURLが `/projects/[slug]` 形式なら詳細ページを表示
  const slug = currentPath.replace("/projects/", "");
  const project = projects.find((p) => p.slug === slug);

  // 📌 詳細ページ: `/projects/[slug]`
  if (project) {
    return (
      <section className="py-10 px-10">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-600 mt-4">{project.abstract}</p>

        {project.videoUrl && (
          <div className="mt-6">
            <iframe
              width="560"
              height="315"
              src={project.videoUrl}
              title="Project Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {project.publicationInfo && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Publication</h2>
            <p className="text-gray-500">{project.publicationInfo.title}</p>
            {project.publicationInfo.doi && (
              <a
                href={`https://doi.org/${project.publicationInfo.doi}`}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI: {project.publicationInfo.doi}
              </a>
            )}
          </div>
        )}

        <button
          onClick={() => router.push("/projects")}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Back to Projects
        </button>
      </section>
    );
  }

  // 📌 一覧ページ: `/projects`
  return (
    <section id="works" className="py-10 px-10">
      <h2 className="text-3xl font-bold mb-8">Works</h2>
      <div className="grid grid-cols-1 gap-6">
        {projects?.map((work) => (
          <div
            key={work.slug}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:bg-blue-700 cursor-pointer"
            onClick={() => router.push(`/projects/${work.slug}`)}
          >
            <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{work.abstract}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
