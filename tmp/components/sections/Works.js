"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Works({ dict }) {
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/projects.json"); // パブリックディレクトリに置いた場合
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <section id="works" className="all-content">
      <h2 className="text-3xl font-bold mb-8">Works</h2>
      <div className="grid grid-cols-1 [&>*]:border-0">
        {projects?.map((work, index) => (
          <div
            key={work.id || index}
            className="hover:bg-blue-700 border-0 p-4"
          >
            <Link href={`/works/${work.id}`} className="flex gap-4">
              <Image
                src={work.thumbnail}
                width={300}
                height={200}
                alt="thumbnail"
                className="w-full h-auto max-w-[170px] mr-4 sm:block hidden"
              />
              <div className="mt-4 float-left">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {work.abstract}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
