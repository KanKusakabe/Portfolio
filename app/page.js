// app/page.js
import Image from "next/image";
import common from "@/public/en/common.json";
import Header from "@/app/components/Header";
import projects from "@/public/en/works.json";
import Link from "next/link";
import samplePublications from "@/public/en/publications.json";
import HomePage from "@/app/components/HomePage";

export default function Home() {
  return (
    <HomePage
      common={common}
      projects={projects}
      samplePublications={samplePublications}
      lang="/"
    />
  );
}
