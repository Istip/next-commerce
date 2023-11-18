import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextCommerce",
  description: "NextJs 14 / Stripe / Sanity template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-stone-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
