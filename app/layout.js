// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import ClientHeader from "@/app/components/ClientHeader";
import Footer from "@/app/components/Footer";
import common from "@/public/en/common.json";
import ConditionalHeader from "@/app/components/ConditionalHeader";
import Script from "next/script";

// Next.js Metadata（app/layout.js または各ページに設定）
export const metadata = {
  verifications: {
    google: "fMH9Paa4GuwRywOfUUakZjPnBqE4Ngh7ky2qzbCFbV4",
  },
  title: "Kan Kusakabe | HCI Researcher - Hokkaido University",
  description:
    "Kan Kusakabe, PhD student at Hokkaido University specializing in mobile interaction, gesture recognition, 3D printing, and interactive interface design. Explore my projects and publications.",
  keywords: [
    "Kan Kusakabe",
    "HCI",
    "Human-Computer Interaction",
    "mobile interaction",
    "gesture recognition",
    "3D printing",
    "interactive design",
    "Hokkaido University",
  ],
  openGraph: {
    title: "Kan Kusakabe - Interactive Design and Gesture Recognition Research",
    description:
      "Explore innovative research by Kan Kusakabe on mobile interaction, user-centered gesture design, and bridging digital and physical experiences.",
    url: "https://kankusakabe.github.io/Portfolio",
    siteName: "Kan Kusakabe's Portfolio",
    images: [
      {
        url: "https://kankusakabe.github.io/Portfolio/image/KanKusakabe.png",
        width: 800,
        height: 600,
        alt: "Kan Kusakabe Portrait",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kan Kusakabe - HCI Researcher at Hokkaido University",
    description:
      "PhD research on mobile interaction, gesture recognition, and innovative interactive designs by Kan Kusakabe.",
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
    <html>
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}', {
      anonymize_ip: true,
      page_path: window.location.pathname
    });
  `}
      </Script>

      <body className={`antialiased`}>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <aside className=" bg-white">
              <ConditionalHeader />
            </aside>
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
