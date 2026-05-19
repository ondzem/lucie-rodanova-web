import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const sectionRef = useRef(null);

    const testimonials = [
        {
            quote: "Úžasná spolupráce moc doporučuji,co znám paní Roďanovou se mi o vše ohledně financí,pojistek atd.stará jen ona a mně tím odpadá spousty starostí s vyřizováním.Děkuji za vše:-)",
            name: "Kristýna Wimmerová",
            role: "DOPORUČUJE"
        },
        {
            quote: "Maximální spokojenost, profesionální jednání. Zdvořilá a milá, ochotná vysvětlit a poradit v jakou koliv denní dobu.",
            name: "Kristýna Mrázková",
            role: "DOPORUČUJE"
        },
        {
            quote: "Jediným slovem - Profesionálka. Člověk na správném místě.",
            name: "Danča Peroutková",
            role: "DOPORUČUJE"
        }
    ];

    useGSAP(() => {
        const elements = gsap.utils.toArray('.testimonial-element');
        const animations = [];

        elements.forEach((element) => {
            const anim = gsap.fromTo(element,
                { y: 150, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        toggleActions: 'play none play none' // Hrajem i směrem zespoda nahoru
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: 'expo.out',
                    overwrite: 'auto',
                    delay: 0.05
                }
            );
            animations.push(anim);
        });

        // Master ScrollTrigger for resetting the section only when completely out of bounds
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top bottom', // Entered from bottom
            end: 'bottom top',   // Left from top
            onLeave: () => {
                // Section scrolled completely out of view upwards
                animations.forEach(anim => anim.pause(0));
            },
            onLeaveBack: () => {
                // Section scrolled completely out of view downwards
                animations.forEach(anim => anim.pause(0));
            }
        });
    }, { scope: sectionRef });

    return (
        <section id="reference" ref={sectionRef} className="bg-[#E1DFE2] py-24 lg:py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 h-full relative z-10">
                
                {/* Header */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-20 testimonial-element">
                    <div>
                        <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-4">
                            Reference
                        </p>
                        <h2 className="font-playfair text-[38px] sm:text-[44px] md:text-5xl lg:text-[60px] leading-[1.1] text-[#1F2937] font-medium italic tracking-tight">
                            Co říkají klienti?
                        </h2>
                    </div>
                    
                    <p className="font-montserrat text-xs sm:text-[13px] text-gray-500 max-w-xs leading-relaxed mt-6 md:mt-0 md:pb-2 text-left md:text-right">
                        Skutečné příběhy.<br className="hidden md:block" /> Skutečné výsledky.
                    </p>
                </div>

                {/* Testimonials List */}
                <div className="flex flex-col">
                    {testimonials.map((item, index) => (
                        <div 
                            key={index} 
                            className={`testimonial-element w-full flex flex-col lg:flex-row border-b border-[#1F2937]/10 py-12 lg:py-16 relative ${index === 0 ? 'border-t' : ''}`}
                        >
                            
                            {/* Center: Quote Text and Quote Mark */}
                            <div className="w-full lg:w-9/12 flex flex-col lg:pr-20 mb-10 lg:mb-0">
                                <span className="font-playfair font-black text-[#B69E57]/30 text-7xl leading-none mb-2 lg:mb-4">
                                    “
                                </span>
                                <p className="font-playfair text-[20px] md:text-[24px] lg:text-[28px] text-[#1F2937] leading-[1.6] tracking-tight lg:pr-10 font-normal">
                                    {item.quote}
                                </p>
                            </div>

                            {/* Desktop Vertical Divider */}
                            <div className="hidden lg:block absolute right-[25%] top-12 bottom-12 w-[1px] bg-[#1F2937]/10"></div>

                            {/* Right: Author & Stars */}
                            <div className="w-full lg:w-3/12 flex flex-col items-start lg:items-end justify-center lg:pr-4">
                                <div className="flex flex-col items-start lg:items-center">
                                    <p className="font-playfair text-[18px] lg:text-[20px] text-[#1F2937] font-medium italic mb-2">
                                        {item.name}
                                    </p>
                                    <p className="font-montserrat text-[9px] tracking-[0.24em] font-semibold text-[#B69E57] uppercase">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA area at the bottom */}
                <div className="pt-12 sm:pt-16 pb-4 flex flex-col sm:flex-row items-center sm:justify-start gap-5 lg:gap-8 testimonial-element relative z-10 w-full mb-10 lg:mb-8">
                    <a href="https://www.facebook.com/profile.php?id=100063497562888&sk=reviews" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#B69E57] hover:bg-[#9C874B] text-white px-9 py-4 rounded-md font-helvetica text-[13px] lg:text-sm uppercase lg:normal-case tracking-widest lg:tracking-wide font-medium shadow-md transition-all duration-300 flex items-center justify-center">
                        Zobrazit více
                    </a>
                    <a href="#kontakt" className="font-helvetica text-sm tracking-wide font-medium text-[#1F2937]/90 hover:text-[#1F2937] transition-colors duration-300 group flex items-center justify-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                        <span className="relative">
                            Sjednat konzultaci
                            <span className="block h-[1px] w-0 group-hover:w-full bg-[#1F2937] transition-all duration-500 absolute -bottom-2 left-0"></span>
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
