import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "iayvoblog | Personal Bolg",
  description:
    "Where i Post documentations about my learning journey, and also experiences that I encounter during the work",
};

export default function RootLayout({
  children, ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-gray-50 text-gray-950 relative dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#0a0a0a] absolute -z-10 top-[-32rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#474747] "></div>
        <NextThemesProvider
        attribute='class' 
        defaultTheme='system' 
        enableSystem {...props}
      >
        <div className="flex justify-center">
          <Header />
        </div>
        {children}
        <div className="flex justify-center">
          <Footer />
        </div>
      </NextThemesProvider>
      </body>
    </html>
  );
}