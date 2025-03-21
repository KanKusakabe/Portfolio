import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./app/i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // パスに言語コードが含まれているかチェック
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 言語コードがない場合はデフォルト言語にリダイレクト
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
