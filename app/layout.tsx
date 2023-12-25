import type { Metadata } from 'next'
import { Inter, Roboto, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets: ['latin'], weight:'300'})
const montserrat = Montserrat({subsets: ['latin', 'cyrillic'], weight:['100', '300']})

export const metadata: Metadata = {
  title: 'Musa Abdullahi',
  description: "Embark on a journey through Musa Abdullahi's Next.js React Portfolio – a testament to web development excellence. Dive into an expansive showcase featuring a multitude of skills, including front-end and back-end proficiency, and innovative problem-solving. Explore a rich tapestry of projects, from responsive web applications to cutting-edge solutions. Musa's portfolio reflects a mastery of technologies like React, JavaScript, and more. Uncover a world of creativity, skill, and technical prowess at Musa Abdullahi's Portfolio – your gateway to inspired digital experiences.",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="../../public/assets/images/logo.jpg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
