import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VOLT FITNESS | Premium Fitness Club Chennai",
  description:
    "Train stronger, move better and become your best with expert coaching, premium equipment and personalized fitness programs at VOLT FITNESS — Chennai's premier training facility.",
  keywords: [
    "gym Chennai",
    "fitness club Chennai",
    "personal training Chennai",
    "strength training",
    "premium gym",
    "VOLT FITNESS",
    "muscle building",
    "weight loss gym",
    "elite fitness",
  ],
  openGraph: {
    title: "VOLT FITNESS | Premium Fitness Club Chennai",
    description:
      "Train stronger, move better and become your best. Expert coaching, premium equipment and personalized fitness programs at VOLT FITNESS.",
    url: "https://voltfitness.demo",
    siteName: "VOLT FITNESS",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "VOLT FITNESS — Premium Fitness Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VOLT FITNESS | Premium Fitness Club Chennai",
    description:
      "Train stronger, move better and become your best at VOLT FITNESS — Chennai's premier training facility.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#080909" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
