// app/(dashboard)/layout.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Briefcase,
  PlusCircle,
  Palette,
  Settings
} from 'lucide-react'
import { cn } from '../lib/utils'
import { quicksand } from '@/ui/fonts'

const navItems = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/dashboard/trips', label: 'Trips', icon: Briefcase },
  { href: '/dashboard/create', label: '', icon: PlusCircle }, // floating center
  { href: '/dashboard/moodboard', label: 'Mood', icon: Palette },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Topbar */}
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-2">
      <h1 className={`${quicksand.className} text-3xl font-bold text-center py-2 text-sky-500`}>Trippings</h1>
      <button className="text-gray-500">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 7 8.97 7 11v3.159c0 .538-.214 1.055-.595 1.436L5 17h5m5 0a3 3 0 11-6 0m6 0H9"
        />
        </svg>
      </button>
    </header>

      {/* Main content */}
      <main className="flex-1 p-4 pb-24">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t shadow-md flex justify-around items-center h-16 z-20">
        {navItems.map(({ href, label, icon: Icon }, i) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex flex-col items-center text-xs text-gray-500',
              pathname === href && 'text-blue-600 font-semibold',
              i === 2 &&
                'bg-blue-600 text-white rounded-full p-3 w-12 h-12 -mt-8 shadow-lg flex items-center justify-center'
            )}
          >
            <Icon size={i === 2 ? 24 : 20} />
            {label && <span className="mt-1 text-[11px]">{label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
}
