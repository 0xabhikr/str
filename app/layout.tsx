import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import SnowfallEffect from "@/components/SnowfallEffect"; 


import "./globals.css";
import { Oxanium } from "next/font/google";

export const metadata = {
  title: "Abhikr's Notebook",
  icons: {
    icon: "https://raw.githubusercontent.com/abhikr2026/image_dumpping/main/favicon.png",
  },
};


const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oxanium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oxanium.variable} suppressHydrationWarning={false}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SnowfallEffect/>
        

          <main className="p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
