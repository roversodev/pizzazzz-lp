'use client';
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog3.png";
import cylinderImage from "@/assets/cylinder3.png";
import noodleImg from "@/assets/noodle2.png";
import {motion, useScroll, useTransform,} from "framer-motion"; 
import { useRef } from "react";
import * as variant from '@/lib/motionVariants';

export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="inicio"
     ref={heroRef} className="py-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#EF5350,#feeaea_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <motion.div
          variants={variant.staggerContainer}
          initial="start"
          whileInView="end"
          className="md:w-[478px]">
            <motion.div
            variants={variant.fadeInScale}
            className="text-border">Promoção de Lançamento</motion.div>
            <motion.h1
            variants={variant.fadeInScale}
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#731d1b] text-transparent bg-clip-text mt-6">Aumente o lucro em 40%</motion.h1>
            <motion.p
            variants={variant.fadeInScale}
            className="text-description-header">Com Pizzaz<span className="text-2xl text-[#3e0101] tracking-tight">z</span>Z você tem um sistema completo de gestão e delivery. Controle pedidos, estoque e finanças em um só lugar.</motion.p>
            <motion.div
            variants={variant.fadeInScale}
            className="flex gap-1 items-center mt-[30px]">
              <a href="https://app.pizzazzz.com.br/login" className="btn">Teste Grátis</a>
              <button className="btn btn-text gap-1">
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
    </section>
  );
};
