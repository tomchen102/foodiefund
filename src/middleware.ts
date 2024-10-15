import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get("token");
  const token = tokenCookie ? tokenCookie.value : null;

  // 如果用戶已經登錄，並且嘗試訪問登錄或註冊頁面，則重定向到主頁
  if (
    token &&
    (req.nextUrl.pathname === "/login" ||
      req.nextUrl.pathname === "/register" ||
      req.nextUrl.pathname === "/payment-successful")
  ) {
    console.log("User already logged in, redirecting to home page");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 如果用戶未登錄，並且嘗試訪問受保護的路由，則重定向到登錄頁面
  if (!token && (req.nextUrl.pathname.startsWith("/test") || req.nextUrl.pathname === "/payment-successful")) {
    console.log("No token, redirecting to login page");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 將 token 添加到請求頭中，傳遞給後端
  if (token) {
    req.headers.set("Authorization", `Bearer ${token}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/test/:path*", "/login", "/register", "/payment-successful"], // 保護的路由和登錄頁面
};
