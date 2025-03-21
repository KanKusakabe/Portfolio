// app/components/ClientHeader.jsx
"use client";
import dynamic from "next/dynamic";

// クライアント側でのみ Header をレンダリング（SSR を無効化）
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function ClientHeader(props) {
  return <Header {...props} />;
}
