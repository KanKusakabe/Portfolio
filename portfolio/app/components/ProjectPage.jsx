// app/components/ProjectPage.jsx
import Link from "next/link";

export default function ProjectPage({ params, projects, commons }) {
  const { id } = params;
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <div>{commons.project_not_found}</div>;
  }

  return (
    <div className="all-content">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.abstract}</p>

      {/* 戻るボタン */}
      <Link href="/" className="mt-4 block underline">
        {commons.project_back_button}
      </Link>
    </div>
  );
}
