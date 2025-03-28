'use client';
import * as variant from '@/lib/motionVariants';
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from 'react';

const testimonials = [
  {
    text: "Desde que começamos a usar o PizzazzZ, reduzimos o tempo de entrega em 40% e aumentamos nosso faturamento mensal em mais de R$15 mil.",
    imageSrc: avatar1.src,
    name: "Maria Santos",
    username: "Pizzaria Don Roberto - SP",
  },
  {
    text: "O controle de estoque me ajudou a reduzir o desperdício em 60%. O sistema se pagou em menos de um mês!",
    imageSrc: avatar2.src,
    name: "Roberto Silva",
    username: "La Pizza Bella - RJ",
  },
  {
    text: "A integração com ifood e o sistema de delivery próprio revolucionou nossa operação. Aumentamos os pedidos em 85%.",
    imageSrc: avatar3.src,
    name: "Carlos Oliveira",
    username: "Pizza Express - MG",
  },
  {
    text: "Com os relatórios detalhados, consegui identificar meus produtos mais rentáveis e otimizar o cardápio. O lucro aumentou 35%.",
    imageSrc: avatar4.src,
    name: "Ana Costa",
    username: "Pizzaria da Ana - RS",
  },
  {
    text: "O suporte é incrível! Resolveram minhas dúvidas até nos finais de semana. O sistema nunca travou em horário de pico.",
    imageSrc: avatar5.src,
    name: "Pedro Mendes",
    username: "Pizza & Pizza - BA",
  },
  {
    text: "Gerencio 3 unidades com facilidade. O controle financeiro unificado me poupa horas de trabalho todo mês.",
    imageSrc: avatar6.src,
    name: "Fernanda Lima",
    username: "Pizzas & Cia - DF",
  },
  {
    text: "A gestão de funcionários e comissões ficou muito mais fácil. Minha equipe adora a simplicidade do sistema.",
    imageSrc: avatar7.src,
    name: "Ricardo Gomes",
    username: "Pizzaria Bella Napoli - PR",
  },
  {
    text: "O app de delivery próprio economiza muito nas taxas. Recuperei o investimento em apenas 2 meses.",
    imageSrc: avatar8.src,
    name: "Julia Martins",
    username: "Julia's Pizza - SC",
  },
  {
    text: "O sistema de fidelidade aumentou o retorno dos clientes em 70%. Melhor investimento que já fiz na pizzaria.",
    imageSrc: avatar9.src,
    name: "Marcelo Santos",
    username: "Pizza Prime - GO",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialColumn = (props: { duration?: number, className?: string, testiminals: typeof testimonials }) => {
  return (
    <div className={props.className}>
      <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className="flex flex-col gap-6 pb-6">
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testiminals.map(({ text, imageSrc, name, username }) => (
              <div key={name} className="card">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                  <div>
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}

      </motion.div>
    </div>
  )
}

export const Testimonials = () => {
  return (
    <section id='clientes' className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-border">Depoimentos</div>
        </div>
        <div className="section-heading">
          <motion.h2
            variants={variant.fadeInUp}
            initial="start"
            whileInView='end'
            className="section-title mt-5">O que dizem nossos parceiros</motion.h2>
          <motion.p
            variants={variant.fadeInLeft}
            initial="start"
            whileInView='end'
            className="section-description mt-5">
            Mais de 200 pizzarias já transformaram seu negócio com o PizzazzZ. Veja o que eles têm a dizer.
          </motion.p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColumn testiminals={firstColumn} duration={15} />
          <TestimonialColumn testiminals={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialColumn testiminals={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
