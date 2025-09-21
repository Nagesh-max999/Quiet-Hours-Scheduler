import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

export const createClient = async () => {
  // Await cookies() if needed
  const cookieStore = await cookies() // now cookieStore is ReadonlyRequestCookies
  const token = cookieStore.get('sb-access-token')?.value ?? '' // fallback to empty string

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`, // always a string
        },
      },
    }
  )
}
