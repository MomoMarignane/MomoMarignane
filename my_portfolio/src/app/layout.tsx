import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansour's Portfolio",
  description: "Discover my projects, skills, and experiences.",
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
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>
          <img src="/globe.svg" alt="Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
          <h1 style={{ fontWeight: 900, fontSize: '2rem', letterSpacing: 1 }}>Mansour's Portfolio</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
