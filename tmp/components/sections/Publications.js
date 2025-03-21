// components/sections/Publications.js
// "use client";

export default function Publications({ dict }) {
  const samplePublications = [
    {
      title: "Sample Publication 1",
      authors: ["Author 1", "Author 2"],
      venue: "Conference 2023",
      // 他の出版情報
    },
    // 他の出版物
  ];

  return (
    <section id="publications" className="py-10 px-10">
      <h2 className="text-3xl font-bold mb-8">Publications</h2>
      <div className="space-y-6">
        {samplePublications.map((pub, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 pb-6"
          >
            <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {pub.authors.join(", ")}
            </p>
            <p className="text-gray-500">{pub.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
