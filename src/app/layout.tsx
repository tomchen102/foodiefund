import React from "react";
import localFont from "next/font/local";
import { LoadingProvider } from "@/utils/providers/LoadingContext";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import HeaderMenu from "./_components/Header";
import FooterMenu from "./_components/Footer";
import { AuthProvider } from "@/utils/providers/AuthProvider";
import { ProviderProps } from "@/types/ProviderType";
import { Metadata } from "next";
import ScrollToTop from "@/components/scrollToTop";
import { createMetadata } from "@/utils/metadata";
import { DialogProvider } from "@/utils/DialogContext";

const GeistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const GeistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = createMetadata({
  images: {
    url: "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
  },
});

export default function RootLayout({ children }: ProviderProps) {
  return (
    <html lang="zh">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} flex min-h-screen flex-col bg-[#FDFBF8] antialiased`}
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          <ReactQueryProvider>
            <LoadingProvider>
              <DialogProvider>
                <ScrollToTop />
                <HeaderMenu />
                <main className="flex-1">{children}</main>
                <FooterMenu />
              </DialogProvider>
            </LoadingProvider>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
