import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Audrey GREFFE — Kinésiologue praticienne en Adaptogenèse',
  description:
    'Kinésiologie Adaptogenèse à Sainte Foy d\'Aigrefeuille. Pour soutenir votre équilibre. Ensemble, nous clarifions vos besoins, libérons votre énergie et rétablissons une harmonie durable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
