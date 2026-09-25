import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshad-kewate.github.io"),
  title: "Harshad Kewate — AI & ML Engineer | Portfolio",
  description:
    "Official portfolio of Harshad Kewate. AIML undergraduate at Bansal Institute of Science & Technology specializing in Machine Learning systems, atmospheric intelligence, and modern full-stack web applications.",
  keywords: [
    "Harshad Kewate",
    "AI & ML Engineer",
    "Machine Learning",
    "Atmospheric ML",
    "Monsoon Mitra",
    "PolyLingo AI",
    "KrishiCart",
    "Bhopal AIML Engineer",
    "TypeScript",
    "Next.js",
    "Python",
    "Scikit-Learn",
    "Bansal Institute of Science & Technology",
  ],
  authors: [{ name: "Harshad Kewate", url: "https://github.com/Harshad-kewate" }],
  creator: "Harshad Kewate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshad-kewate.github.io/Portfoliyo",
    title: "Harshad Kewate — AI & ML Engineer",
    description:
      "AI & ML Engineering undergraduate specializing in Machine Learning, atmospheric intelligence modeling, and scalable full-stack applications.",
    siteName: "Harshad Kewate Portfolio",
    images: [
      {
        url: "/harshad-photo.jpeg",
        width: 1200,
        height: 1600,
        alt: "Harshad Kewate - AI & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshad Kewate — AI & ML Engineer",
    description:
      "AI & ML Engineering undergraduate specializing in Machine Learning, atmospheric intelligence, and full-stack systems.",
    images: ["/harshad-photo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-navy-900 text-cream-100 antialiased selection:bg-vividOrange selection:text-white">
        {children}
      </body>
    </html>
  );
}
