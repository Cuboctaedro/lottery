import type { CollectionConfig } from 'payload'

export const Gifts: CollectionConfig = {
  slug: 'gifts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'shop',
      type: 'text',
    },
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
    {
      name: 'ticket',
      type: 'relationship',
      relationTo: 'tickets',
      hasMany: false,
      unique: true,
    },
  ],
}
