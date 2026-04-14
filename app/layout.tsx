import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Babu Honkhande | Portfolio",
  description: "Computer Science - AI & Machine Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-[#05050a] text-white selection:bg-blue-500/30 overflow-x-hidden`}>
        <AnimatedBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
