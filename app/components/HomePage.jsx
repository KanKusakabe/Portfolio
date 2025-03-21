// app/components/HomePage.jsx
import contact from "@/public/contact.json";
import Link from "next/link";
import Image from "next/image";
import nextConfig from "@/next.config.mjs";
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
        <h2>{common.home_title}</h2>
        {/* <h3>{common.name}</h3> */}
        <p>{common.introduction}</p>
        <br />
        {/* SNS & Email Links */}
        <div className="flex space-x-4 mt-4">
          <Link href={contact.X}>
            <Image
              src={`${BASE_PATH}/image/icon/X.svg`}
              alt="X account"
              width={24}
              height={24}
            />
          </Link>
          <Link href={contact.facebook}>
            <Image
              src={`${BASE_PATH}/image/icon/facebook.svg`}
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href={contact.instagram}>
            <Image
              src={`${BASE_PATH}/image/icon/instagram.svg`}
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href={contact.linkedin}>
            <Image
              // src="/image/icon/linkedin.svg"
              src={`${BASE_PATH}/image/icon/linkedin.svg`}
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
          <Link href={contact.github}>
            <Image
              // src="/image/icon/github.svg"
              src={`${BASE_PATH}/image/icon/github.svg`}
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href={contact.mail}>
            <Image
              // src="/image/icon/mail.svg"
              src={`${BASE_PATH}/image/icon/mail.svg`}
              alt="e-mail"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {/* 横に並べる */}
        <div className="mb-8" />
      </section>

      {/* Works */}
      {/* <section id="works" className="common-section border-b "> */}
      <section id="works" className="common-section border-b">
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
                  className="w-full h-auto max-w-[170px] mr-4 sm:block hidden"
                />
                <div className="mt-4 float-left">
                  <h3 className="text-5xl font-semibold mb-2">{work.title}</h3>
                  {/* <p className="text-gray-600 dark:text-gray-400">
                    {work.abstract}
                  </p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mb-8" />
      </section>
      {/* Publications */}
      <section id="publications" className="common-section">
        <h2>{common.publication_title}</h2>
        <div className="space-y-2">
          {samplePublications.map((publications, index) => (
            <div
              key={index}
              className="border-gray-200 dark:border-gray-700 pb-6"
            >
              <p>{publications.title}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {publications.authors}
              </p>
              <p className="text-gray-500">{publications.venue}</p>
              <p className="text-gray-500">{publications.what}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="mb-16" />
    </>
  );
}
