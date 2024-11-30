import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get("token");
  const token = tokenCookie ? tokenCookie.value : null;

  const protectedRoutes = [/^\/projects\/\d+\/project-list\/payment$/, /^\/payment-successful$/, /^\/payment$/];

  const publicRoutes = [/^\/login$/, /^\/register$/, /^\/redirect$/, /^\/payment$/];

  // 如果用戶已經登錄，並且嘗試訪問登錄或註冊頁面，則重定向到主頁
  if (token && publicRoutes.some((route) => route.test(req.nextUrl.pathname))) {
    console.log("User already logged in, redirecting to home page");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 如果用戶未登錄，並且嘗試訪問受保護的路由，則重定向到登錄頁面
  if (!token && protectedRoutes.some((route) => route.test(req.nextUrl.pathname))) {
    console.log("No token, redirecting to login page");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/redirect", "/register", "/payment-successful", "/projects/:id/project-list/payment"], // 保護的路由和登錄頁面
};
