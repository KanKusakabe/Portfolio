// app/components/ProjectPage.jsx
import Link from "next/link";

// ヘルパー関数：通常のYouTube URL を埋め込み用 URL に変換
function getEmbedUrl(url) {
  const regExp =
    /^.*(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/))([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[1].length === 11) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  // マッチしなかった場合は、元のURLをそのまま返す
  return url;
}

export default async function ProjectPage(props) {
  // props.params は Promise で渡される可能性があるので、await してから利用する
  const params = await props.params;
  const { id } = params;
  const { projects, commons } = props;
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <div>{commons.project_not_found}</div>;
  }

  return (
    <div className="all-content w-3/5 mx-auto min-h-screen p-4">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.abstract}</p>

      {/* YouTube動画の埋め込み */}
      {project.youtube && project.youtube.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Videos</h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {project.youtube.map((url, index) => {
              const embedUrl = getEmbedUrl(url);
              return (
                <div key={index} className="aspect-video">
                  <iframe
                    src={embedUrl}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Publication情報の表示 */}
      {project.publication && project.publication.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Publications</h2>
          <div className="mt-4 space-y-4">
            {project.publication.map((pub, index) => (
              <div key={index} className="p-4 border rounded-md">
                <h3 className="text-lg font-bold">{pub.title}</h3>
                <p className="text-sm">
                  {pub.authors} ({pub.year})
                </p>
                {pub.publisher && <p className="text-sm">{pub.publisher}</p>}
                {pub.url && (
                  <Link href={pub.url} className="mt-2 inline-block underline">
                    {pub.url}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 戻るボタン */}
      <Link href="/" className="mt-6 block underline">
        {commons.project_back_button}
      </Link>
    </div>
  );
}
