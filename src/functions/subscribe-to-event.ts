import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'

interface SubvscribeToEventParams {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email,
}: SubvscribeToEventParams) {
  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  const { 
    id: subscriberId 
  } = result[0]
  
  return {
    subscriberId,
  }
}
