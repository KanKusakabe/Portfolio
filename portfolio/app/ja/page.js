// app/page.js
import Image from "next/image";
import common from "@/public/ja/common.json";
import Header from "@/app/components/Header";
import projects from "@/public/ja/works.json";
import Link from "next/link";
import samplePublications from "@/public/ja/publications.json";
import HomePage from "@/app/components/HomePage";

export default function Home() {
  return (
    <HomePage
      common={common}
      projects={projects}
      samplePublications={samplePublications}
    />
  );
}
