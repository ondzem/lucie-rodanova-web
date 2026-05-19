import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // 1. Image scale and clip reveal
        tl.fromTo('.hero-photo-wrapper', 
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5, ease: 'power4.inOut' }
        )
        .fromTo('.hero-bg-img',
            { scale: 1.2 },
            { scale: 1, duration: 2, ease: 'power2.out' },
            '-=1.5' // start simultaneously with clip
        );

        // 2. Line masking for headings
        tl.from('.hero-line-text', {
            yPercent: 120,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
            rotationZ: 2,
            transformOrigin: '0% 100%'
        }, '-=1.2');

        // 3. Golden line draw effect
        tl.fromTo('.hero-divider', 
            { width: '0%', opacity: 0 },
            { width: '4rem', opacity: 1, duration: 1, ease: 'power3.out' },
            '-=0.8'
        );

        // 4. Fade up rest of content
        tl.from('.hero-body', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        }, '-=0.8');

        // Existing Parallax on scroll
        gsap.to('.hero-bg-img', {
            y: 40,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="bg-[#FCFCFC] pt-[120px] md:pt-[130px] lg:pt-[24px] pb-6 px-0 lg:px-8 w-full min-h-screen flex flex-col"
        >
            <div className="relative w-full flex-grow rounded-none lg:rounded-2xl overflow-hidden flex flex-col lg:flex-row lg:items-end min-h-[85vh] bg-[#FCFCFC]">

                <div className="hero-photo-wrapper relative lg:absolute w-[calc(100%-20px)] mx-auto lg:w-auto lg:mx-0 h-[52vh] min-h-[115vw] sm:h-[50vh] sm:min-h-[65vw] md:min-h-[55vw] lg:min-h-0 lg:max-h-none lg:h-auto lg:inset-[-10%] overflow-hidden rounded-md lg:rounded-none flex items-center justify-center flex-shrink-0 lg:flex-shrink">
                    <div className="hero-bg-img w-full h-full relative">
                        {/* Desktop Image */}
                        <img
                            className="hidden lg:block w-full h-full object-cover opacity-95"
                            src="/grey rodanova.jpg"
                            alt="Lucie Roďanová - Profesionální finanční služby"
                            style={{ objectPosition: "100% 5%", transform: "scale(0.86) translate(-1%, -2%)" }}
                            fetchpriority="high"
                            loading="eager"
                        />
                        {/* Tablet Image */}
                        <img
                            className="hidden sm:block lg:hidden w-full h-full object-cover object-center opacity-95"
                            src="/tablet uvodka rodanova.webp"
                            alt="Lucie Roďanová - Profesionální finanční služby"
                            fetchpriority="high"
                            loading="eager"
                        />
                        {/* Mobile Image */}
                        <img
                            className="block sm:hidden w-full h-full object-cover object-bottom opacity-95"
                            src="/mobile uvodka rodanova.webp"
                            alt="Lucie Roďanová - Profesionální finanční služby"
                            fetchpriority="high"
                            loading="eager"
                        />
                    </div>
                </div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pb-16 lg:pb-40 pt-10 lg:pt-32 flex-grow flex flex-col justify-center lg:block">
                    <div className="max-w-3xl space-y-6 md:space-y-4 lg:space-y-[23px]">
                        <h1 className="font-playfair text-[#1F2937] leading-[1.1] tracking-tight flex flex-col pt-2">
                            <span className="overflow-hidden pb-1">
                                <span className="hero-line-text block text-[32px] md:text-[40px] lg:text-[50px] font-light italic opacity-90 pb-0 lg:pb-0">
                                    Vaše cesta k
                                </span>
                            </span>
                            <span className="overflow-hidden pb-3 lg:-mt-2">
                                <span className="hero-line-text block text-[36px] xs:text-[40px] md:text-[44px] lg:text-[76px] font-medium whitespace-nowrap md:whitespace-normal">
                                    Finanční svobodě.
                                </span>
                            </span>
                        </h1>
                        
                        <div className="hero-divider h-[1px] lg:hidden mb-4 mt-2 bg-[#B69E57]"></div>

                        <div className="hero-body max-w-lg mb-4">
                            <p className="font-helvetica text-[#404042] opacity-90 text-[17px] leading-relaxed font-light">
                                Pomůžu vám udělat jasno ve financích, nastavit funkční systém a mít klid, že vaše rozhodnutí dávají dlouhodobě smysl.
                            </p>
                        </div>

                        <div className="hero-body flex flex-col sm:flex-row items-center sm:justify-start gap-5 lg:gap-6 pt-4">
                            <a href="#kontakt" className="w-full sm:w-auto bg-[#B69E57] hover:bg-[#9C874B] text-white px-9 py-4 rounded-md font-helvetica text-[13px] lg:text-sm uppercase lg:normal-case tracking-widest lg:tracking-wide font-medium shadow-md transition-all duration-300 flex items-center justify-center">
                                Sjednat konzultaci
                            </a>

                            <a href="#sluzby" className="font-helvetica text-sm tracking-wide font-medium text-[#1F2937]/90 hover:text-[#1F2937] transition-colors duration-300 group flex items-center gap-3">
                                <span className="relative">
                                    Moje služby
                                    <span className="block h-[1px] w-0 group-hover:w-full bg-[#1F2937] transition-all duration-500 absolute -bottom-2 left-0"></span>
                                </span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
