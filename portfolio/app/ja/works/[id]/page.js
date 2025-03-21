// app/works/[id]/page.js
import projects from "@/public/ja/works.json";
import commons from "@/public/ja/common.json";
import Link from "next/link";
import ProjectPage from "@/app/components/ProjectPage";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function Page({ params }) {
  return <ProjectPage params={params} projects={projects} commons={commons} />;
}
