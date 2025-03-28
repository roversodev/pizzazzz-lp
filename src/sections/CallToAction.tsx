'use client';
import * as variant from '@/lib/motionVariants';
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from 'react';
import ArrowRightIcon from '@/assets/arrow-right.svg'
import starImage from '@/assets/star2.png'
import springImage from '@/assets/spring2.png'

export const CallToAction = () => {
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
          className="section-description mt-5">Junte-se a mais de 200 pizzarias que já aumentaram seus lucros com o sistema completo do PizzazzZ. Teste grátis por 14 dias.</motion.p>
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
          <motion.a
          href="https://app.pizzazzz.com.br/login"
          variants={variant.fadeInUp}
          className="btn btn-primary text-center">Começar Teste Grátis</motion.a>
          <motion.button
           variants={variant.fadeInUp}
          className="btn btn-text gap-1">
            <span>Agendar Demonstração</span>
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section >
  );
};
