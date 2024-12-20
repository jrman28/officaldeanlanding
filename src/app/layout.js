import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  shrinkToFit: 'no'
}

export const metadata = {
  title: 'The Dean At Maverick',
  description: 'Airbnb style landing page created by JustDesign',
  link: [ 
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'true' }, 
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tangerine:wght@700&family=Playfair+Display&display=swap' }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
