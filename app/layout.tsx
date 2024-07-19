import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, ThemeSwitch } from "@/components";
import { ActiveSectionContextProvider } from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import { DarkThemeContextProvider } from "@/context/dark-theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Sunsara | Personal Portfolio",
  description: "Prince Sunsara is a full stack web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#676394]"></div>
        <DarkThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>

          <ThemeSwitch />
        </DarkThemeContextProvider>
      </body>
    </html>
  );
}
