"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation("main");

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
      <header
        className={`fixed all-content w-full ${
          isOpen ? "bg-white" : "bg-transparent"
        } sm:bg-white`}
      >
        <div className="flex justify-start items-center">
          <div>
            <h1 className="text-xl font-semibold">
              <Link href="/">{t("name")}</Link>
            </h1>
            <p className="text-sm">Hokkaido University</p>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed all-content w-full ${
        isOpen ? "bg-white" : "bg-transparent"
      } sm:bg-white`}
    >
      <div className="flex justify-end sm:justify-start items-center ">
        {/* スマホの場合: ハンバーガーメニューのみ表示 */}
        {isMobile ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl p-3 px-4 border rounded-md mr-6 bg-white"
          >
            ☰
          </button>
        ) : (
          // PCの場合: 名前と所属を表示
          <div>
            <h1 className="text-xl font-semibold">
              <Link href="/">Kan Kusakabe</Link>
            </h1>
            <p className="text-sm">Hokkaido University</p>
          </div>
        )}

        {/* PCの場合: 通常のナビゲーション */}
        {!isMobile && (
          <>
            <nav className="flex gap-6 ml-[5rem] text-lg">
              <Link href="#profile" className="header-link-style">
                Profile
              </Link>
              <Link href="#works" className="header-link-style">
                Works
              </Link>
              <Link href="#publications" className="header-link-style">
                Publications
              </Link>
            </nav>

            {/* 英語/日本語切り替えをLinkコンポーネントで実装 */}
            <div className="flex gap-2 ml-auto justify-end">
              <Link href="/" locale="en">
                English
              </Link>
              <span>/</span>
              <Link href="/" locale="ja">
                日本語
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
