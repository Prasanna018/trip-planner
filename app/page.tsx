"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-6">Welcome to Trip Planner</h1>
        <p className="text-xl mb-8">Plan your next adventure with ease</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild size="lg">
            <Link href="/planner">Start Planning</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 1,
        }}
      >
        <div className="w-10 h-10 bg-primary/50 rounded-lg" />
      </motion.div>
      <motion.div
        className="absolute top-10 right-10"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0.5,
        }}
      >
        <div className="w-10 h-10 bg-secondary/50 rounded-full" />
      </motion.div>
    </div>
  )
}

