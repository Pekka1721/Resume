import { Metadata } from 'next'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rajender Bellanagari',
  description: 'Frontend, User Interface UI Developer',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-black'>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
          </body>
      </html>
    )
  }