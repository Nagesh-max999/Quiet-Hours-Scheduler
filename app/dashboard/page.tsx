'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { StudySession, User } from '@/types'
import { Plus, Calendar, Clock, Bell, Settings } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [sessions, setSessions] = useState<StudySession[]>([])
  const [loading, setLoading] = useState(true)
  const [upcomingSessions, setUpcomingSessions] = useState<StudySession[]>([])

  useEffect(() => {
    const getUserAndSessions = async () => {
      const supabase = await createClient() // call async client here

      const { data: { user }, error } = await supabase.auth.getUser()
      if (error || !user) {
        setLoading(false)
        return
      }

      setUser(user as User)

      const { data } = await supabase
        .from('study_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('start_time', { ascending: true })

      if (data) {
        setSessions(data)
        const now = new Date()
        const upcoming = data
          .filter(session => new Date(session.start_time) > now && session.is_active)
          .slice(0, 3)
        setUpcomingSessions(upcoming)
      }

      setLoading(false)
    }

    getUserAndSessions()
  }, [])

  const formatDateTime = (dateTime: string) =>
    new Date(dateTime).toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Your existing JSX for nav, stats, upcoming sessions */}
    </div>
  )
}
