import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { GiftsForm } from '@/components/gifts.form'
import { GiftsList } from '@/components/gifts-list'

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
          <GiftsList gifts={result.docs} />
        </div>
        <div>
          <GiftsForm />
        </div>
      </div>
    </main>
  )
}

export default TicketsPage
