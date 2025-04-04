'use client';
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog3.png";
import cylinderImage from "@/assets/cylinder3.png";
import noodleImg from "@/assets/noodle2.png";
import {motion, useScroll, useTransform,} from "framer-motion"; 
import { useRef } from "react";
import * as variant from '@/lib/motionVariants';
import { useState } from "react";

export const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="inicio" ref={heroRef} className="py-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#EF5350,#feeaea_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <motion.div
          variants={variant.staggerContainer}
          initial="start"
          whileInView="end"
          className="md:w-[478px] sm:flex sm:items-center sm:flex-col md:items-start">
            <motion.div
            variants={variant.fadeInScale}
            className="text-border">Promoção de Lançamento</motion.div>
            <motion.h1
            variants={variant.fadeInScale}
            className="text-5xl md:text-7xl sm:text-center md:text-start font-bold tracking-tighter bg-gradient-to-b from-black to-[#731d1b] text-transparent bg-clip-text mt-6">
              Aumente o lucro até 40%
            </motion.h1>
            <motion.p
            variants={variant.fadeInScale}
            className="text-description-header sm:text-center md:text-start">Com Pizzaz<span className="text-2xl text-[#3e0101] tracking-tight">z</span>Z, você tem um sistema completo de gestão e delivery. Controle pedidos, estoque e finanças em um só lugar.</motion.p>
            <motion.div
            variants={variant.fadeInScale}
            className="flex gap-1 items-center mt-[30px]">
              <a href="https://app.pizzazzz.com.br/login" className="btn">Teste Grátis</a>
              <button 
                onClick={() => setShowVideo(true)} 
                className="btn btn-text gap-1"
              >
                <span>Ver Demonstração</span>
                <ArrowIcon className='h-5 w-5' />
              </button>
            </motion.div>
          </motion.div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
              src={cogImage.src}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <motion.img
              src={cylinderImage.src}
              alt="cylinder"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImg.src}
              alt="noodle"
              width={220}
              height={220}
              className="hidden md:block top-[524px] left-[446px] md:absolute rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="flex justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Demonstração PizzazzZ</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative pb-[62.5%] h-0">
              <iframe 
                src="https://www.loom.com/embed/e40dd81f518e4c05b8beb3a19965815f?sid=1459bf88-7e1c-45ad-9349-dc8af3c52cb5" 
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
