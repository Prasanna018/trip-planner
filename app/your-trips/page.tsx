"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Trip {
  id: string
  destination: string
  startDate: string
  endDate: string
}

export default function YourTrips() {
  const [trips, setTrips] = useState<Trip[]>([])

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips") || "[]")
    setTrips(savedTrips)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Trips</h1>
      {trips.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <Card key={trip.id}>
              <CardHeader>
                <CardTitle>{trip.destination}</CardTitle>
                <CardDescription>
                  {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Trip details go here...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Trips Found</CardTitle>
            <CardDescription>Start planning to see your trips here!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Head over to the Planner to create your first trip.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

