import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface SubvscribeToEventParams {
  name: string
  email: string
  referrerId?: string | null
}

export async function subscribeToEvent({
  name,
  email,
  referrerId,
}: SubvscribeToEventParams) {
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribers.length > 0) return { subscriberId: subscribers[0].id }

  const result = await db
    .insert(subscriptions)
    .values({ name, email })
    .returning()

  if (referrerId) {
    try {
      const response = await redis.zincrby('referral:ranking', 1, referrerId)
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      console.log(`referral:ranking recebeu o referrerId ${referrerId}`)
    }
  }

  const subscriber = result[0]

  return {
    subscriberId: subscriber.id,
  }
}
