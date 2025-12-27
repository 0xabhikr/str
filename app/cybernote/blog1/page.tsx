"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import ISTClock from "@/components/ISTClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

export default function Blog1() {
  return (
    <div className="pt-[70px] left-4 right-4 space-y-6">
      <Alert className="backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] text-black dark:text-white">
        <AlertCircleIcon />
        <AlertDescription >
          This site is under development
        </AlertDescription>
      </Alert>
      <Card className="w-full bg-black/10 dark:bg-white/15 rounded-3xl backdrop-blur-3xl border border-black/20 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.25)] dark:shadow-[0_0_35px_rgba(255,255,255,0.22)] p-6 md:p-10 space-y-10 relative overflow-hidden text-black dark:text-white">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            How I Built My First Blog Website
          </h1>
          <div className="flex gap-2 text-sm opacity-80">
            <span>By Abhikr</span>
            <span>•</span>
            <span>Beginner Friendly</span>
          </div>
        </div>

        <Separator />

        {/* Intro */}
        <p className="leading-relaxed">
          This is my first time creating a blog website. I wanted a simple,
          clean place where I can write about what I learn in programming,
          cybersecurity, and personal projects.
        </p>

        {/* Why */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Why I Started a Blog</h2>
          <p className="leading-relaxed">
            Writing things down helps me understand topics better. Instead of
            keeping private notes, I decided to publish them as blog posts so
            other beginners can learn along with me.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">ShadCN UI</Badge>
          </div>
        </div>

        {/* Folder Structure */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Folder Structure</h2>
          <p>This is how I organized my blog:</p>

          <pre
            className="
            bg-black/20 dark:bg-white/10 
            rounded-xl 
            p-4 
            text-sm 
            overflow-x-auto
          "
          >
            {`app/
 └── cybernote/
     └── blog1/
         └── page.tsx`}
          </pre>
        </div>

        {/* Routing */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">How Routing Works</h2>
          <p className="leading-relaxed">
            In Next.js App Router, each folder automatically becomes a route. So
            when I created{" "}
            <code className="px-1 rounded bg-black/20">page.tsx</code>, my blog
            became available at:
          </p>

          <p className="text-sm opacity-80">
            <code>/cybernote/blog1</code>
          </p>
        </div>

        {/* Styling */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Styling with ShadCN UI</h2>
          <p className="leading-relaxed">
            I used ShadCN UI components like Card, Badge, and Separator. This
            keeps the UI consistent and saves time while still allowing full
            customization.
          </p>
        </div>

        {/* Lessons */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">What I Learned</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>How Next.js routing works</li>
            <li>How to structure blog pages</li>
            <li>Using reusable UI components</li>
            <li>Building a clean dark mode UI</li>
          </ul>
        </div>

        <Separator />

        {/* Ending */}
        <p className="opacity-80">
          This blog is still under development, but I’m glad I started. If
          you’re new to web development, don’t wait — just start building.
        </p>

        <p className="text-sm opacity-60">Thanks for reading 🚀</p>


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
  );
}
