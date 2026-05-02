import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PageLoader>
          <Providers>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
        </PageLoader>
      </body>
    </html>
  );
}