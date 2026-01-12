// app/components/HomePage.jsx
import contact from "@/public/contact.json";
import Link from "next/link";
import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import { renderAuthors } from "@/app/components/utils/common";
import ReactMarkdown from "react-markdown";
import { CustomMarkdown } from "@/app/components/CustomMarkdown";

export default function HomePage({
  common,
  projects,
  samplePublications,
  lang,
}) {
  const BASE_PATH = nextConfig.basePath || "";
  return (
    <>
      {/* About me */}
      <section id="profile" className="common-section border-b">
        <div className="sm:hidden justify-center">
          <Image
            src={`${BASE_PATH}/image/KanKusakabe.png`}
            width={120} // 幅を150pxに設定
            height={120} // 高さを150pxに設定
            alt="It's me!"
            className="rounded-full object-cover"
          />
        </div>
        <div className="py-[1rem] sm:py-[5rem] lg:py-[1rem]" />
        <h2>{common.home_title}</h2>
        <ReactMarkdown
          components={{
            a: ({ node, ...props }) => (
              <a
                className="text-blue‑500 hover:text-blue‑700 underline"
                {...props}
              />
            ),
          }}
        >
          {common.introduction}
        </ReactMarkdown>
        <br />
        {/* News */}
        <h4 className="font-bold">{common.news_title}</h4>
        <div className="leading-relaxed">
          {Array.isArray(common.news) && common.news.length > 0 ? (
            common.news.map((news_line, index) => (
              <div
                key={index}
                className="border-gray-200 dark:border-gray-700 pb-"
              >
                - <CustomMarkdown>{news_line}</CustomMarkdown>{" "}
              </div>
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
        {/* `${BASE_PATH}/CV-en.pdf`のpdfジャンプを埋め込む */}
        <br />
        <Link
          href={`/${common.cv}`}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          [Download CV]
        </Link>
        <div className="py-[2rem] sm:py-[5rem] lg:py-[2rem]" />
      </section>

      {/* Works */}
      {/* <section id="works" className="common-section border-b "> */}
      <section id="works" className="common-section border-b">
        {/* 空間を入れる */}
        <div className="py-[2rem] sm:py-[5rem] lg:py-[0rem]" />
        <h2>{common.project_title}</h2>
        <div className="grid grid-cols-1 [&>*]:border-0">
          {projects?.map((work, index) => (
            <div
              key={work.id || index}
              className="border-0 p-4 transform ease-out duration-300 hover:scale-105"
            >
              <Link href={`${lang}works/${work.id}`} className="flex gap-4">
                <Image
                  // src={work.thumbnail}
                  src={`${BASE_PATH}${work.thumbnail}`}
                  width={400}
                  height={300}
                  alt="thumbnail"
                  className="w-full h-auto max-w-[170px] mr-4"
                />
                <div className="mt-4 float-left">
                  <h2 className="text-5xl font-semibold mb-2  sm:block hidden">
                    {work.title}
                  </h2>
                  {/* <p className="text-gray-600 dark:text-gray-400">
                    {work.abstract}
                  </p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="py-[2rem] sm:py-[5rem] lg:py-[2rem]" />
      </section>
      {/* Publications */}
      <section id="publications" className="common-section">
        <div className="py-[2rem] sm:py-[5rem] lg:py-[0rem]" />
        <h2>{common.publication_title}</h2>
        <div className="space-y-2">
          {samplePublications.map((publication, index) => (
            <div
              key={index}
              className="border-gray-200 dark:border-gray-700 pb-6"
            >
              [{index + 1}]{" "}
              <CustomMarkdown>{publication.authors}</CustomMarkdown>{" "}
              <CustomMarkdown>{publication.title}</CustomMarkdown>{" "}
              <CustomMarkdown>{publication.publisher}</CustomMarkdown>{" "}
              <CustomMarkdown>{publication.url}</CustomMarkdown>{" "}
            </div>
          ))}
        </div>
      </section>

      <div className="py-[20rem]" />
    </>
  );
}
