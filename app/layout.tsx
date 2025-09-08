import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Oxanium } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Home | Abhikr", 
  description: "",
  icons: {
    icon: "https://res.cloudinary.com/dgu3gae6k/image/upload/v1757079662/abhikrh_100x100_ptkhvg.png",
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
    <html lang="en" className={oxanium.variable} suppressHydrationWarning>
      {/* <head /> is NOT needed here – Next.js manages the head from `metadata` */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
