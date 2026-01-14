'use client'

import ISTClock from "@/components/ISTClock"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, Tag, AlertCircleIcon } from 'lucide-react';
import { faGithub, faLinkedin, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {

  const posts = [
    {
      title: "Akami Bypass Tool",
      desc: "Akamai security filters can be bypassed using controlled XSS payload execution.",
      image: "https://zm3wlxe8zvibbtdu.public.blob.vercel-storage.com/misc/exp.jpg",
      link: "/cybernote/blog1",
    },
    {
      title: "Cyber Note Exploit",
      desc: "Learn advanced techniques to secure or bypass security filters safely.",
      image: "https://zm3wlxe8zvibbtdu.public.blob.vercel-storage.com/misc/exp.jpg",
      link: "/cybernote/blog2",
    },
  ];

  return (
    <div className="pt-[70px] left-4 right-4 space-y-6">
      <Alert className="backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] text-black dark:text-white">
        <AlertCircleIcon />
        <AlertDescription>
          This site is under development
        </AlertDescription>
      </Alert>

      <Card className="w-full bg-black/10 dark:bg-white/15 rounded-3xl backdrop-blur-3xl border border-black/20 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.25)] dark:shadow-[0_0_35px_rgba(255,255,255,0.22)] p-6 md:p-10 space-y-10 relative overflow-hidden text-black dark:text-white">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start p-3 rounded-2xl bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 gap-4 overflow-hidden
                ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>

              <a
                href={post.link}
                className="relative w-full md:w-[500px] h-[150px] flex-shrink-0 overflow-hidden rounded-xl"
                style={{
                  clipPath: index % 2 !== 0
                    ? "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>

              <div className={`flex-1 flex flex-col justify-between gap-2 ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                <div className="flex items-center justify-between">
                  <a href={post.link}>
                    <h3 className="text-lg font-semibold flex items-center gap-1">
                      {post.title}
                      <Tag size={16} className="shrink-0" />
                    </h3>
                  </a>

                  <a href={post.link}>
                    <button className="rounded-full px-3 py-2 backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 text-black dark:text-white">
                      <div className="flex items-center gap-1">
                        Visit <ArrowUpRight />
                      </div>
                    </button>
                  </a>
                </div>

                <p className="opacity-80 text-sm">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="border-t-2 mt-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p>
              I'm Abhikr passionate about AI, open source, and lifelong learning.
              Exploring cybersecurity and language learning on the side.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><a href="/cv.pdf" target="_blank" className="hover:underline">Download CV</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Email: <a href="mailto:abhikr6714@outlook.com" className="underline">abhikr6714@outlook.com</a></p>
            <p>Telegram: <a href="https://t.me/AbhikrX" className="underline">AbhikrX</a></p>
            <div className="mt-2">
              <ISTClock />
            </div>
          </div>
        </div>

        <Separator className="border-t-2 mt-2" />
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Abhikr. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-lg">
            <a href="https://github.com/0xabhikr" target="_blank" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://t.me/AbhikrX" target="_blank" aria-label="Telegram"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://x.com/Abhikr_X" target="_blank" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="mailto:abhikr6714@outlook.com" target="_blank" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>

      </Card>
    </div>
  )
}
