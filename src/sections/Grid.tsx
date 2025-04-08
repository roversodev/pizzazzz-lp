'use client';
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, LocateFixed, LucideLocate } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeam";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { Globe } from "@/components/magicui/globe";
import { motion } from "framer-motion";
import * as variant from '@/lib/motionVariants';


const files = [
    {
        name: "financeiro.xlsx",
        body: "Uma planilha de relatório financeiro que ajuda a acompanhar receitas, despesas e gerar análises detalhadas do fluxo de caixa.",
    },
    {
        name: "pedidos.xlsx",
        body: "Uma planilha de pedidos que ajuda a organizar informações dos clientes, produtos vendidos e calcular o faturamento total.",
    },
    {
        name: "financeiro.xlsx",
        body: "Uma planilha de relatório financeiro que ajuda a acompanhar receitas, despesas e gerar análises detalhadas do fluxo de caixa.",
    },
    {
        name: "pedidos.xlsx",
        body: "Uma planilha de pedidos que ajuda a organizar informações dos clientes, produtos vendidos e calcular o faturamento total.",
    },
    {
        name: "financeiro.xlsx",
        body: "Uma planilha de relatório financeiro que ajuda a acompanhar receitas, despesas e gerar análises detalhadas do fluxo de caixa.",
    },
    {
        name: "pedidos.xlsx",
        body: "Uma planilha de pedidos que ajuda a organizar informações dos clientes, produtos vendidos e calcular o faturamento total.",
    },
];

const features = [
    {
        Icon: FileTextIcon,
        name: "Exporte seus dados",
        description: "Nós geramos um excel para você com os dados importantes.",
        href: "#",
        cta: "Começe agora",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: BellIcon,
        name: "Notificações",
        description: "Seja notificado quando algo acontecer em tempo real.",
        href: "#",
        cta: "Começe agora",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
        ),
    },
    {
        Icon: LocateFixed,
        name: "Localização",
        description: "Use a localização precisa para entregar os pedidos.",
        href: "#",
        cta: "Começe agora",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Globe className="top-12 sm:top-0 hover:scale-105 transition-all duration-300 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
        ),
    },
    {
        Icon: CalendarIcon,
        name: "Calendário",
        description: "Use o calendário para filtrar os pedidos e informações da sua pizzaria.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Começe agora",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
            />
        ),
    },
];

export function Grid() {
    return (
        <section id="cards" className="pt-24 bg-white overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                    <motion.h2
                        variants={variant.fadeInUp}
                        initial="start"
                        whileInView='end'
                        className="section-title">Funcionalidades</motion.h2>
                    <motion.p
                        variants={variant.fadeInRight}
                        initial="start"
                        whileInView='end'
                        className="section-description mt-5">Explore algumas funcionalidades que desenvolvemos para ajudar você a gerenciar sua pizzaria de forma mais eficiente e profissional</motion.p>
                </div>
                <BentoGrid className="mt-10">

                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
