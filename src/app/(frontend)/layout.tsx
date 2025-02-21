import React from 'react'
import './styles.css'
import { SpinnerContextProvider } from '@/components/spinner-context-provider'
import { HeroUIProvider } from '@heroui/system'
import { Loader } from '@/components/spinner'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
          <SpinnerContextProvider>
            <Loader />
            <main>{children}</main>
          </SpinnerContextProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
