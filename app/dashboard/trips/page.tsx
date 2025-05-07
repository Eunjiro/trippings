'use client'

import { useState } from 'react'
import { MapPin, CalendarPlus, Plus } from 'lucide-react'

export default function TripsPage() {
  const [trips] = useState([
    {
      id: 1,
      name: 'Summer in Bali',
      location: 'Bali, Indonesia',
      startDate: 'June 10',
      endDate: 'June 18, 2025',
      image: '/bali.jpg',
    },
    {
      id: 2,
      name: 'Winter Escape',
      location: 'Zermatt, Switzerland',
      startDate: 'Dec 20',
      endDate: 'Dec 27, 2025',
      image: '/switzerland.jpg',
    },
    {
      id: 3,
      name: 'Tokyo Adventures',
      location: 'Tokyo, Japan',
      startDate: 'April 15',
      endDate: 'April 25, 2025',
      image: '/tokyo.jpg',
    },
  ])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your Trips</h2>
        <button className="flex items-center gap-2 text-sm text-blue-600 border border-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-50">
          <Plus className="w-4 h-4" />
          New Trip
        </button>
      </div>

      {/* Trip Cards */}
      <div className="space-y-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div
              className="h-36 bg-cover bg-center"
              style={{ backgroundImage: `url(${trip.image})` }}
            />
            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-base">{trip.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {trip.location}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarPlus className="w-4 h-4 mr-1" />
                {trip.startDate} – {trip.endDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
