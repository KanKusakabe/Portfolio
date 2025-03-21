// app/components/Header.js
"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header({ common }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      <header className="fixed all-content w-full bg-white">
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
      className={`fixed lg:static all-content w-full ${
        isOpen ? "bg-white" : "bg-transparent"
      } sm:bg-white lg:bg-blue-50 lg:h-full`}
    >
      <div className="flex flex-row lg:flex-col justify-end sm:justify-start items-center lg:gap-[2rem]  lg:py-[2rem] lg:sticky lg:top-0">
        {/* スマホの場合: ハンバーガーメニューのみ表示 */}
        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl px-4 py-3 border rounded-md mr-6 bg-white"
          >
            ☰
          </button>
        ) : (
          // PCの場合: 名前と所属を表示
          <div>
            <Image
              src="/image/sample.png"
              alt="my face image"
              width={200}
              height={200}
              className="hidden lg:block rounded-full"
            />
            <h1 className="text-xl lg:text-2xl font-semibold">
              <Link href="/">{common.name}</Link>
            </h1>
            <p className="text-sm lg:text-lg">{common.affiliation}</p>
          </div>
        )}

        {/* PCの場合: 通常のナビゲーション */}
        {!isMobile && (
          <>
            <nav className="gap-6 lg:gap-12 px-[1.5rem] flex flex-row lg:flex-col lg:all-content">
              <Link href="#profile" className="header-link-style">
                {common.home_title}
              </Link>
              <Link href="#works" className="header-link-style">
                {common.project_title}
              </Link>
              <Link href="#publications" className="header-link-style">
                {common.publication_title}
              </Link>
            </nav>

            {/* 英語/日本語切り替えをLinkコンポーネントで実装 */}
            <div className="flex gap-[0.5rem] justify-end">
              <Link href="/" locale="en">
                en
              </Link>
              <span>/</span>
              <Link href="/ja" locale="ja">
                ja
              </Link>
            </div>
          </>
        )}
      </div>

      {/* スマホメニュー (開閉可能) */}
      {isMobile && isOpen && (
        <nav className="flex flex-col gap-4 mt-2 p-4 border-t bg-white">
          {/* 折りたたまれる名前と所属 */}
          <div className="mb-4">
            <h1 className="text-xl font-semibold">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Kan Kusakabe
              </Link>
            </h1>
            <p className="text-sm">Hokkaido University</p>
          </div>
          <Link
            href="#profile"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <Link
            href="#works"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Works
          </Link>
          <Link
            href="#publications"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Publications
          </Link>
        </nav>
      )}
    </header>
  );
}
