/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import StickyNavbar from "../app/Component/NavBar/Navbar"
import Footer from "./Component/HomePageComponent/Footer/Footer";




export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable:'--inter'

})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "Paperfold Sequential",
  description: "Transform your digital presence with expert IT and marketing services. Specialise in UI/UX, digital marketing, website and software development and mobile app creation. Elevate your business today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <StickyNavbar /> */}
      {/* Header/ Navbar */}
      <body className={inter.variable
      }>{children}</body>

    </html>
  );
}
