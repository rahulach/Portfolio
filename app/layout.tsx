import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Acharya | Software Engineer",
  description:
    "Software Engineer with expertise in C++, Java, and Python. B.Tech Computer Science student at Lovely Professional University.",
  metadataBase: new URL("https://rahulacharya.com"),

  // Basic metadata
  applicationName: "Rahul Acharya Portfolio",
  authors: [{ name: "Rahul Acharya" }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Blockchain",
    "Web3",
    "Next.js",
    "React",
    "TypeScript",
    "Northeastern University",
    "MIT Bitcoin Expo",
  ],

  openGraph: {
    type: "website",
    url: "https://rahulacharya.com",
    title: "Rahul Acharya | Software Engineer",
    description:
      "Software Engineer with expertise in C++, Java, and Python. B.Tech Computer Science student at Lovely Professional University.",
    siteName: "Rahul Acharya",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Achyut Katiyar - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
