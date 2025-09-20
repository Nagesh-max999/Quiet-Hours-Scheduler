import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Hours Scheduler',
  description: 'Easily schedule and manage your sessions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
