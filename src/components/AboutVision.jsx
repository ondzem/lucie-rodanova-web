import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AboutVision = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.about-element',
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out'
            }
        );
    }, { scope: sectionRef });

    return (
        <section id="o-mne" ref={sectionRef} className="bg-[#1F2937] text-white py-20 lg:py-28 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 h-full relative z-10">

                <div className="flex flex-col lg:flex-row relative h-full w-full">

                    {/* Left Column */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-start relative pb-8 lg:pb-0 lg:pr-16 xl:pr-24 min-h-[auto] lg:min-h-[40vh] lg:pt-10">

                        {/* Subtitle top left (Mobile/Tablet only) */}
                        <p className="lg:hidden font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] about-element mb-4">
                            Proč se mnou?
                        </p>

                        <h2 className="font-playfair text-[38px] sm:text-[44px] md:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.1] tracking-tight about-element">
                            <span className="font-bold text-[#FCFCFC] block mb-0 sm:mb-2">
                                Se mnou máte
                            </span>
                            <span className="font-normal italic text-[#B69E57] block whitespace-normal lg:whitespace-nowrap">
                                finance pod kontrolou.
                            </span>
                        </h2>

                        {/* Subtitle bottom left (Desktop) */}
                        <p className="hidden lg:block absolute -bottom-6 left-0 font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] about-element">
                            Proč se mnou?
                        </p>
                    </div>

                    {/* Middle Divider (Desktop only) */}
                    <div className="hidden lg:block absolute left-[55%] top-0 bottom-[-40px] w-[1px] bg-white/5 about-element"></div>

                    {/* Right Column */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-end lg:pl-20 xl:pl-32 pt-10 lg:pt-0 pb-0 border-t border-white/5 lg:border-t-0 relative">

                        {/* Horizontal gold line */}
                        <div className="w-8 sm:w-12 h-[1px] bg-[#B69E57] mb-8 lg:mb-10 about-element"></div>

                        <div className="font-montserrat text-[15px] sm:text-[16px] xl:text-[17px] text-gray-300 leading-[1.9] space-y-4 lg:space-y-5 about-element pr-0 xl:pr-12">
                            <p>
                                Více než patnáct let zkušeností, jasná doporučení a dlouhodobě fungující systém, který chrání váš majetek, dává smysl vašim rozhodnutím a přináší klid.
                            </p>
                            <p>
                                Nepřehlcuji tabulkami ani grafikami – každý krok nastavíme společně, s důrazem na vaši budoucnost a stabilitu.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutVision;
