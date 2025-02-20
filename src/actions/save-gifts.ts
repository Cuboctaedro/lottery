'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export const saveGifts = async (formData: FormData) => {
  const payload = await getPayload({ config })

  const giftslist = formData.get('giftslist')

  const giftsArray = giftslist?.toString().split(/\r?\n/)
  console.log(giftsArray)
  if (Array.isArray(giftsArray)) {
    for (let i = 0; i < giftsArray.length; i++) {
      const gift = giftsArray[i]
      const [number, title, shop] = gift.split(',')
      const newGift = await payload.create({
        collection: 'gifts',
        data: {
          number: parseInt(number),
          title: title,
          shop: shop,
        },
      })
      console.log(newGift)
    }
  }
}
