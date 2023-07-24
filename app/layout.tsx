import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Challenge challenge',
  description: 'challenge for your activities',
}

export default function RootLayout({children}: {
  children: ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
            <div className={'container'}>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </body>
      </html>
  )
}
