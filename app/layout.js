import { Inter, Press_Start_2P } from "next/font/google";

import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import Header from "@/components/Header";
import Bg from '@/images/bg.png';



const inter = Inter({

  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const press_start = Press_Start_2P({
  subsets: ['latin'],
  variable: '--font-press-start-2p',
  display: 'swap',
  weight: '400'
})

export const metadata = {
  title: "SoftWhere",
  description: "Find software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${press_start.variable} font-inter antialiased min-h-screen h-full w-full relative bg-[#272320] px-4 sm:px-0 overflow-x-hidden `}>

        {/* Background image */}
        <div className="absolute inset-x-0 h-[700px] w-full ">
          <div className="bg-repeat-x w-screen h-full -z-10 opacity-10" style={{ backgroundImage: `url(${Bg.src})` }}></div>
        </div>
        {/* Background gradient */}
        <div className="absolute h-[700px] inset-x-0 w-full bg-gradient-to-t from-[#272320]" />


        <ToastProvider>
          <Header />
          {children}
        </ToastProvider>

      </body>
    </html>
  );
}
