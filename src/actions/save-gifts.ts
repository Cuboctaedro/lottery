'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export const saveGifts = async (formData: FormData) => {
  const payload = await getPayload({ config })

  const giftslist = formData.get('giftslist')

  const newGifts = []

  const giftsArray = giftslist?.toString().split(/\r?\n/)
  if (Array.isArray(giftsArray)) {
    for (let i = 0; i < giftsArray.length; i++) {
      const gift = giftsArray[i]
      const [number, title, shop] = gift.split(',')
      const newGift = await payload.create({
        collection: 'gifts',
        overrideAccess: false,
        data: {
          number: parseInt(number.trim()),
          title: title.trim(),
          shop: shop.trim(),
          delivered: false,
        },
      })
      console.log(newGift)
      newGifts.push(newGift)
    }
  }
  return newGifts
}
