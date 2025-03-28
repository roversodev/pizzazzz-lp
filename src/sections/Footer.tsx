'use client';
import * as variant from '@/lib/motionVariants';
import {motion} from "framer-motion";
import logo from "@/assets/logo-pizzazzz.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:absolute before:bg-[linear-gradient(to_right,#EF5350,#E53935)]">
          <Image src={logo} alt="Logo" width={40} height={40} className="relative" />
        </div>
        <motion.nav
        variants={variant.staggerContainer}
        initial="start"
        whileInView='end'
        className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
            <motion.a
            variants={variant.fadeInUp}
            href="#">Sobre</motion.a>
            <motion.a
            variants={variant.fadeInUp}
            href="#">Funcionalidades</motion.a>
            <motion.a
            variants={variant.fadeInUp}
            href="#">Clientes</motion.a>
            <motion.a
            variants={variant.fadeInUp}
            href="#">Atualizações</motion.a>
            <motion.a
            variants={variant.fadeInUp}
            href="#">Ajuda</motion.a>
            <motion.a
            variants={variant.fadeInUp}
            href="#">Carreiras</motion.a>
        </motion.nav>
        <div className="flex justify-center gap-6 mt-6">
        <SocialX />
        <SocialInsta />
        <SocialLinkedin />
        <SocialPin />
        <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2025 PizzazzZ, Inc. Todos os direitos reservados</p>
      </div>
    </footer>
  );
};
