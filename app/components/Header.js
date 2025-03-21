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
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl px-4 py-3 border rounded-md bg-white"
          >
            ☰
          </button>
        )}

        {/* PCの場合: 通常のナビゲーション */}
        {!isMobile && (
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-[2rem] lg:gap-[5rem] lg:mt-[2rem] ">
            <div className="relative w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem]">
              <Image
                // src="/image/KanKusakabe.png"
                src={`${BASE_PATH}/image/KanKusakabe.png`}
                fill
                alt="my face image"
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-lg lg:text-2xl font-semibold mt-[1rem]">
                <a href={`${BASE_PATH}${common.path}`}>{common.name}</a>
              </h1>
              <p className="text-sm lg:text-lg">{common.affiliation}</p>
            </div>

            <nav className="lg:gap-[2.3rem] flex flex-row lg:flex-col">
              <a
                href={`${BASE_PATH}${common.path}#profile`}
                className="header-link-style"
              >
                {common.home_title}
              </a>
              <a
                href={`${BASE_PATH}${common.path}#works`}
                className="header-link-style"
              >
                {common.project_title}
              </a>
              <a
                href={`${BASE_PATH}${common.path}#publications`}
                className="header-link-style"
              >
                {common.publication_title}
              </a>
            </nav>

            {/* SNS & Email Links */}
            <div className="hidden lg:flex flex-row gap-[0.5rem]">
              <Link href={contact.xacount}>
                <Image
                  src={`${BASE_PATH}/image/icon/X2.svg`}
                  alt="X"
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
        <nav className="flex flex-col gap-4 mt-1 p-4 border-t items-start">
          {/* 折りたたまれる名前と所属 */}
          <div className="mb-2 gap-3 flex flex-col items-start">
            <Image
              src={`${BASE_PATH}/image/KanKusakabe.png`}
              width={130}
              height={130}
              alt="my face image"
              className="rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-semibold">
                <a
                  href={`${BASE_PATH}${common.path}`}
                  onClick={() => setIsOpen(false)}
                >
                  {common.name}
                </a>
              </h1>
              <p className="text-sm">
                <a
                  href={`${BASE_PATH}${common.path}`}
                  onClick={() => setIsOpen(false)}
                >
                  {common.affiliation}
                </a>
              </p>
            </div>
          </div>
          <a
            // href="#profile"
            href={`${BASE_PATH}${common.path}#profile`}
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {common.home_title}
          </a>
          <a
            // href="#works"
            href={`${BASE_PATH}${common.path}#works`}
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {common.project_title}
          </a>
          <a
            href={`${BASE_PATH}${common.path}#publications`}
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            {common.publication_title}
          </a>
          <div className="flex gap-[0.5rem] justify-start">
            <a href={`${BASE_PATH}`} onClick={() => setIsOpen(false)}>
              en
            </a>
            <span>/</span>
            <a href={`${BASE_PATH}ja`} onClick={() => setIsOpen(false)}>
              ja
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
