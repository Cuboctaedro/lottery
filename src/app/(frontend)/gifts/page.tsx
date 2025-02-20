import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { GiftsForm } from '@/components/gifts.form'

const TicketsPage = async () => {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'gifts',
    depth: 0,
    page: 1,
    limit: 10000,
    pagination: false,
    sort: '-number',
  })

  return (
    <main className="container mx-auto py-8">
      <div className="grid gap-8 grid-cols-2">
        <div>
          {result.docs.map((doc) => (
            <p key={doc.id}>{`${doc.number} - ${doc.title}`}</p>
          ))}
        </div>
        <div>
          <GiftsForm />
        </div>
      </div>
    </main>
  )
}

export default TicketsPage
