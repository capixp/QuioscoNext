// ✅ Añade estas 2 líneas arriba del archivo
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { unstable_noStore as noStore } from "next/cache"; // ✅

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiosco",
  description: "Quiosco Next.js con App Router y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  noStore(); // ✅ evita cache del segmento

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
