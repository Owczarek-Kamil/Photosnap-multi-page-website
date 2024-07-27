import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import NavigationController from "@/components/NavigationController";
import Footer from "@/components/Footer";

const fontDMSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Frontend Mentor | Photosnap multi-page website",
  description: "Solution for Photosnap multi-page website challenge on Frontend Mentor",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend Mentor"],
  authors: [{ name: "Kamil Owczarek" }],
  creator: "Kamil Owczarek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontDMSans.variable} flex min-h-screen min-w-80 flex-col font-main`}>
        <NavigationController />
        <main>
          <div className="mx-auto max-w-[90rem]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
