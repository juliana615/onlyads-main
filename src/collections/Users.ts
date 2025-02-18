import { onlyAdmin } from '@/access/onlyAdmin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    verify: true,
  },
  fields: [
    {
      type: 'text',
      label: 'First Name',
      name: 'firstname',
      required: true,
    },
    {
      type: 'text',
      label: 'Last Name',
      name: 'lastname',
      required: true,
    },
    {
      type: 'select',
      name: 'role',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
    {
      type: 'select',
      name: 'plan',
      access: {
        update: onlyAdmin,
        read: () => true,
        create: onlyAdmin,
      },
      options: [
        {
          label: 'Enterpreneur',
          value: 'enterpreneur',
        },
        {
          label: 'Investor',
          value: 'investor',
        },
        {
          label: 'Business',
          value: 'business',
        },
      ],
    },
    {
      type: 'select',
      name: 'subscription',
      options: [
        {
          label: 'Monthly',
          value: 'monthly',
        },
        {
          label: 'Annually',
          value: 'annually',
        },
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
}
