import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav'
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISB: Insurance Broker",
  description: "Insurance Broker Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
