import React from 'react'
import './styles.css'
import { SpinnerContextProvider } from '@/components/spinner-context-provider'
import { HeroUIProvider } from '@heroui/system'
import { Loader } from '@/components/spinner'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import Link from 'next/link'
import { cookies } from 'next/headers'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Party Lottery - 36 School',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  let isUser = false

  const cookieStore = await cookies()

  const token = cookieStore.get('payload-token')

  if (token && token.value.length > 0) {
    isUser = true
  }

  return (
    <html lang="en">
      <body>
        <HeroUIProvider>
          <SpinnerContextProvider>
            <Loader />
            <div>
              {isUser && (
                <Navbar position="static">
                  <NavbarBrand>
                    <p className="font-bold text-inherit">
                      <Link href="/">36 - Lottery</Link>
                    </p>
                  </NavbarBrand>
                  <NavbarContent justify="end">
                    <NavbarItem className="flex">
                      <Link href="/gifts">Presents</Link>
                    </NavbarItem>
                    <NavbarItem className="flex">
                      <Link href="/tickets">Tickets</Link>
                    </NavbarItem>
                  </NavbarContent>
                </Navbar>
              )}
              <div className="py-8 container mx-auto max-w-[1024px]">{children}</div>
            </div>
          </SpinnerContextProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}
