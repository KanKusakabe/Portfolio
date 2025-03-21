// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

export const metadata = {
  metadataBase: new URL("https://google.com"), // 追加
  title: {
    template: "%s | Your Name",
    default: "Your Name - Portfolio",
  },
  description:
    "Professional portfolio of Your Name, featuring research projects and publications",
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Professional portfolio of Your Name",
    url: "https://yourwebsite.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// フォント設定
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black dark:bg-white`}
        suppressHydrationWarning
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="flex flex-col min-h-screen">
            {/* <Header /> */}
            <main className="flex-1 mt-[3rem] sm:mt-[6rem]">{children}</main>
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
