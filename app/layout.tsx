// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Quiet Hours Scheduler',
  description: 'Create focused study time blocks and stay organized.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
