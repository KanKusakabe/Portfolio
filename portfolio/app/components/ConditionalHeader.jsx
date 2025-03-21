// app/components/ConditionalHeader.jsx
"use client";
import { usePathname } from "next/navigation";
import ClientHeader from "./ClientHeader";
// import commonData from "@/public/common.json";
import commonJa from "@/public/ja/common.json";
import commonEn from "@/public/en/common.json";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isJapanese = pathname.startsWith("/ja");
  const common = isJapanese ? commonJa : commonEn;
  return <ClientHeader common={common} />;
}
