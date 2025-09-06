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

        <Separator className="border-t-2" style={{ marginTop: -30 }} />
        <ISTClock />
      </Card>
    </div>

  );

}
