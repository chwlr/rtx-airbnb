import ClientOnly from './components/ClientOnly'
import Modal from './components/Modals/Modal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'RTX-Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <ClientOnly>
          <Modal />
          <Navbar />
        </ClientOnly> */}
        <Modal actionLabel='Submit' isOpen title='hello world' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
