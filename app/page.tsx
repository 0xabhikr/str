"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AlertCircleIcon } from 'lucide-react';
import ISTClock from '../components/ISTClock';
import { Menubar, MenubarMenu } from '@/components/ui/menubar';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="pt-[70px] pb-10 space-y-6 w-full px-0 text-black dark:text-white">
      <Alert className="backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] text-black dark:text-white">
        <AlertCircleIcon className="mr-2" />
        <AlertDescription>This site is under development</AlertDescription></Alert>

      <div className="w-full bg-black/10 dark:bg-white/15 rounded-3xl backdrop-blur-3xl border border-black/20 dark:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.25)] dark:shadow-[0_0_35px_rgba(255,255,255,0.22)] p-6 md:p-10 space-y-10 relative overflow-hidden text-black dark:text-white">
        <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-black/20 via-black/5 to-transparent dark:from-white/30 dark:via-white/5 dark:to-transparent opacity-40"></div>
        <h2 className="text-4xl font-semibold relative z-10">Hi, Winter is Out.....</h2>

        <Separator className="border-black/20 dark:border-white/30 relative z-10 border-t-2 mt-[-10]" />

        <div className="flex flex-col md:flex-row gap-10 relative z-10 mt-[-20]">
          <div className="w-full md:w-1/2 space-y-4">
            <em className="text-sm opacity-70">“I would rather die for flowers than live for bread.”</em>

            <div className="rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.55)] ml-[-10] mr-[-10]">
              <Image src="https://zm3wlxe8zvibbtdu.public.blob.vercel-storage.com/winter/8116642.jpg" alt="Showcase" width={800} height={450} className="object-cover w-full h-[350px]" /></div></div>

          <div className="w-full md:w-1/2 mt-[-10]">
            <h3 className="text-2xl font-semibold mb-2">About Me</h3>

            <Separator className="border-black/20 dark:border-white/30 mb-4 border-t-2" />

            <ul className="list-disc pl-6 space-y-3 text-base opacity-90">
              <li>Open source and Research</li>
              <li>Cybersecurity (intermediate proficiency) </li>
              <li>Skills: <img src="https://skillicons.dev/icons?i=cs,dotnet,kotlin,bash,linux," /></li>
              <li>Learning: Español, 中文</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-[-20] gap-4">
          <h2 className="text-xl m-0 p-0">For more info :-</h2>

          <Menubar className="rounded-full px-4 py-2 backdrop-blur-2xl bg-black/10 dark:bg-white/20 border border-black/20 dark:border-white/40 shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(255,255,255,0.25)] text-black dark:text-white">
            <MenubarMenu>
              <h4 className="text-sm">Download CV</h4>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="flex items-center gap-4 mt-2 relative z-10">
          <span className="text-lg opacity-80">Social Networks:</span>

          <div className="flex gap-5 text-xl opacity-90">
            <a href="https://github.com/0xabhikr" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://t.me/ABHIKR4NTX" target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://x.com/Abhikr_X" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="mailto:abhikr6714@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>

        <Separator className="border-black/20 dark:border-white/30 relative z-10 border-t-2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm relative z-10">

          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="opacity-90">
              I'm Abhikr passionate about AI, open source, and lifelong learning.
              Exploring cybersecurity and languages.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 opacity-90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><a href="/cv.pdf" target="_blank" className="hover:underline">Download CV</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Email: <a href="mailto:abhikr6714@outlook.com" className="underline">abhikr6714@outlook.com</a></p>
            <p>Telegram: <a href="https://t.me/ABHIKR4NTX" className="underline">ABHIKR4NTX</a></p>
            <div className="mt-2">
              <ISTClock />
            </div>
          </div>
        </div>

        <Separator className="border-black/20 dark:border-white/30 relative z-10 border-t-2" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-black/70 dark:text-white/80 mt-2 relative z-10">
          <p>&copy; {new Date().getFullYear()} Abhikr. All rights reserved.</p>

          <div className="flex space-x-4 mt-2 md:mt-0 text-lg opacity-90">
            <a href="https://github.com/0xabhikr" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://t.me/ABHIKR4NTX" target="_blank"><FontAwesomeIcon icon={faTelegram} /></a>
            <a href="https://x.com/Abhikr_X" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="mailto:abhikr6714@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>

      </div>
    </div>
  );
}
