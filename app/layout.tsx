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
  metadataBase: new URL("https://portfolio-osos7.vercel.app"),
  title: "Osama Othman — Software Engineer & Medical Informatics",
  description:
    "Personal portfolio of Osama Othman — BSc Computers & AI (Benha University). AI-powered healthcare software, full-stack web, and cross-platform mobile.",
  keywords: [
    "Osama Othman", "Osama Elfeky", "Software Engineer", "Medical Informatics",
    "AI", "Next.js", "Flutter", "Healthcare", "Egypt",
  ],
  authors: [{ name: "Osama Othman", url: "https://www.linkedin.com/in/osama-elfeky-952ab7202/" }],
  openGraph: {
    title: "Osama Othman — Software Engineer & Medical Informatics",
    description: "AI-powered healthcare diagnostics, scalable web apps, and cross-platform mobile development.",
    type: "website",
    images: [{ url: "/profile.jpg", width: 1200, height: 1500, alt: "Osama Othman" }],
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
