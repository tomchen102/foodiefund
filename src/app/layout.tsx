import React from "react";
import { LoadingProvider } from "@/utils/providers/LoadingContext";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import { AuthProvider } from "@/utils/providers/AuthProvider";
import { ProviderProps } from "@/types/ProviderType";
import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";
import { createMetadata } from "@/utils/metadata";
import { DialogProvider } from "@/utils/DialogContext";
import { Toaster } from "@/components/ui/toaster";
import { Noto_Sans_TC } from "next/font/google";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["500", "100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = createMetadata({
  images: {
    url: "https://storage.googleapis.com/fir-express-80358.appspot.com/images/48b107cd-e6c2-4337-9455-d3b93fa6c585.jpg?GoogleAccessId=firebase-adminsdk-42otj%40fir-express-80358.iam.gserviceaccount.com&Expires=16756675200&Signature=g7sjuCrnykNM2Zcvsh%2BouQDEjPCVwzzvcNHLTa%2BXw7K4dYK9HBpSQx3UaZ%2FWhdF8NMRANIMBxM%2FQXTKnNZZ8%2BkWUs1qGoZ0tFrOH6u6OD1YjxAxLtDFZZdNfEWPF10C6NzyxCD9lA7TfsL4mn8vUQ%2FHmQEcLV%2BJoxwJ3YgQ15szDCT%2FreKUO4VXTSRht9mdrGiM544r9Wn%2BEEHuFnExldqABB8TJ6KUPwKEe8Jlq8ss5EOoGHdF%2BuLWBv8oTVJAUa%2BQLdN8rYF8wbEhUlGc53CtO7ed8z4dghco9IXCMOjaWfJ1tejcpIaa9bi6zviAFvFY7mcilYLRWyY9QL4PwFw%3D%3D",
  },
});

const RootLayout = ({ children }: ProviderProps) => {
  return (
    <html lang="zh">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${notoSansTC.variable} ${notoSansTC.className} flex min-h-screen flex-col bg-[#FDFBF8] antialiased`}
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          <ReactQueryProvider>
            <LoadingProvider>
              <DialogProvider>
                <ScrollToTop />
                <Toaster />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </DialogProvider>
            </LoadingProvider>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
