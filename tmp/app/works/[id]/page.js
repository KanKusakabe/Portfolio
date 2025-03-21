// app/works/[id]/page.js
import projects from "@/public/projects.json";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }) {
  const { id } = params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>プロジェクトが見つかりません</div>;
  }

  return (
    <div className="all-content">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.abstract}</p>

      {/* 戻るボタン */}
      <Link href="/" className="mt-4 block underline">
        Back
      </Link>
    </div>
  );
}
