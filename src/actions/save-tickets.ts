'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export const saveTickets = async (formData: FormData) => {
  const payload = await getPayload({ config })

  const ticketsArray: Array<number> = []

  const createdTickets = []

  const ticketsString = formData.get('tickets')
  console.log(ticketsString)

  if (ticketsString) {
    const cleared = ticketsString
      .toString()
      .trim()
      .replaceAll(/[^0-9,-]/g, '')
    console.log(cleared)

    const intervalsArray = cleared.split(',')
    for (let i = 0; i < intervalsArray.length; i++) {
      const interval = intervalsArray[i]
      const [startString, endString] = interval.split('-')
      const start = parseInt(startString)
      const end = parseInt(endString)
      if (start < end) {
        for (let j = start; j <= end; j++) {
          if (!ticketsArray.includes(j)) {
            ticketsArray.push(j)
          }
        }
      }
    }
  }
  for (let h = 0; h < ticketsArray.length; h++) {
    const number = ticketsArray[h]
    const ticket = await payload.create({
      collection: 'tickets',
      overrideAccess: false,
      data: {
        number: number,
      },
    })
    console.log(ticket)
    createdTickets.push(ticket.id)
  }

  return createdTickets
}
