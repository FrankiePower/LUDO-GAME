import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ludo Game App",
  description: "Built by Nomolos and Frankie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="absolute bg-customBg inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 backdrop-blur-md" />
        {/* This div applies the blur */}
        <div className="relative z-10 flex justify-center items-center h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
