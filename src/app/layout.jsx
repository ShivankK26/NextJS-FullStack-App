// All the code written in this file is applied to all the pages.

import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import ThemeProvider from '../context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuildBuddy',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
          <div className="container">
            <Navbar/>
            {children}
            <Footer/>
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
