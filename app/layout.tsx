import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/cart-provider'
import { LenisProvider } from '@/components/lenis-provider'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Geisler Karaoke — Paket & Peralatan Karaoke Profesional',
  description:
    'Geisler Karaoke menyediakan paket karaoke lengkap, microphone wireless, speaker, amplifier, mixer, dan solusi audio profesional untuk rumah dan bisnis di seluruh Indonesia.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LenisProvider>
          <CartProvider>{children}</CartProvider>
        </LenisProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
