import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./parent-trust.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustBridge — The Parent Trust Hospitality Solution",
  description:
    "A managed hospitality ecosystem that guarantees parental trust. Increase youth program bookings by eliminating the #1 reason parents say no.",
  keywords: [
    "Parent Trust",
    "Youth Travel",
    "Hospitality Management",
    "NGO",
    "Youth Programs",
    "Volunteer Travel",
    "Student Exchange",
    "TrustBridge",
  ],
};

export default function ParentTrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          background: "#09090b",
          color: "#fafafa",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
