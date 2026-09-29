import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liskelly Mendes | Psicóloga em Curitiba – Guabirotuba e Online',
  description: 'Psicoterapia com acolhimento, ética e escuta atenta com Liskelly Mendes, psicóloga clínica em Curitiba e online.',
  keywords: ['psicóloga em Curitiba', 'psicoterapia', 'Guabirotuba', 'terapia online'],
  openGraph: { title: 'Liskelly Mendes | Psicóloga', description: 'Um espaço seguro para você se escutar.', type: 'website', locale: 'pt_BR' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#2E3A87', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
