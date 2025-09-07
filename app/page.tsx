'use client'

import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram, faLinkedin, faXTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AlertCircleIcon } from 'lucide-react';
import path from 'path';
import ISTClock from '../components/ISTClock';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-4 space-y-6">
      <Alert variant="destructive" style={{ marginTop: -10 }}>
        <AlertCircleIcon />
        <AlertDescription >
          This site is under development
        </AlertDescription>
      </Alert>

      {/* <Card className="p-4 space-y-6 font-oxanium normal"> */}
      {/* <Card className="p-4 space-y-6 font-oxanium normal card-glossy"> */}
      <Card className="p-4 space-y-6 font-oxanium normal backdrop-blur-md bg-white/10 border border-white/20 shadow-md rounded-xl">

        {/* <div className="bg-purple-100 dark:bg-purple-400 p-4 border-l-4 border-purple-600 dark:border-purple-800 rounded " style={{width:400, fontSize:20, height:50, borderRadius:10}}> */}
        <div>
          <h2 className="text-3xl">Hi, I'm Abhikr 🤍</h2>
        </div>
        <Separator className="border-t-2 mt-2" style={{ marginTop: -25 }} />

        <div style={{ marginTop: -25 }} >
          <em style={{ marginTop: 0 }} >“Sometimes a single thought is all it takes to change your day.”</em>
        </div>

        <ul className="list-disc pl-8 space-y-2 text-base" style={{ marginTop: -30 }}>
          <li>AI/ML, Open source, and Research</li>
          <li>Cybersecurity rookie</li>
          <li>Languages: C#, Python</li>
          <li>Learning: Spanish, Chinese</li>
        </ul>
        <div className="flex flex-col md:flex-row items-center gap-4 md:space-x-8 mt-[-30px]">
          <h2 className="text-xl m-0 p-0">For more info :-</h2>

          <Menubar className="w-full md:w-[150px]">
            <MenubarMenu>
              <h4 className="m-0 p-0 ml-4 mr-4">Download CV</h4>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="space-y-2" style={{ marginTop: -30, display: 'flex' }}>
          <span className="" style={{ fontSize: 20, paddingRight: 10 }}>Social Networks:</span>
          <div className="social-icons flex gap-4 text-xl">
            <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {/* <a href="https://instagram.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
              <FontAwesomeIcon icon={faInstagram} />
            </a> */}
            <a href="https://t.me/AbhikrX" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/Abhikr_X" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X) Profile">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="mailto:abhikr6714@outlook.com" target="_blank" rel="noopener noreferrer" aria-label="Email Me">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

        </div>

        <Separator className="border-t-2 mt-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="">
              I'm Abhikr — passionate about AI, open source, and lifelong learning.
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
            <p className="">Email: <a href="mailto:abhikr6714@outlook.com" className="underline">abhikr6714@outlook.com</a></p>
            <p className="">Telegram: <a href="https://t.me/AbhikrX" className="underline">AbhikrX</a></p>
            <div className="mt-2">
              <ISTClock />
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
            <a href="mailto:abhikr6714@outlook.com" target="_blank" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </Card>
    </div>
  );
}
