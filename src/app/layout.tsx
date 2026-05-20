import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nexus AI — Intelligence That Works For You',
  description: 'The AI platform that automates workflows, predicts outcomes, and scales your team without scaling your headcount.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
