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
  title: "coderHQco",
  description: "your digital partner",
  authors: [{ name: "coderHQco Team", url: "https://coderhq.co/" }],
  creator: "coderHQco",
  publisher: "coderHQco",
  keywords: [
    "Web Development",
    "Software Engineering",
    "Digital Solutions",
    "AI developement",
    "application",
    "Services",
    "coderHQco",
  ],
  openGraph: {
    title: "coderHQco",
    description:
      "your digital partner for web development, digital solutions and AI developement and agent.",
    url: "https://coderhq.co",
    siteName: "coderHQco",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "coderHQco Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "coderHQco",
    description: "your digital partner for digital solutions.",
    site: "@coderhqco",
    creator: "@coderhqco",
    images: ["/vercel.svg"],
  },
  category: "technology",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
