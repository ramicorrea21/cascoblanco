import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casco Blanco Materiales",
  description: "Tu proxima casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <SpeedInsights />
        <Analytics/>
        <Footer/>
        </body>
    </html>
  );
}
