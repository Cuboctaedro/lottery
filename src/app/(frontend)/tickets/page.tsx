import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { TicketsForm } from '@/components/tickets-form'
import { TicketsList } from '@/components/tickets-list'

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

  return (
    <main className="container mx-auto py-8">
      <div className="grid gap-8 grid-cols-2">
        <TicketsList tickets={result.docs} />
        <div>
          <TicketsForm />
        </div>
      </div>
    </main>
  )
}

export default TicketsPage
