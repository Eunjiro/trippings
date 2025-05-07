'use client'

import { useState } from 'react'
import { LogOut, Moon, UserCog } from 'lucide-react'

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Settings</h2>

      {/* Profile Section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Username</label>
        <input
          type="text"
          defaultValue="jiro_traveler"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />

        <label className="block text-sm font-medium mt-4">Email</label>
        <input
          type="email"
          defaultValue="jiro@example.com"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
      </div>

      {/* Preferences */}
      <div className="flex items-center justify-between border rounded-lg px-4 py-3">
        <div className="flex items-center gap-2">
          <Moon className="w-4 h-4 text-gray-500" />
          <span className="text-sm">Dark Mode</span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-10 h-5 rounded-full relative transition ${
            darkMode ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${
              darkMode ? 'translate-x-5' : ''
            }`}
          />
        </button>
      </div>

      {/* Actions */}
      <div className="pt-4 border-t">
        <button className="w-full flex items-center justify-center gap-2 text-red-500 text-sm font-medium py-2 hover:bg-red-50 rounded-md">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )
}
