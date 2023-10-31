/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import StickyNavbar from "../app/Component/NavBar/Navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paperfold Sequential",
  description: "Transform your digital presence with expert IT and marketing services. Specialise in UI/UX, digital marketing, website and software development and mobile app creation. Elevate your business today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <StickyNavbar /> */}
      {/* Header/ Navbar */}
      <body className={inter.className}>{children}</body>
      {/* Footer */}
    </html>
  );
}
