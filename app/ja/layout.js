// app/ja/layout.js

import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/app/components/Footer";
import common from "@/public/ja/common.json";

// Next.js Metadata（app/layout.js または各ページに設定）
export const metadata = {
  title: "日下部 完 | 北海道大学大学院 - HCI研究者",
  description:
    "北海道大学大学院情報科学院 博士後期課程の日下部完です。モバイルデバイスのアクセサリ型インタフェース、ジェスチャ認識、機械学習、3Dプリンティング、インタラクティブデザインの研究に取り組んでいます。プロジェクトや出版物などをご覧いただけます。",
  keywords: [
    "日下部完",
    "HCI",
    "ヒューマンコンピュータインタラクション",
    "モバイルインタラクション",
    "ジェスチャ認識",
    "3Dプリンティング",
    "インタラクティブデザイン",
    "北海道大学",
  ],
  openGraph: {
    title: "日下部完 - モバイルインタラクション・ジェスチャ認識研究",
    description:
      "日下部完によるモバイルデバイスのアクセサリ型インタフェース、ジェスチャ認識、機械学習を活用した革新的なインタラクションデザインの研究をご覧ください。",
    url: "https://kankusakabe.github.io/Portfolio/ja",
    siteName: "日下部完のポートフォリオ",
    images: [
      {
        url: "https://kankusakabe.github.io/Portfolio/image/KanKusakabe.png",
        width: 800,
        height: 600,
        alt: "日下部完のプロフィール画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "日下部完 - 北海道大学大学院のHCI研究者",
    description:
      "日下部完（モバイルインタラクション、ジェスチャ認識、インタラクティブデザイン）のX(twitter)アカウント",
    creator: "@HCI_kan",
    images: ["https://kankusakabe.github.io/Portfolio/image/KanKusakabe.png"],
  },
  social: {
    instagram: "https://www.instagram.com/hci_kan/",
    facebook: "https://www.facebook.com/profile.php?id=100075413030238",
    linkedin: "https://www.linkedin.com/in/kan-kusakabe-a83589239/",
    github: "https://github.com/KanKusakabe",
    twitter: "https://x.com/HCI_kan",
    email: "mailto:kusakabe.kan.v5@elms.hokudai.ac.jp",
  },
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-row py-[2rem] lg:py-[0rem]">
          <main className="flex-1 mt-[4rem]  sm:mt-[6rem] lg:mt-[4.5rem]">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
