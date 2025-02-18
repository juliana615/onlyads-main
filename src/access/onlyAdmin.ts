import { FieldAccess } from 'payload'

export const onlyAdmin: FieldAccess = ({ req }) => {
  const { user } = req

  return Boolean(user && user.role === 'admin')
}
