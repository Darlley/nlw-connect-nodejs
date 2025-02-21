import { eq } from 'drizzle-orm'
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
  const subscibers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscibers.length > 0) {
    return {
      subscriberId: subscibers[0].id,
    }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  const { id: subscriberId } = result[0]

  return {
    subscriberId,
  }
}
