'use server'

import { User } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const registerUser = async (
  data: Pick<User, 'firstname' | 'lastname' | 'email' | 'password'>,
) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    await payload.create({
      collection: 'users',
      data: data,
    })

    return
  } catch (err) {
    throw new Error('Failed to create user')
  }
}

export const login = async (data: { email: string; password: string }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    console.log(data)

    const response = await payload.login({
      collection: 'users',
      data: {
        email: data.email,
        password: data.password,
      },
    })

    return response.user
  } catch (err) {
    throw new Error('Failed to login')
  }
}
