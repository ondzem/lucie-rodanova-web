import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    const services = [
        {
            num: "01",
            title: "Zhodnocení volných prostředků",
            tag: "Investice",
            desc: "Máte volné finance a chcete je efektivně investovat? Pomůžeme vám je chytře investovat tak, aby pracovaly za vás.",
        },
        {
            num: "02",
            title: "Vlastní bydlení",
            tag: "Reality & Hypotéky",
            desc: "Plánujete koupi, prodej nebo řešíte refinancování hypotéky? Najdeme pro vás to ideální řešení na míru.",
        },
        {
            num: "03",
            title: "Zajištění na penzi",
            tag: "Budoucnost",
            desc: "Zabezpečení na stáří je nejdůležitější oblastí finančního plánování. Poradíme vám, jak mít jistotu klidné budoucnosti.",
        },
        {
            num: "04",
            title: "Zajištění příjmu",
            tag: "Ochrana",
            desc: "Postaráme se o to, aby vaše příjmy byly chráněné v každé životní situaci, a vy měli jistotu, že vaše plány zůstanou v bezpečí.",
        },
        {
            num: "05",
            title: "Zabezpečení dětí",
            tag: "Start do života",
            desc: "Pomůžeme zajistit budoucnost vašich dětí a připravit je na finančně stabilní start do nezávislého dospělého života.",
        },
        {
            num: "06",
            title: "Ochrana majetku a odpovědnosti",
            tag: "Pojištění",
            desc: "Provedeme vás světem životního i neživotního pojištění a vybereme řešení přesně podle vašich aktuálních potřeb.",
        },
        {
            num: "07",
            title: "Konsolidace a úvěry",
            tag: "Financování",
            desc: "Pomůžeme vám snížit splátky, sjednotit půjčky nebo získat výhodnější podmínky díky chytrému nastavení úvěrů.",
        },
        {
            num: "08",
            title: "Finanční plán na míru",
            tag: "Strategie",
            desc: "Dáme finance do souvislostí – nastavíme plán, který propojí vaše cíle, příjmy a výdaje, a ukáže vám cestu.",
        },
    ];

    useGSAP(() => {
        const title = sectionRef.current.querySelector('.service-heading-text');
        const cards = gsap.utils.toArray('.service-card');
        const animations = [];

        // Heading Animation
        const titleAnim = gsap.fromTo(title,
            { yPercent: 120, opacity: 0, rotationZ: 3, transformOrigin: '0% 100%' },
            {
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector('.service-heading-text'),
                    start: 'top 90%',
                    toggleActions: 'play none play none' // Hrajem i směrem zespoda nahoru
                },
                yPercent: 0,
                opacity: 1,
                rotationZ: 0,
                duration: 1.5,
                ease: 'power4.out',
                overwrite: 'auto'
            }
        );
        animations.push(titleAnim);

        // Individual Card Animation
        cards.forEach((card) => {
            const cardAnim = gsap.fromTo(card,
                { y: 150, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: card,
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
            animations.push(cardAnim);
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
        <section
            id="sluzby"
            ref={sectionRef}
            className="bg-[#FCFCFC] pt-12 md:pt-32 pb-24 md:pb-40 px-0 w-full min-h-screen relative overflow-hidden flex items-center"
        >
            <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col">
                
                {/* Header Area */}
                <div className="w-full flex flex-col md:flex-row md:items-end justify-between px-6 lg:px-20 mb-16 md:mb-20">
                    <div>
                        <p className="font-montserrat text-[10px] md:text-xs font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-2">
                            Moje služby
                        </p>
                        <div className="overflow-hidden px-2 -mx-2 pb-4 pt-0">
                            <h2 className="font-playfair text-[38px] sm:text-[44px] md:text-5xl lg:text-[64px] leading-[1.1] text-[#1F2937] font-medium italic tracking-tight">
                                <span className="service-heading-text block whitespace-nowrap">
                                    S čím vám pomohu?
                                </span>
                            </h2>
                        </div>
                    </div>
                    <p className="font-montserrat text-[13px] text-gray-500 max-w-xs md:max-w-md leading-relaxed mt-1 md:mt-0 md:pb-5 text-left md:text-right whitespace-normal xl:whitespace-nowrap">
                        Každý klient je jiný. Najdeme řešení přesně pro vás.
                    </p>
                </div>

                {/* List Area */}
                <div className="w-full flex flex-col border-t border-gray-200/60">
                    {services.map((service) => (
                        <div
                            key={service.num}
                            className="service-card group relative border-b border-gray-200/60 cursor-pointer overflow-hidden bg-transparent"
                        >
                            {/* Dark Slide Background */}
                            <div className="absolute inset-0 bg-[#1F2937] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.77,0,0.175,1)] z-0" />

                            {/* Gold Edge Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#B69E57] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[500ms] ease-[cubic-bezier(0.77,0,0.175,1)] z-10" />

                            {/* Inner Row Content */}
                            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center px-6 lg:px-20 h-auto py-6 sm:py-0 sm:h-[110px] lg:h-[130px] group-hover:sm:h-[140px] group-hover:lg:h-[170px] transition-all duration-[500ms] ease-[cubic-bezier(0.77,0,0.175,1)]">
                                
                                {/* Numbers & Title Area */}
                                <div className="flex items-center flex-1 w-full relative">
                                    {/* Number */}
                                    <span className="font-montserrat text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase text-[#B69E57] min-w-[36px] sm:min-w-[48px] shrink-0 transition-colors duration-300">
                                        {service.num}
                                    </span>
                                    
                                    {/* Text Content flex column for perfect vertical centering */}
                                    <div className="flex flex-col justify-center pl-3 sm:pl-6 lg:pl-10">
                                        {/* Title */}
                                        <span className="font-playfair text-3xl sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.05] font-medium text-[#1F2937] whitespace-normal transition-all duration-[500ms] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:text-[#FCFCFC] group-hover:sm:text-[38px] group-hover:md:text-[40px] group-hover:lg:text-[46px] lg:group-hover:-tracking-tight">
                                            {service.title}
                                        </span>
                                        
                                        {/* Desktop Description: hidden behind height constraints until hover */}
                                        <p className="text-xs sm:text-[13px] text-gray-300/90 font-montserrat leading-relaxed xl:pr-40 opacity-0 max-h-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 group-hover:mt-2 transition-all duration-[500ms] ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none hidden sm:block">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side Actions (Desktop) */}
                                <div className="hidden sm:flex relative items-center justify-end h-full w-[120px]">
                                    {/* Default state subtle indicator */}
                                    <div className="absolute right-0 flex items-center text-[#1F2937]/50 transition-all duration-[400ms] ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:opacity-0 group-hover:translate-x-4">
                                        <ArrowRight size={20} strokeWidth={1.5} className="-rotate-45" />
                                    </div>

                                    {/* Tag - visible during hover */}
                                    <span className="shrink-0 font-montserrat text-[10px] font-semibold tracking-widest uppercase bg-[#B69E57] text-white px-4 py-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[400ms] ease-out delay-75">
                                        {service.tag}
                                    </span>
                                </div>
                            </div>


                            {/* Mobile inline fallback description */}
                            <p className="relative z-10 font-montserrat text-xs text-gray-400 mt-0 px-4 pb-0 block sm:hidden opacity-0 max-h-0 overflow-hidden group-hover:max-h-[80px] group-hover:mt-2 group-hover:pb-6 group-hover:opacity-100 transition-all duration-[500ms] ease-out">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                    
                    {/* Ghost Button / CTA area at the bottom */}
                    <div className="pt-12 sm:pt-16 pb-4 px-6 lg:px-20 flex flex-col sm:flex-row items-center sm:justify-start gap-5 lg:gap-8">
                        <a href="https://www.4fin.cz/pro-klienty/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#B69E57] hover:bg-[#9C874B] text-white px-9 py-4 rounded-md font-helvetica text-[13px] lg:text-sm uppercase lg:normal-case tracking-widest lg:tracking-wide font-medium shadow-md transition-all duration-300 flex items-center justify-center">
                            Zjistit více
                        </a>
                        <a href="#o-mne" className="font-helvetica text-sm tracking-wide font-medium text-[#1F2937]/90 hover:text-[#1F2937] transition-colors duration-300 group flex items-center justify-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                            <span className="relative">
                                Proč se mnou?
                                <span className="block h-[1px] w-0 group-hover:w-full bg-[#1F2937] transition-all duration-500 absolute -bottom-2 left-0"></span>
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
