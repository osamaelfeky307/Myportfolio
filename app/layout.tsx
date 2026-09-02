import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Osama Elfeky — Software Engineer & Medical Informatics",
  description:
    "Personal portfolio of Osama Elfeky — BSc Computers & AI (Benha University). AI-powered healthcare software, full-stack web, and cross-platform mobile.",
  keywords: [
    "Osama Elfeky", "Software Engineer", "Medical Informatics",
    "AI", "Next.js", "Flutter", "Healthcare", "Egypt",
  ],
  authors: [{ name: "Osama Elfeky", url: "https://www.linkedin.com/in/osama-elfeky-952ab7202/" }],
  openGraph: {
    title: "Osama Elfeky — Software Engineer & Medical Informatics",
    description: "AI-powered healthcare diagnostics, scalable web apps, and cross-platform mobile development.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} ${playfair.variable} font-sans antialiased bg-bg text-fg`}>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
