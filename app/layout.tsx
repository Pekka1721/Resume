import { Metadata } from 'next'
import NavBar from '../components/NavBar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rajender Bellanagari',
  description: 'Frontend Developer',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}
          </body>
      </html>
    )
  }