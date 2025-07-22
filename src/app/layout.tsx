import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Playfair_Display } from "next/font/google";
import { PT_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});


export const metadata: Metadata = {
  title: "ApertureFlow | Portfolio",
  description: "The professional portfolio of a passionate full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark !scroll-smooth ${playfairDisplay.variable} ${ptSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
