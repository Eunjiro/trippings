'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center animate__animated animate__fadeInUp animate__faster">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-15 space-y-4 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold text-center">Login to Your Account</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Login
          </button>
        </div>

        <p className="text-xs text-center text-gray-500">
          Don’t have an account? <span className="text-blue-600 underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  )
}
