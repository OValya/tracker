import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Challenge tracker',
  description: 'tracker for your activities',
}

export default function RootLayout({children}: {
  children: ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
      </html>
  )
}
