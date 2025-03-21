// app/components/HomePage.jsx
import Link from "next/link";
import Image from "next/image";
export default function HomePage({ common, projects, samplePublications }) {
  return (
    <>
      {/* About me */}
      <section id="profile" className="common-section border-b">
        <h2>{common.home_title}</h2>
        {/* <h3>{common.name}</h3> */}
        <p>{common.introduction}</p>
        <br />
        <div className="mb-8" />
      </section>
      {/* Works */}
      {/* <section id="works" className="common-section border-b "> */}
      <section
        id="works"
        className="common-section border-b  mt-[3rem] sm:mt-[6rem]"
      >
        <h2>Works</h2>
        <div className="grid grid-cols-1 [&>*]:border-0">
          {projects?.map((work, index) => (
            <div
              key={work.id || index}
              className="border-0 p-4 transform ease-out duration-300 hover:scale-105"
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
        <div className="mb-8" />
      </section>
      {/* Publications */}
      <section id="publications" className="common-section">
        <h2>Publications</h2>
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
    </>
  );
}
