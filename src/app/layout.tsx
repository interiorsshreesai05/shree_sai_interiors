import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shree Sai Interiors | Luxury Interior Design",
  description:
    "Shree Sai Interiors is a premium interior design studio crafting calm, immersive luxury spaces.",
  metadataBase: new URL("https://shreesaiinteriors.in"),
  themeColor: "#0B0B0B",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Correct way: Only include the token value inside the quotes
  verification: {
    google: "Q-_oLWpPK7Z2WcnvSBeJAcjjEkuPqA7lr6CjqmrIJPc", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}