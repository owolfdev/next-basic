import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/nav/site-header";
import Footer from "@/components/nav/footer";

import { ThemeProvider } from "@/components/theme-provider";

// import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="flex flex-col items-center justify-between py-24 sm:px-24 min-h-[calc(100vh-12rem)]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}
