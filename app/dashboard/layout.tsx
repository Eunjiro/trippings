// app/(dashboard)/layout.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Briefcase,
  PlusCircle,
  Palette,
  Bell
} from 'lucide-react'
import { cn } from '../lib/utils'
import { quicksand } from '@/ui/fonts'
import { UserButton } from '@clerk/nextjs'

const navItems = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/dashboard/trips', label: 'Trips', icon: Briefcase },
  { href: '/dashboard/create', label: '', icon: PlusCircle }, // floating center
  { href: '/dashboard/moodboard', label: 'Mood', icon: Palette },
  { href: '/dashboard/notifications', label: 'Notif', icon: Bell }, // replaced with Notifications
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Topbar */}
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-2">
      <h1 className={`${quicksand.className} text-3xl font-bold text-center py-2 text-sky-500`}>Trippings</h1>
      <UserButton afterSignOutUrl="/" />
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
