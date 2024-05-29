import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atanas | Full Stack Developer',
  description: 'Portfolio of Atanas Irikev, a Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' data-theme='dark'>
      <body className={inter.className}>
        <Container>
          <Navbar />
          <main>{children}</main>
        </Container>
      </body>
    </html>
  )
}
