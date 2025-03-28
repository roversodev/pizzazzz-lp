'use client';
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import * as variant from '@/lib/motionVariants';
import { motion } from "framer-motion";
import { lookup } from "dns";

const pricingTiers = [
  {
    title: "Básico",
    monthlyPrice: 97,
    buttonText: "Começar Agora",
    popular: false,
    inverse: false,
    features: [
      "Até 300 pedidos/mês",
      "Sistema de delivery",
      "Cardápio digital",
      "Controle de pedidos",
      "Suporte por email",
    ],
  },
  {
    title: "Profissional",
    monthlyPrice: 197,
    buttonText: "Teste Grátis 14 dias",
    popular: true,
    inverse: true,
    features: [
      "Pedidos ilimitados",
      "Sistema de delivery",
      "Cardápio digital",
      "Controle de estoque",
      "Relatórios financeiros",
      "Integração com ifood",
      "Suporte prioritário",
    ],
  },
  {
    title: "Empresarial",
    monthlyPrice: 397,
    buttonText: "Falar com Consultor",
    popular: false,
    inverse: false,
    features: [
      "Tudo do Profissional",
      "Multi-unidades",
      "Gestão de funcionários",
      "Análise avançada",
      "Consultoria mensal",
      "API personalizada",
      "Suporte 24/7",
      "Treinamento da equipe",
      "Backup automático",
      "Personalização completa",
    ],
  },
];


export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <motion.h2
          variants={variant.fadeInUp}
          initial="start"
          whileInView='end'
          className="section-title">Planos e Preços</motion.h2>
          <motion.p
          variants={variant.fadeInRight}
          initial="start"
          whileInView='end'
          className="section-description mt-5">Escolha o plano ideal para sua pizzaria. Comece hoje mesmo com 14 dias grátis.</motion.p>
        </div>

        <div
        className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">

          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <motion.div
            variants={variant.fadeInUp}
            initial="start"
            whileInView='end'
            transition={{
              duration: 2,
            }}
            key={title} className={twMerge("card",
              inverse === true && 'border-black bg-black text-white')}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
                {popular === true && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span 
                    animate={{
                      backgroundPositionX: '100%'
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatType: 'loop',
                    }}
                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text">Popular</motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">{monthlyPrice}</span>
                <span className="tracking-tight">/mês</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black')}>{buttonText}</button>
              <ul className="flex flex-col gap-5  mt-8">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-4 text-sm items-center">
                    <CheckIcon className='h-6 w-6' />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
