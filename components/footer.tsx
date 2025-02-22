import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center h-14">
        <p className="text-center text-sm leading-loose">
          Made with love by Prasanna Gaikwad <Heart className="inline-block w-4 h-4 mx-1 text-red-500" />
        </p>
      </div>
    </footer>
  )
}

