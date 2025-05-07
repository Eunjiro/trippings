// app/(dashboard)/page.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Calendar, Plus, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

export default function DashboardPage() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return <div>Loading...</div>
  if (!user) return <div>Please sign in.</div>
  
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h2 className="text-lg font-semibold">Welcome back, Explorer 🌍</h2>
        <p className="text-sm text-muted-foreground">Plan your next adventure with ease.</p>
      </div>

      {/* Current Trip Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-700 text-base">Current Trip</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm font-medium">📍 Tokyo, Japan</div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-2 h-4 w-4" />
            April 15 – April 25, 2025
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="mr-2 h-4 w-4" />
            4 destinations
          </div>
          <Button variant="outline" className="mt-4 w-full text-blue-700 border-blue-300">
            View Itinerary
          </Button>
        </CardContent>
      </Card>

      {/* Moodboard Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex justify-between items-center">
            Your Moodboard
            <Button variant="ghost" className="text-sm text-blue-600 px-2 py-1">View All</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2">
            <Image
              src="/bali.jpg"
              alt="Moodboard 1"
              width={150} // Specify width
              height={150} // Specify height
              className="aspect-square rounded-lg object-cover"
            />
            <Image
              src="/switzerland.jpg"
              alt="Moodboard 2"
              width={150}
              height={150}
              className="aspect-square rounded-lg object-cover"
            />
            <Image
              src="/tokyo.jpg"
              alt="Moodboard 3"
              width={150}
              height={150}
              className="aspect-square rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="w-full bg-blue-600 text-white">
          <Plus className="mr-2 h-4 w-4" /> New Trip
        </Button>
        <Button variant="outline" className="w-full">
          <ImageIcon className="mr-2 h-4 w-4" /> Add Photo
        </Button>
      </div>
    </div>
  )
}
