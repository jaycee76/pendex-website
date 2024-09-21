import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phendex Medical",
  openGraph: {
    type: 'website',
    url: 'https://www.phendexmedical.net/',
    siteName: 'Phendex Medical',
    title: 'Phendex Medical',
    description: 'Experience the Phendex Medical Trading Inc. difference today.',
    images: [
      {
        url: '/Phendex_Logo.PNG',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
