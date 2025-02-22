import { cookies } from 'next/headers'

export const useAuth = async () => {
  let isUser = false

  const cookieStore = await cookies()

  const token = cookieStore.get('payload-token')

  if (token && token.value.length > 0) {
    isUser = true
  }

  return isUser
}
