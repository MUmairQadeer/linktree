import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BitTree Your favorite linktree",
  description: "We brougt a revolution in linktree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar/>
        {children }
      
      </body>
    </html>
  );
}
