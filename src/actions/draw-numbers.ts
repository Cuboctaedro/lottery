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
    const newTickets = ticketsData.docs.filter((d) => d.present?.docs?.length === 0)

    const firstTickets = newTickets.slice(0, 50)

    const gifts = giftsData.docs
    const tickets = firstTickets

    for (let i = 0; i < gifts.length; i++) {
      const gift = gifts[i]
      const ticketIndex = Math.floor(Math.random() * tickets.length)
      const luckyTicket = tickets[ticketIndex]

      const updatedGift = await payload.update({
        collection: 'gifts',
        overrideAccess: true,
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
