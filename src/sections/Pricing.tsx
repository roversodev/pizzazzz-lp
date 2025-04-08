'use client';
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import * as variant from '@/lib/motionVariants';
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Básico",
    monthlyPrice: 299,
    buttonText: "Começar Agora",
    popular: false,
    inverse: false,
    features: [
      "Até 500 pedidos/mês",
      "Sistema de delivery",
      "Cardápio digital",
      "Controle de pedidos",
      "Controle de estoque",
    ],
  },
  {
    title: "Profissional",
    monthlyPrice: 499,
    buttonText: "Teste Grátis 90 dias",
    popular: true,
    inverse: true,
    features: [
      "Pedidos ilimitados",
      "Sistema de delivery",
      "Cardápio digital",
      "Controle de estoque",
      "Relatórios financeiros",
      "Controle de Motoboy's",
      "Suporte prioritário",
    ],
  },
  {
    title: "Empresarial",
    monthlyPrice: 699,
    buttonText: "Falar com Consultor",
    popular: false,
    inverse: false,
    features: [
      "Tudo do Profissional",
      "Consultoria personalizada",
      "Contabilidade integrada",
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
    <section id="pricing" className="py-24 bg-white overflow-x-clip">
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
          className="section-description mt-5">Escolha o plano ideal para sua pizzaria. Comece hoje mesmo com 90 dias grátis com cupom exclusivo.</motion.p>
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
              <a href="#contato" className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black')}>{buttonText}</a>
              <motion.ul
              variants={variant.staggerContainer}
              initial="start"
              whileInView="end"
              className="flex flex-col gap-5  mt-8">
                {features.map((feature) => (
                  <motion.li
                  variants={variant.fadeInRight}
                  key={feature} className="flex gap-4 text-sm items-center">
                    <CheckIcon className='h-6 w-6' />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
