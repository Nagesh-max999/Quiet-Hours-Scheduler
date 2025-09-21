import { cookies } from 'next/headers'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export const createClient = async () => {
  const cookieStore = cookies() // still works in server components
  const token = cookieStore.get('sb-access-token')?.value

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      global: {
        fetch: fetch,
        headers: {
          Authorization: token ? `Bearer ${token}` : ''
        }
      }
    }
  )
}
