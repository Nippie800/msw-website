import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import CartDrawer from "@/components/CartDrawer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import {
  CurrencyProvider,
} from "@/context/CurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Made Somehow",
  description: "Premium fashion apparel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GA_ID}
          />
        )}

        <CurrencyProvider>

          <CartDrawer />

          {children}

        </CurrencyProvider>

      </body>
    </html>
  );
}