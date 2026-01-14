'use client'

import ISTClock from "@/components/ISTClock";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { faGithub, faTelegram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";

const projects = [
    {
    title: "Personal Portfolio",
    description: "My personal website showcasing projects and blogs.",
    tech: "Next.js · Tailwind · Vercel",
    link: "https://github.com/0xabhikr",
    image: "https://zm3wlxe8zvibbtdu.public.blob.vercel-storage.com/misc/tst1.jpg",
  },
  
];


export default function ProjectsPage() {
  return (
    <div className="pt-[70px] left-4 right-4 space-y-6">
      <Alert className="backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] text-black dark:text-white">
        <AlertCircleIcon />
        <AlertDescription>
          This site is under development
        </AlertDescription>
      </Alert>
      <Card className="w-full bg-black/10 dark:bg-white/15 rounded-3xl backdrop-blur-3xl border border-black/20 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.25)] dark:shadow-[0_0_35px_rgba(255,255,255,0.22)] p-6 md:p-10 space-y-10 relative overflow-hidden text-black dark:text-white">
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-6 text-black dark:text-white">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className="group aspect-square rounded-xl bg-black/10 dark:bg-white/15 backdrop-blur-2xl border border-black/20 dark:border-white/30 shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.2)] p-3 text-black dark:text-white flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
              >
                <div className="mb-4  overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={350}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-80">
                    {project.description}
                  </p>
                </div>

                <div className="text-xs opacity-70 mt-3">
                  {project.tech}
                </div>
              </a>
            ))}
          </div>
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
            <a href="https://github.com/0xabhikr" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://t.me/AbhikrX" target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://www.linkedin.com/in/0xabhikr" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://x.com/Abhikr_X" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="mailto:abhikr6714@outlook.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </Card>
    </div>
  );
}
