// app/components/Header.js
"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import contact from "@/public/contact.json";
import nextConfig from "@/next.config.mjs";

export default function Header({ common }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const BASE_PATH = nextConfig.basePath || "";

  // ダークモードの初期化
  useEffect(() => {
    setMounted(true);
  }, []);

  // スマホかどうか判定
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // マウントされるまでは初期状態を返す
  if (!mounted) {
    return (
      <header className="all-content w-full bg-white">
        <div className="flex justify-start items-center px-10">
          <div>
            <h1 className="font-semibold">
              <Link href="/">what</Link>
            </h1>
            <p className="text-sm">{common.affiliation}</p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      style={{ writingMode: "horizontal-tb" }}
      className={`all-content w-full fixed lg:relative z-50 ${
        isOpen ? "bg-white" : "bg-transparent"
      } sm:bg-white lg:bg-blue-50 lg:h-full`}
    >
      <div className="flex flex-row lg:flex-col justify-end sm:justify-start items-center lg:gap-[2rem]  lg:py-[2rem] lg:sticky lg:top-10 lg:mt-[2rem]">
        {/* スマホの場合: ハンバーガーメニューのみ表示 */}
        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl px-4 py-3 border rounded-md bg-white"
          >
            ☰
          </button>
        ) : (
          // PCの場合: 名前と所属を表示
          <div>
            <Image
              // src="/image/KanKusakabe.png"
              src={`${BASE_PATH}/image/KanKusakabe.png`}
              alt="my face image"
              width={200}
              height={200}
              className="hidden lg:block rounded-full"
            />
            <h1 className="text-lg lg:text-2xl font-semibold mt-[1rem]">
              <Link href="/">{common.name}</Link>
            </h1>
            <p className="text-sm lg:text-lg">{common.affiliation}</p>
          </div>
        )}

        {/* PCの場合: 通常のナビゲーション */}
        {!isMobile && (
          <div className="flex flex-row lg:flex-col items-center ml-auto lg:gap-[5rem] lg:mt-[2rem]">
            <nav className="lg:gap-[2.3rem] flex flex-row lg:flex-col">
              <Link
                href={`${common.path}#profile`}
                className="header-link-style"
              >
                {common.home_title}
              </Link>
              <Link href={`${common.path}#works`} className="header-link-style">
                {common.project_title}
              </Link>
              <Link
                href={`${common.path}#publications`}
                className="header-link-style"
              >
                {common.publication_title}
              </Link>
            </nav>

            {/* 英語/日本語切り替えをLinkコンポーネントで実装 */}
            <div className="flex gap-[0.5rem] justify-end">
              <Link href="/">en</Link>
              <span>/</span>
              <Link href="/ja">ja</Link>
            </div>
          </div>
        )}
      </div>

      {/* スマホメニュー (開閉可能) */}
      {isMobile && isOpen && (
        <nav className="flex flex-col gap-4 mt-1 p-4 border-t">
          {/* 折りたたまれる名前と所属 */}
          <div className="mb-4">
            <h1 className="text-xl font-semibold">
              <Link href="/" onClick={() => setIsOpen(false)}>
                {common.name}
              </Link>
            </h1>
            <p className="text-sm">{common.affiliation}</p>
          </div>
          <Link
            href="#profile"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {common.home_title}
          </Link>
          <Link
            href="#works"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {common.project_title}
          </Link>
          <Link
            href="#publications"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {common.publication_title}
          </Link>
        </nav>
      )}
    </header>
  );
}
