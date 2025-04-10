'use client';
import * as variant from '@/lib/motionVariants';
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from 'react';
import ArrowRightIcon from '@/assets/arrow-right.svg'
import starImage from '@/assets/star2.png'
import springImage from '@/assets/spring2.png'
import { useState } from 'react';
import { RainbowButton } from '@/components/magicui/rainbow-button';

export const CallToAction = () => {
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section id='contato' className="bg-gradient-to-b from-white to-[#ffd2d2] py-24 overflow-x-clip" ref={sectionRef}>
      <div className="container">
        <div className="section-heading max-w-[560px] relative">
          <motion.h2
          variants={variant.fadeInUp}
          initial="start"
          whileInView='end'
          transition={{
            duration: 1,
          }}
          className="section-title">Comece a transformar sua pizzaria hoje</motion.h2>
          <motion.p
          variants={variant.fadeInRight}
          initial="start"
          whileInView='end'
          transition={{
            duration: 1,
          }}
          className="section-description mt-5">Junte-se a comunidade de pizzarias que já aumentaram seus lucros com o sistema completo do PizzazzZ. Teste grátis por 90 dias com o cupom PZZZ100.</motion.p>
          <motion.img
          style={{
            translateY: translateY,
          }}
          src={starImage.src} alt="star" width={360} className="absolute -left-[350px] -top-[137px]" />
          <motion.img
          style={{
            translateY: translateY,
          }}
          src={springImage.src} alt="spring" width={360} className="absolute -right-[331px] -top-[19px]" />
        </div>
        <motion.div
        variants={variant.staggerContainer}
        initial="start"
        whileInView='end'
        className="flex gap2 mt-10 justify-center">
          <RainbowButton 
            className="px-4 py-2 text-center gap-1"
            onClick={() => window.open('https://app.pizzazzz.com.br/login', '_blank')}
          >
            Começar<span className='hidden md:block'> Agora</span>
          </RainbowButton>
          <motion.button
            onClick={() => setShowVideo(true)}
            variants={variant.fadeInUp}
            className="btn btn-text gap-1">
            <span>Ver Demonstração</span>
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </motion.div>
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
