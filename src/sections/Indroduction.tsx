'use client';
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = 'Você busca gerenciar sua pizzaria de forma excepcional, mas os métodos tradicionais o deixam para trás com complexidades desnecessárias.';
const words = text.split(' ');

const Indroduction = () => {
    const textDiv = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: textDiv,
        offset: ["start end", "end end"],
    });
    
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        return wordIndex.on('change', (latest) => {
            setCurrentWord(Math.floor(latest));
        });
    }, [wordIndex]);

    return (
        <section className='py-28 lg:py-40 bg-white'>
            <div className="container">
                <div className="sticky top-20 lg:top-44 md:top-36">
                    <div className="flex justify-center">
                        <div className="text-border">APRESENTANDO O PIZZAZZZ</div>
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold mt-10 tracking-tighter">
                        <span className="bg-gradient-to-b from-black to-[#731d1b] text-transparent bg-clip-text">A gestão da sua pizzaria merece o melhor.</span>{" "}
                        <span className="text-black/15">
                        {words.map((word, index) => (
                            <span 
                                key={index}
                                className={twMerge(
                                    'transition duration-500',
                                    index <= currentWord && 'bg-gradient-to-b from-black to-[#731d1b] text-transparent bg-clip-text'
                                )}
                            >
                                {word}{' '}
                            </span>
                        ))}
                        </span>
                        <span className='text-red-600 block'>É por isso que construímos o PizzazzZ</span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={textDiv}></div>
            </div>
        </section>
    )
}

export default Indroduction
