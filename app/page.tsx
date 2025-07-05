'use client'


import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTelegram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { AlertCircleIcon } from 'lucide-react';
import path from 'path';


export default function HomePage() {


  return (

    <div className="p-4 space-y-6">

      {/* <div className="fixed z-50 right-4 top-1/3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <QrCode className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-32 p-2">
            <Image
              alt="QR Code"
              src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750615996/abhikr_ldj2kv.png"
              width={120}
              height={120}
              className="rounded"
            />
          </PopoverContent>
        </Popover>
      </div> */}

      <Alert variant="destructive" style={{ marginTop: -10 }}>
        <AlertCircleIcon />

        <AlertDescription >
          This site is under development
        </AlertDescription>
      </Alert>

      <Card className="p-4 space-y-6 font-oxanium normal">
        {/* <div className="bg-purple-100 dark:bg-purple-400 p-4 border-l-4 border-purple-600 dark:border-purple-800 rounded " style={{width:400, fontSize:20, height:50, borderRadius:10}}> */}
        <div>
          <h2 className="text-xl  " >✨ Daily Spark of Thought</h2>
        </div>

        <Separator className="border-t-2 mt-2" style={{ marginTop: -25 }} />

        <div style={{ marginTop: -25 }} >
          <em style={{ marginTop: 0 }} >“Sometimes a single thought is all it takes to change your day.”</em>
        </div>

        <ul className="list-disc pl-8 space-y-2 text-sm" style={{ marginTop: -30 }}>
          <li>Embrace the present moment. Yesterday is gone, and tomorrow isn't guaranteed. Find joy and purpose in what you're doing right now.</li>
          <li>A small act of kindness can create a ripple effect. You never know how much a simple compliment or helping hand might brighten someone's day, and in turn, your own.</li>
          <li>Growth begins at the edge of your comfort zone. Don't be afraid to try something new or challenge yourself today. That's where true learning and progress happen.</li>
        </ul>

        <div className="space-y-2" style={{ marginTop: -30, display: 'flex' }}>
          <span className="" style={{ fontSize: 20, paddingRight: 10 }}>Social Networks:</span>
          <div className="social-icons flex gap-4 text-xl">
            <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://instagram.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
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

        <Separator className="border-t-2" style={{ marginTop: -30 }} />

        {/* <h1 className="bg-purple-100 dark:bg-purple-400 p-4 border-l-4 border-purple-600 dark:border-purple-800 rounded" style={{ borderRadius:10}}>
         */}
        <h1 style={{ fontSize: 30, marginTop: -25 }}>
          🔍 Valuable Informative Articles Section
        </h1>

        {/* <div className="border p-4 rounded-lg flex flex-col space-y-4" style={{ marginTop: -30 }}>
          <div className="flex justify-between items-center text-sm">
            <a href='/blog'>
            <h3 className="font-normal underline" >PHP SCRIPT TO HANDLE TELEGRAM BOT WEBHOOKS WITH REAL-TIME UPDATES </h3>          </a>

            <div className="text-muted-foreground">
              <i className="fa-solid fa-calendar-days mr-2" />
              10 June, 2025 | 10:16 PM
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <p className="text-sm">
                Think of a webhook as a way for Telegram to “ping” your server every time something happens — like when someone sends a message to your bot.
                Instead of you asking Telegram every few seconds, “Hey, got anything new?”, Telegram just sends the update to your server automatically.
                <br /><br />
                It’s fast, efficient, and real-time.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616297/bgbanner_mscnxc.jpg"
                alt="Webhook Illustration"
                width={400}
                height={200}
                className="object-cover h-32 w-full md:h-auto rounded-lg"
                style={{ borderRadius: 2,width:'100%', height:'100%', objectFit:'cover',clipPath:'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
              />
            </div>
          </div>
        </div> */}
        {/* <div className="border p-4 rounded-lg flex flex-col space-y-4" style={{ marginTop: -30 }}>
          <div className="flex justify-between items-center text-sm">
            <h3 className="font-normal underline">PHP SCRIPT TO HANDLE TELEGRAM BOT WEBHOOKS WITH REAL-TIME UPDATES</h3>
            <div className="text-muted-foreground">
              <i className="fa-solid fa-calendar-days mr-2" />
              10 June, 2025 | 10:16 PM
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <p className="text-sm">
                Think of a webhook as a way for Telegram to “ping” your server every time something happens — like when someone sends a message to your bot.
                Instead of you asking Telegram every few seconds, “Hey, got anything new?”, Telegram just sends the update to your server automatically.
                <br /><br />
                It’s fast, efficient, and real-time.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616297/bgbanner_mscnxc.jpg"
                alt="Webhook Illustration"
                width={400}
                height={200}
                className="object-cover h-32 w-full md:h-auto rounded-lg"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div> */}
        
      </Card>
    </div>
  );
}
