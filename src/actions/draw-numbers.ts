'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export const drawNumbers = async () => {
  const payload = await getPayload({ config })

  const giftsData = await payload.find({
    collection: 'gifts',
    overrideAccess: true,
    depth: 1,
    limit: 10000,
    pagination: false,
  })
  const ticketsData = await payload.find({
    collection: 'tickets',
    overrideAccess: true,
    depth: 1,
    limit: 10000,
    pagination: false,
  })

  if (Array.isArray(giftsData.docs) && Array.isArray(ticketsData.docs)) {
    const gifts = giftsData.docs
    const tickets = ticketsData.docs

    for (let i = 0; i < gifts.length; i++) {
      const gift = gifts[i]
      const ticketIndex = Math.floor(Math.random() * tickets.length)
      const luckyTicket = tickets[ticketIndex]

      const updatedGift = await payload.update({
        collection: 'gifts',
        overrideAccess: false,
        id: gift.id,
        data: {
          ticket: luckyTicket.id,
        },
      })

      console.log(updatedGift)
      tickets.splice(ticketIndex, 1)
    }
  }
}
