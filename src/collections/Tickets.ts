import type { CollectionConfig } from 'payload'

export const Tickets: CollectionConfig = {
  slug: 'tickets',
  fields: [
    {
      name: 'number',
      type: 'number',
      unique: true,
      index: true,
      min: 1,
      admin: {
        step: 1,
      },
    },
  ],
}
