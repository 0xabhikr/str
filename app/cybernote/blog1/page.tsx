'use client'

import ISTClock from "@/components/ISTClock"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { faGithub, faLinkedin, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AlertCircleIcon } from "lucide-react"
import Link from "next/link";

export default function Blog1Page() {
  return (
    <div className="pt-[70px] left-4 right-4 space-y-6">
      <Alert className="backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] text-black dark:text-white">

        <AlertCircleIcon />
        <AlertDescription >
          This site is under development
        </AlertDescription>
      </Alert>
      <Card className="w-full bg-black/10 dark:bg-white/15 rounded-3xl backdrop-blur-3xl border border-black/20 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.25)] dark:shadow-[0_0_35px_rgba(255,255,255,0.22)] p-6 md:p-10 space-y-10 relative overflow-hidden text-black dark:text-white">

      </Card>
    </div>
  )
}
