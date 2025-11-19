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

export default function AboutPage() {
  return (
    <div className="pt-[70px] left-4 right-4 space-y-6">
      <Alert variant="destructive">

        <AlertCircleIcon />
        <AlertDescription >
          This site is under development
        </AlertDescription>
      </Alert>
      <Card className="p-4 left-4 right-4 space-y-6 font-oxanium normal backdrop-blur-md bg-white/10 border border-white/20 shadow-md rounded-xl">

        <Separator className="border-t-2 mt-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="">
              I'm Abhikr passionate about AI, open source, and lifelong learning.
              Exploring cybersecurity and language learning on the side.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 ">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><a href="/cv.pdf" target="_blank" className="hover:underline">Download CV</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="">Email: <a href="mailto:abhikr2026@proton.me" className="underline">abhikr2026@proton.me</a></p>
            <p className="">Telegram: <a href="https://t.me/AbhikrX" className="underline">AbhikrX</a></p>
            <div className="mt-2">
              <ISTClock></ISTClock>
            </div>
          </div>
        </div>
        <Separator className="border-t-2 mt-2" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs ">
          <p>&copy; {new Date().getFullYear()} Abhikr. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
            <a href="https://github.com/0xabhikr" target="_blank" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://t.me/AbhikrX" target="_blank" aria-label="Telegram"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://x.com/Abhikr_X" target="_blank" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="mailto:abhikr2026@proton.me" target="_blank" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </Card>
    </div>
  )
}
