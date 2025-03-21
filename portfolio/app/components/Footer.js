// app/components/Footer.js
"use client";
// app/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        {/* レスポンシブ：モバイルでは縦並び、md以上では横並び */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* サイトロゴ／名前／紹介文 */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">
              <Link href="/">PhD Portfolio</Link>
            </h2>
            <p className="text-sm text-gray-600">PhD Student | Researcher</p>
          </div>

          {/* ナビゲーションリンク */}
          <div className="mb-4">
            <nav>
              <ul className="flex flex-col md:flex-row space-x-[1.5rem] pl-[1.5rem]">
                <li>
                  <Link href="#profile">
                    <p className="text-gray-700 hover:text-gray-900">ホーム</p>
                  </Link>
                </li>
                <li>
                  <Link href="#works">
                    <p className="text-gray-700 hover:text-gray-900">研究</p>
                  </Link>
                </li>
                <li>
                  <Link href="#publications">
                    <p className="text-gray-700 hover:text-gray-900">実績</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* ソーシャルメディアアイコン & メールアドレス */}
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Twitter Icon */}
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.56-2.005.966-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.917 2.201-4.917 4.917 0 .39.045.765.127 1.124-4.083-.205-7.699-2.159-10.126-5.134-.422.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.416-1.68 1.319-3.808 2.105-6.102 2.105-.396 0-.787-.023-1.17-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.637.961-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Facebook Icon */}
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116c.725 0 1.325-.6 1.325-1.337V1.337C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Instagram Icon */}
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.41.403a4.92 4.92 0 011.752 1.03 4.92 4.92 0 011.03 1.752c.163.45.349 1.24.403 2.41.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.41a4.92 4.92 0 01-1.03 1.752 4.92 4.92 0 01-1.752 1.03c-.45.163-1.24.349-2.41.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.41-.403a4.92 4.92 0 01-1.752-1.03 4.92 4.92 0 01-1.03-1.752c-.163-.45-.349-1.24-.403-2.41C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.41A4.92 4.92 0 013.746 3.04a4.92 4.92 0 011.752-1.03c.45-.163 1.24-.349 2.41-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.771.128 4.833.312 4.042.603a7.07 7.07 0 00-2.566 1.662A7.07 7.07 0 00.603 4.042C.312 4.833.128 5.771.07 7.052.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.281.242 2.219.533 3.01a7.07 7.07 0 001.662 2.566 7.07 7.07 0 002.566 1.662c.791.291 1.729.475 3.01.533 1.28.058 1.684.07 4.948.07s3.668-.012 4.948-.07c1.281-.058 2.219-.242 3.01-.533a7.07 7.07 0 002.566-1.662 7.07 7.07 0 001.662-2.566c.291-.791.475-1.729.533-3.01.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.281-.242-2.219-.533-3.01a7.07 7.07 0 00-1.662-2.566A7.07 7.07 0 0019.958.603c-.791-.291-1.729-.475-3.01-.533C15.668.012 15.264 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-gray-700 mt-2">
              <a href="mailto:phd@example.com">phd@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
