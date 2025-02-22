import type { CollectionConfig } from 'payload'

export const Gifts: CollectionConfig = {
  slug: 'gifts',
  access: {
    create: ({ req: { user }, data }) => {
      return Boolean(user)
    },
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
    delete: ({ req: { user } }) => {
      return Boolean(user)
    },
    read: () => true,
  },

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
    {
      name: 'delivered',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'drawn',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
