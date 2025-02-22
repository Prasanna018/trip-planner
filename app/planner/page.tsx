"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/ui/date-picker"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

interface Trip {
  id: string
  destination: string
  startDate: Date
  endDate: Date
}

export default function Planner() {
  const [destination, setDestination] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (destination && startDate && endDate) {
      const newTrip: Trip = {
        id: Date.now().toString(),
        destination,
        startDate,
        endDate,
      }
      const existingTrips = JSON.parse(localStorage.getItem("trips") || "[]")
      localStorage.setItem("trips", JSON.stringify([...existingTrips, newTrip]))
      setDestination("")
      setStartDate(undefined)
      setEndDate(undefined)
      toast({
        title: "Trip Saved",
        description: `Your trip to ${destination} has been saved.`,
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Plan Your Trip
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>Enter the details for your upcoming trip</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="Enter your destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="startDate">Start Date</Label>
                  <DatePicker id="startDate" selected={startDate} onSelect={setStartDate} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="endDate">End Date</Label>
                  <DatePicker id="endDate" selected={endDate} onSelect={setEndDate} />
                </div>
              </div>
              <CardFooter className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => {
                    setDestination("")
                    setStartDate(undefined)
                    setEndDate(undefined)
                  }}
                >
                  Clear
                </Button>
                <Button type="submit">Save Trip</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

