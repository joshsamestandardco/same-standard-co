import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samestandard.co"),
  title: {
    default: "Same Standard Co. | One Bar. Everyone.",
    template: "%s | Same Standard Co.",
  },
  description:
    "Firefighter merch and training aids for rural volunteer firefighters. Volunteers and career firefighters share the same standard — the paycheck isn’t the qualification.",
  keywords: [
    "firefighter merch",
    "volunteer firefighter",
    "fire training aids",
    "drill cards",
    "weeknight training",
    "Same Standard Co",
  ],
  openGraph: {
    title: "Same Standard Co. | One Bar. Everyone.",
    description:
      "Merch and training aids built on one idea: same fire, same bar. No lower bar for volunteers.",
    type: "website",
    locale: "en_US",
    siteName: "Same Standard Co.",
    images: [{ url: "/brand/patch.png", width: 512, height: 512, alt: "Same Standard Co. patch" }],
  },
  twitter: {
    card: "summary",
    title: "Same Standard Co.",
    description: "The paycheck isn’t the qualification.",
    images: ["/brand/patch.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/brand/patch.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black text-bone">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
