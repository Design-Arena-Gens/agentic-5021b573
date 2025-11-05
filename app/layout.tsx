import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lora } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-5021b573.vercel.app"),
  title: "Toduu ? Digital Haiku",
  description:
    "Zen-like simplicity, quality, and focus. Explore the Toduu design system.",
  openGraph: {
    title: "Toduu ? Digital Haiku",
    description:
      "Zen-like simplicity, quality, and focus. Explore the Toduu design system.",
    url: "https://agentic-5021b573.vercel.app",
    siteName: "Toduu",
    images: [],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
