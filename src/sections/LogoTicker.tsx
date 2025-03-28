'use client';

import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'
import {motion, useScroll, useTransform,} from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 pr-14 flex-none" animate={{
            translateX: "-50%",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          >
            <Image src={acmeLogo} alt="acme" className='logo-ticker' />
            <Image src={quantumLogo} alt="quantum" className='logo-ticker' />
            <Image src={echoLogo} alt="echo" className='logo-ticker' />
            <Image src={celestialLogo} alt="celestial" className='logo-ticker' />
            <Image src={pulseLogo} alt="pulse" className='logo-ticker' />
            <Image src={apexLogo} alt="apex" className='logo-ticker' />



            <Image src={acmeLogo} alt="acme" className='logo-ticker' />
            <Image src={quantumLogo} alt="quantum" className='logo-ticker' />
            <Image src={echoLogo} alt="echo" className='logo-ticker' />
            <Image src={celestialLogo} alt="celestial" className='logo-ticker' />
            <Image src={pulseLogo} alt="pulse" className='logo-ticker' />
            <Image src={apexLogo} alt="apex" className='logo-ticker' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
