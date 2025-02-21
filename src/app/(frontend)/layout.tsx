import React from 'react'
import './styles.css'
import { SpinnerContextProvider } from '@/components/spinner-context-provider'
import { HeroUIProvider } from '@heroui/system'
import { Loader } from '@/components/spinner'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import Link from 'next/link'

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
            <div>
              <Navbar position="static">
                <NavbarBrand>
                  <p className="font-bold text-inherit">
                    <Link href="/">36 - Lottery</Link>
                  </p>
                </NavbarBrand>
                <NavbarContent justify="end">
                  <NavbarItem className="flex">
                    <Link href="/admin">Login</Link>
                  </NavbarItem>
                  <NavbarItem className="flex">
                    <Link href="/gifts">Presents</Link>
                  </NavbarItem>
                  <NavbarItem className="flex">
                    <Link href="/tickets">Tickets</Link>
                  </NavbarItem>
                </NavbarContent>
              </Navbar>
              <div className="py-8 container mx-auto max-w-[1024px]">{children}</div>
            </div>
          </SpinnerContextProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
