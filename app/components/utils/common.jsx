// app/components/utils/common.jsx

// 著者名を比較して自分の名前（複数パターン可）に強調表示する関数
export function renderAuthors(authors) {
  const myNames = ["Kan Kusakabe", "日下部 完"];
  return authors.split(",").map((author, index) => {
    const trimmedAuthor = author.trim();
    const isMe = myNames.some((name) => trimmedAuthor.startsWith(name));

    return (
      <span key={index}>
        <span className={isMe ? "font-bold underline" : ""}>
          {trimmedAuthor}
        </span>
        {index < authors.split(",").length - 1 && ", "}
      </span>
    );
  });
}
