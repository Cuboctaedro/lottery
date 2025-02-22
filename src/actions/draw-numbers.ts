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
    where: {
      drawn: {
        not_equals: true,
      },
    },
  })

  const ticketsData = await payload.find({
    collection: 'tickets',
    overrideAccess: true,
    depth: 1,
    limit: 10000,
    pagination: false,
  })

  if (Array.isArray(giftsData.docs) && Array.isArray(ticketsData.docs)) {
    const newTickets = ticketsData.docs.filter((d) => d.drawn !== true)

    const gifts = giftsData.docs

    const limit = newTickets.length < 50 ? newTickets.length : 50

    for (let i = 0; i < limit; i++) {
      try {
        const gift = gifts[i]
        const ticketIndex = Math.floor(Math.random() * newTickets.length)
        const luckyTicket = newTickets[ticketIndex]

        const updatedGift = await payload.update({
          collection: 'gifts',
          overrideAccess: true,
          id: gift.id,
          data: {
            ticket: luckyTicket.id,
            drawn: true,
          },
        })

        const updatedTicket = await payload.update({
          collection: 'tickets',
          overrideAccess: true,
          id: luckyTicket.id,
          data: {
            drawn: true,
          },
        })

        console.log(updatedGift)
        newTickets.splice(ticketIndex, 1)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
