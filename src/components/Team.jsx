import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    const teamMembers = [
        { 
            name: 'Lucie Roďanová', 
            role: 'Oblastní ředitelka', 
            phone: '773 964 522', 
            email: 'lucie.rodanova@4fin.cz', 
            photo: '/Rodanova tym fotka.webp', 
            desc: "Jako oblastní ředitelka finančního poradenství a vedoucí osobnost Leaders Finance vnímám za každým grafem především člověka, rodinu a jejich sny. Čísla jsou pro mě výsledkem důvěry, ne cílem samotným.\n\nSvoji práci stavím na lidskosti, férovosti a společných hodnotách. Věřím, že skutečný poradce nejdřív naslouchá a teprve potom pomáhá. Jak ráda říkám: „Smlouva není podpis. Smlouva je závazek. A servis je klíč.“\n\nSilně věřím ve finanční nezávislost – zejména žen. Dnes vedu tým profesionálů, kteří chtějí víc než jen práci. Společně rosteme a já jim s hrdostí pomáhám ukazovat cestu." 
        },
        { 
            name: 'Sarah Roďanová', 
            role: 'Koncipientka', 
            phone: '777 578 228', 
            email: 'sarah.rodanova@4fin.cz', 
            photo: '/Sarah Team foto.webp', 
            desc: "Pomáhám klientům orientovat se ve světě financí a hledám řešení s dlouhodobým smyslem. Věřím, že individuální přístup je klíčem k důvěře a budování pevných vztahů." 
        },
        { 
            name: 'Lucie Dubnová', 
            role: 'Odborná asistentka', 
            phone: '+420 737 656 549', 
            email: 'lucie.dubnova@4fin.cz', 
            photo: '/Dubnova - rodanova.webp', 
            desc: "Starám se o bezchybný chod administrativy a jsem spolehlivou podporou celého týmu. Pečlivost a efektivní řešení každodenních výzev jsou mým standardem." 
        },
        { 
            name: 'Petr Nevole', 
            role: 'TOP Konzultant', 
            phone: '777 567 666', 
            email: 'petr.nevole@4fin.cz', 
            photo: '/Nevole - rodanova.webp', 
            desc: "Ve financích působím od roku 2008. Mou prioritou není rychlý prodej, ale dlouhodobá důvěra, lidský přístup a precizně nastavená strategie pro každou vaši životní etapu." 
        },
        { 
            name: 'Jakub Minařčík', 
            role: 'Samostatný konzultant', 
            phone: '732 499 252', 
            email: 'jakub.minarcik@4fin.cz', 
            photo: '/Minarcik - rodanova.webp', 
            desc: "Za každým číslem vidím lidský příběh a životní sny. Odmítám tabulkové řešení – mým cílem je být upřímným parťákem, který složité finance vysvětlí jednoduše a s pochopením." 
        },
        { 
            name: 'Ing. Simona Pavelková', 
            role: 'Senior konzultantka', 
            phone: '+420 605 384 990', 
            email: 'simona.pavelkova@4fin.cz', 
            photo: '/Pavelkova - rodanova.webp', 
            desc: "Mým posláním je přinést vám klid a jistotu bezpečných financí pod jednou střechou. Zakládám si na kvalitě a lidském přístupu, díky kterému jsou vaše peníze smysluplně pod kontrolou." 
        },
        { 
            name: 'Jaroslava Fliegerová', 
            role: 'Samostatná konzultantka', 
            phone: '+420 723 442 552', 
            email: 'jaroslava.fliegerova@4fin.cz', 
            photo: null, 
            desc: "Odbornost. Důvěra. Lidskost." 
        }
    ];

    useGSAP(() => {
        const title = sectionRef.current.querySelector('.team-heading');
        const cards = gsap.utils.toArray('.team-card');
        const animations = [];
        let mm = gsap.matchMedia();

        // Title Animation (Slides in from the left)
        if (title) {
            const titleAnim = gsap.fromTo(title,
                { x: -50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 90%',
                        toggleActions: 'play none play none'
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: 'expo.out',
                    overwrite: 'auto'
                }
            );
            animations.push(titleAnim);
        }

        // Cards Staggered Animation
        if (cards.length > 0) {
            const cardsAnim = gsap.fromTo(cards,
                { x: 100, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current.querySelector('.team-slider-container'),
                        start: 'top 85%',
                        toggleActions: 'play none play none'
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: 'expo.out',
                    overwrite: 'auto'
                }
            );
            animations.push(cardsAnim);
        }

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            onLeave: () => {
                animations.forEach(anim => anim && anim.pause && anim.pause(0));
            },
            onLeaveBack: () => {
                animations.forEach(anim => anim && anim.pause && anim.pause(0));
            }
        });

        return () => mm.revert();
    }, { scope: sectionRef });

    const getInitials = (name) => {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return `${parts[0].charAt(0)}${parts[1].charAt(0)}`;
        }
        return name.charAt(0);
    };

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <section id="tym" ref={sectionRef} className="bg-[#FCFCFC] py-24 lg:py-32 relative overflow-hidden">
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 h-full relative z-10">
                
                {/* Header Block exactly matching Testimonials layout format */}
                <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 lg:mb-20 team-heading">
                    <div>
                        <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-4">
                            Náš tým
                        </p>
                        <h2 className="font-playfair text-[38px] sm:text-[44px] md:text-5xl lg:text-[60px] leading-[1.1] text-[#1F2937] font-medium italic tracking-tight xl:whitespace-nowrap">
                            Tým založený na vztazích.
                        </h2>
                    </div>
                    
                    <p className="font-montserrat text-xs sm:text-[13px] text-gray-500 max-w-sm leading-relaxed mt-6 xl:mt-0 md:pb-2 text-left xl:text-right xl:whitespace-nowrap">
                        Lidé, kteří stojí za vašimi financemi.
                    </p>
                </div>

                {/* Team Slider Container */}
                <div 
                    className="team-slider-container w-[100vw] relative left-1/2 -translate-x-1/2 lg:w-full lg:left-0 lg:translate-x-0"
                >
                    <div 
                        ref={sliderRef}
                        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 lg:px-0 gap-4 lg:gap-[2px]"
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="team-card relative group overflow-hidden bg-[#1A222F] 
                                    w-[85vw] sm:w-[45vw] lg:w-[350px] xl:w-[400px] 
                                    shrink-0 snap-start 
                                    aspect-[4/5] lg:aspect-auto lg:h-[500px] xl:h-[600px]
                                    flex flex-col justify-end p-6 lg:p-8 cursor-pointer select-none"
                            >
                                {/* Background Image Loading */}
                                {member.photo && (
                                    <img 
                                        src={member.photo} 
                                        alt={member.name} 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 opacity-75 group-hover:opacity-30 z-0" 
                                        loading="lazy"
                                    />
                                )}
                                
                                {/* Initials fallback for items missing valid photos to match design flair */}
                                {!member.photo && (
                                    <div className="absolute inset-0 flex items-center justify-center font-playfair text-[80px] text-[#B69E57] italic opacity-30 group-hover:opacity-5 transition-opacity duration-700 z-0 select-none">
                                        {getInitials(member.name)}
                                    </div>
                                )}

                                {/* Base Gradient to ensure default text readability */}
                                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#1A222F]/70 via-transparent to-transparent opacity-100 transition-opacity duration-700 group-hover:opacity-0 z-10 pointer-events-none"></div>

                                {/* Deep Dark Overlay exclusively for HOVER state text legibility */}
                                <div className="absolute inset-0 bg-[#171E2B]/90 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 z-20 pointer-events-none"></div>

                                {/* Default State Text (Bottom Left Aligned) */}
                                <div className="relative z-30 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 group-hover:translate-y-6 w-full">
                                    <h4 className="font-playfair text-xl sm:text-[22px] font-normal text-white mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.24em] font-semibold text-[#B69E57] uppercase mb-1">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Hover State Text (Centered Content Layout per Reference) */}
                                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-6 lg:px-8 text-center opacity-0 transition-opacity duration-[700ms] group-hover:opacity-100">
                                    
                                    <p className="font-montserrat text-[9px] tracking-[0.24em] font-semibold text-[#B69E57] uppercase mb-4 translate-y-6 group-hover:translate-y-0 transition-all duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
                                        {member.role}
                                    </p>
                                    
                                    <h4 className="font-playfair text-[28px] sm:text-[32px] lg:text-[36px] font-normal text-white leading-[1.1] translate-y-6 group-hover:translate-y-0 transition-all duration-[700ms] delay-[50ms] ease-[cubic-bezier(0.23,1,0.32,1)] w-full">
                                        {member.name.split(' ')[0]}<br/>{member.name.split(' ').slice(1).join(' ')}
                                    </h4>
                                    
                                    <div className="w-12 h-[1px] bg-[#B69E57] my-5 translate-y-6 group-hover:translate-y-0 transition-all duration-[700ms] delay-[100ms] ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                                    
                                    <div className="font-helvetica text-xs sm:text-[13px] text-gray-300 translate-y-6 group-hover:translate-y-0 transition-all duration-[700ms] delay-[150ms] ease-[cubic-bezier(0.23,1,0.32,1)] leading-[1.6] max-w-[240px] md:max-w-[280px] mb-8 overflow-y-auto max-h-[160px] xl:max-h-[240px] hide-scrollbar pointer-events-auto flex flex-col gap-2 text-center">
                                        {member.desc.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {/* Contact Information on Hover */}
                                    <div className="flex flex-col gap-2 translate-y-6 group-hover:translate-y-0 transition-all duration-[700ms] delay-[200ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
                                        <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="font-helvetica text-xs tracking-wider text-white hover:text-[#B69E57] transition-colors duration-300">
                                            {member.phone}
                                        </a>
                                        <a href={`mailto:${member.email}`} className="font-helvetica text-xs tracking-wider text-white hover:text-[#B69E57] transition-colors duration-300">
                                            {member.email}
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows for Side Scroll */}
                <div className="flex gap-4 mt-6 px-2 lg:px-0">
                    <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-[#1F2937]/20 flex items-center justify-center text-[#1F2937] hover:border-[#B69E57] hover:text-[#B69E57] hover:bg-[#B69E57]/5 transition-all group focus:outline-none">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-[#1F2937]/20 flex items-center justify-center text-[#1F2937] hover:border-[#B69E57] hover:text-[#B69E57] hover:bg-[#B69E57]/5 transition-all group focus:outline-none">
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Team;
