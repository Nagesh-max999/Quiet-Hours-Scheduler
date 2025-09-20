import Link from 'next/link'
import { Clock, Calendar, Bell, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center px-4 py-16">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-pulse">
          Welcome to Quick Hours Scheduler 🚀
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
          Plan focused study sessions, get notified 10 minutes before they start, 
          and stay on top of your productivity.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/auth/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Feature icon={<Clock className="w-12 h-12 text-indigo-600 mx-auto mb-2" />} title="Time Blocks" desc="Create custom study blocks that fit your schedule." />
        <Feature icon={<Bell className="w-12 h-12 text-indigo-600 mx-auto mb-2" />} title="Smart Notifications" desc="Get reminders 10 minutes before each session." />
        <Feature icon={<Calendar className="w-12 h-12 text-indigo-600 mx-auto mb-2" />} title="No Overlaps" desc="Intelligent scheduling prevents conflicts." />
        <Feature icon={<Shield className="w-12 h-12 text-indigo-600 mx-auto mb-2" />} title="Secure & Private" desc="Your data is protected with top-grade security." />
      </div>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: JSX.Element; title: string; desc: string }) {
  return (
    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  )
}
