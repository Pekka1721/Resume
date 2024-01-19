import { Metadata } from 'next'
import NavBar from '../components/NavBar'
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
        <body className='bg-gray-200'>
          <NavBar></NavBar>
          {children}
          </body>
      </html>
    )
  }