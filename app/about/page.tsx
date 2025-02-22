import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Trip Planner</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>Simplifying travel planning for everyone</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Trip Planner is designed to make your travel planning experience smooth and enjoyable. We believe that
            planning your trip should be as exciting as the journey itself.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

