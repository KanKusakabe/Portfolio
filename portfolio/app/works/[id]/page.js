// app/works/[id]/page.js
import projects from "@/public/en/works.json";
import commons from "@/public/en/common.json";
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
