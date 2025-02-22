import type { CollectionConfig } from 'payload'

export const Tickets: CollectionConfig = {
  slug: 'tickets',
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
