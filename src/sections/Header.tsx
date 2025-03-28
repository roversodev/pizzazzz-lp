'use client';
import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logo-pizzazzz.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'
import { useState } from 'react';
import * as variant from '@/lib/motionVariants';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Começe agora a usar pizzazzZ e melhore sua forma de pedir pizza,</p>
        <div className="inline-flex gap-1 items-center">
          <a href='https://app.pizzazzz.com.br/login'>Cadastre-se</a>
          <ArrowRight className='h-4 w-4 inline-flex justify-center items-center' />
        </div>
      </div>
      <div className='py-5'>
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden'
            >
              <MenuIcon className='h-5 w-5' />
            </button>
            <motion.nav
            variants={variant.staggerContainer}
            initial="start"
            whileInView="end"
            className='hidden md:flex gap-6 text-black/60 items-center'>
              <motion.a
              variants={variant.fadeInRight}
              href="#inicio">Início</motion.a>
              <motion.a
              variants={variant.fadeInRight}
              href="#features">Funcionalidades</motion.a>
              <motion.a
              variants={variant.fadeInRight}
              href="#clientes">Clientes</motion.a>
              <motion.a
              variants={variant.fadeInRight}
              href="#contato">Teste Grátis</motion.a>
              <motion.a
              href='https://app.pizzazzz.com.br/login'
              variants={variant.fadeInRight}
              className='btn btn-primary'>Cadastre-se</motion.a>
            </motion.nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 top-11 bg-white z-50 md:hidden">
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-center mb-8">
                    <div className='flex gap-4 items-center'>
                    <Image src={Logo} alt="Logo" height={40} width={40} />
                    <h1 className='text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#731d1b] text-transparent bg-clip-text'>PizzazzZ</h1>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <motion.nav
                  variants={variant.staggerContainer}
                  initial="start"
                  whileInView="end"
                  className="flex flex-col gap-6 text-xl">
                    <motion.a
                    variants={variant.fadeInRight}
                    href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</motion.a>
                    <motion.a
                    variants={variant.fadeInRight}
                    href="#features" onClick={() => setIsMenuOpen(false)}>Funcionalidades</motion.a>
                    <motion.a
                    variants={variant.fadeInRight}
                    href="#clientes" onClick={() => setIsMenuOpen(false)}>Clientes</motion.a>
                    <motion.a
                    variants={variant.fadeInRight}
                    href="#contato" onClick={() => setIsMenuOpen(false)}>Teste Grátis</motion.a>
                    <motion.button
                    variants={variant.fadeInRight}
                    className='btn btn-primary'>
                      Cadastre-se
                    </motion.button>
                  </motion.nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
