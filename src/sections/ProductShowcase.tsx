'use client';
import productImage from "@/assets/product-image-3.png";
import pyramidImage from "@/assets/pyramid2.png";
import tubeImage from "@/assets/tube2.png";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";
import * as variant from '@/lib/motionVariants';

export const ProductShowcase = () => {

  const sectionRef = useRef(null)
  
  const { scrollYProgress: scrollSectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollSectionProgress, [0, 1], [150, -150]);

  const productBannerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: productBannerRef,
    offset: ['start 1080px', '50% start'],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });


  return (
    <section id="features" className="bg-gradient-to-b from-[#FFFFFF] to-[#ffd2d2] py-24 overflow-x-clip" ref={sectionRef}>
      <div className="container">
        <motion.div
        variants={variant.staggerContainer}
        initial="start"
        whileInView="end"
        className="section-header">
          <motion.div
          variants={variant.fadeInScale}
          className="flex justify-center">
            <div className="text-border">Sistema completo para pizzarias</div>
          </motion.div>
          <div className="section-heading">
          <motion.h2
          variants={variant.fadeInUp}
          className="section-title mt-5">Tudo que você precisa em um só lugar</motion.h2>
          <motion.p
          variants={variant.fadeInRight}
          className="section-description mt-5">
            Delivery, gestão de pedidos, controle de estoque, relatórios financeiros e muito mais. A solução definitiva para sua pizzaria crescer.
          </motion.p>
          </div>
        </motion.div>
        <div
        className="relative">
          <motion.img src={productImage.src} alt="Product Image" className="mt-10 rounded-2xl" ref={productBannerRef} style={{
          scale: scale,
        }}/>
          <motion.img
          style={{
            translateY,
          }}
          src={pyramidImage.src} alt="Pyramid Image" height={262} width={262} className="hidden md:block absolute -right-36 -top-32" />
          <motion.img
          style={{
            translateY,
          }}
          src={tubeImage.src} alt="Tube Image" height={248} width={248} className="hidden md:block absolute bottom-24 -left-36" />
        </div>
      </div>
    </section>
  );
};
