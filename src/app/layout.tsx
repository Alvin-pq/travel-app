import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: "Travel MVP",
  description: "My Travel Itinerary",
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} font-sans bg-stone-50 text-stone-900 antialiased selection:bg-orange-200`}>
        {children}
      </body>
    </html>
  );
}
