import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { TicketsForm } from '@/components/tickets-form'
import { TicketsList } from '@/components/tickets-list'
import { headers as nextHeaders } from 'next/headers'

const TicketsPage = async () => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'tickets',
    depth: 0,
    page: 1,
    limit: 10000,
    pagination: false,
    sort: 'number',
  })

  const headers = await nextHeaders()
  const authResult = await payload.auth({ headers })

  return (
    <main className="container mx-auto py-8">
      <div className="grid gap-8 grid-cols-2">
        <TicketsList tickets={result.docs} />
        <div>{authResult.user && <TicketsForm />}</div>
      </div>
    </main>
  )
}

export default TicketsPage

export const dynamic = 'force-dynamic'
