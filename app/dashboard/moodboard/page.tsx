'use client'

import { useState } from 'react'
import { Plus, Tag } from 'lucide-react'

export default function MoodPage() {
  const [moodImages] = useState([
    { id: 1, url: '/bali.jpg', tag: 'Beach' },
    { id: 2, url: '/switzerland.jpg', tag: 'Adventure' },
    { id: 3, url: '/tokyo.jpg', tag: 'City' },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Moodboard</h2>
        <button className="flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-50">
          <Plus className="w-4 h-4" />
          Add Photo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {moodImages.map((img) => (
          <div key={img.id} className="relative group rounded-lg overflow-hidden">
            <div
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${img.url})` }}
            />
            <div className="absolute bottom-0 w-full bg-black/50 text-white text-xs px-2 py-1 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {img.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
