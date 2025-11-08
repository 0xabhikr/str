'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTelegram, faLinkedin, faXTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AlertCircleIcon } from 'lucide-react';
import ISTClock from '../components/ISTClock';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';
import Image from 'next/image';
import Sakura from '../public/sakura.svg';

export default function HomePage() {
  return (
    <div className="pt-[70px] space-y-6 left-4 right-4">
      <Alert variant="destructive" >
        <AlertCircleIcon />
        <AlertDescription >
          This site is under development
        </AlertDescription>
      </Alert>
      <Card className="p-4 left-4 right-4 space-y-6 font-oxanium normal backdrop-blur-md bg-white/10 border border-white/20 shadow-md rounded-xl">
        <div>
          <h2 className="text-3xl flex items-center">Hi, I'm Abhikr
            <Image src={Sakura} alt="icon" width={30} height={30} className="ml-2" style={{ animation: 'spin 5s linear infinite', }} />
          </h2>
        </div>
        <Separator className="border-t-2 mt-2" style={{ marginTop: -30 }} />
        <div className="flex flex-col md:flex-row items-start gap-6 mt-4">
          <div className="w-full md:w-1/2 space-y-4">
            <em className="block text-sm" style={{ marginTop: -40 }} >“I would rather die for flowers than live for bread.”</em>
            <Image src="https://zm3wlxe8zvibbtdu.public.blob.vercel-storage.com/winter/8116642.jpg"alt="Showcase"width={800}height={450}className="rounded-lg shadow-md object-cover w-full h-[350px]"
            />
          </div>
          <div className="w-full md:w-1/2" style={{ marginTop: -40 }} >
            <h3 className="text-xl pl-3 font-semibold mb-2">About Me</h3>
            <Separator className="border-t-2 mt-2 mb-4 " />
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>Open source and Research</li>
              <li>Cybersecurity Rookie</li>
              <li>Languages: Swift, Python</li>
              <li>Learning: Spanish, Portuguese</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:space-x-8 mt-[-30px]">
          <h2 className="text-xl m-0 p-0">For more info :-</h2>
          <Menubar className=" md:w-[150px] backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
            <MenubarMenu>
              <h4 className="m-0 p-0 ml-4 mr-4 ">Download CV</h4>
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
            <a href="https://x.com/Abhikr_X" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
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
              I'm Abhikr passionate about AI, open source, and lifelong learning.
              Exploring cybersecurity and language learning on the side.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 ">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              {/* <li><Link href="/contact" className="hover:underline">Contact</Link></li> */}
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
