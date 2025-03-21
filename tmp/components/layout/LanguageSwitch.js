// components/layout/LanguageSwitch.js
"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();

  const switchLanguage = (locale) => {
    router.push(`/${locale}`);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("ja")}>日本語</button>
    </div>
  );
}
