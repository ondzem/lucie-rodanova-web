import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const sectionRef = useRef(null);

    // Mockup texts mapping
    const mainPost = {
        category: 'HYPOTÉKY',
        date: '15. BŘEZNA 2026',
        title: 'Jak poznat, že máte nevýhodnou hypotéku?',
        excerpt: 'Zjistěte 3 hlavní varovné signály, které vám napoví, že platíte bance více, než musíte.',
        image: '/blog1.webp'
    };

    const sidePosts = [
        {
            category: 'BYDLENÍ',
            date: '2. ÚNORA 2026',
            title: 'Příprava na vlastní bydlení: Krok za krokem',
            excerpt: 'Sníte o vlastním domě? Zjistěte, jaké kroky podniknout ještě před tím, než si vyhlédnete nemovitost.'
        },
        {
            category: 'INVESTICE',
            date: '10. LEDNA 2026',
            title: 'Zajištění příjmu: Proč je důležitější než spoření',
            excerpt: 'Stavíte svou finanční jistotu na úsporách? Pojďme se podívat, proč vás samotné úspory nezachrání.'
        },
        {
            category: 'SPOŘENÍ',
            date: '12. ŘÍJNA 2025',
            title: 'Jak se připravit na konec fixace hypotéky',
            excerpt: 'Blíží se konec vaší fixace? Zjistěte, co dělat včas, aby vás nová sazba nepřekvapila.'
        }
    ];

    useGSAP(() => {
        const elements = gsap.utils.toArray('.blog-element');
        const animations = [];

        elements.forEach((element) => {
            const anim = gsap.fromTo(element,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        toggleActions: 'play none play none'
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

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            onLeave: () => {
                animations.forEach(anim => anim && anim.pause(0));
            },
            onLeaveBack: () => {
                animations.forEach(anim => anim && anim.pause(0));
            }
        });
    }, { scope: sectionRef });

    return (
        <section id="blog" ref={sectionRef} className="bg-[#FCFCFC] py-20 lg:py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
                
                {/* Header Area */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 lg:mb-20 blog-element">
                    <div>
                        <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-6">
                            Z Blogu
                        </p>
                        <h2 className="font-playfair text-[36px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#1F2937] font-normal tracking-tight xl:whitespace-nowrap">
                            Čtěte, inspirujte<br className="lg:hidden"/>
                            <span className="italic lg:ml-3">se, rozhodujte.</span>
                        </h2>
                    </div>
                    <a href="#" className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B69E57] hover:text-[#9C874B] transition-colors flex items-center gap-3 w-fit">
                        Všechny články
                        <span className="text-lg leading-none transform transition-transform hover:translate-x-1">→</span>
                    </a>
                </div>

                {/* Editorial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Main Big Article (Left) */}
                    <div className="lg:col-span-8 group cursor-pointer blog-element">
                        <div className="w-full aspect-[16/9] lg:h-[500px] bg-gray-100 overflow-hidden mb-8 lg:mb-10">
                            <img 
                                src={mainPost.image} 
                                alt={mainPost.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                loading="lazy"
                            />
                        </div>
                        <div className="flex items-center gap-4 font-montserrat text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-4">
                            <span className="text-[#B69E57]">{mainPost.category}</span>
                            <span className="text-gray-300">•</span>
                            <span>{mainPost.date}</span>
                        </div>
                        <h3 className="font-playfair text-2xl lg:text-3xl xl:text-4xl text-[#1F2937] font-normal mb-5 leading-snug group-hover:text-[#B69E57] transition-colors">
                            {mainPost.title}
                        </h3>
                        <p className="font-helvetica text-[#404042] text-sm lg:text-base leading-relaxed mb-8 max-w-2xl">
                            {mainPost.excerpt}
                        </p>
                        <div className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B69E57] flex items-center gap-3">
                            Číst článek
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                    </div>

                    {/* Small Articles Sidebar (Right) */}
                    <div className="lg:col-span-4 flex flex-col justify-between blog-element">
                        {sidePosts.map((post, index) => (
                            <div 
                                key={index} 
                                className={`group cursor-pointer py-8 lg:py-10 first:pt-0 border-[#1F2937]/10 
                                    ${index !== sidePosts.length - 1 ? 'border-b' : ''} 
                                    ${index === 2 ? 'hidden lg:block' : 'block'}`}
                            >
                                <div className="flex items-center gap-3 font-montserrat text-[8px] lg:text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-3">
                                    <span className="text-[#B69E57]">{post.category}</span>
                                    <span className="text-gray-300">•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h4 className="font-playfair text-xl lg:text-[22px] text-[#1F2937] font-normal mb-4 leading-snug group-hover:text-[#B69E57] transition-colors">
                                    {post.title}
                                </h4>
                                <p className="font-helvetica text-sm text-[#404042] leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Blog;
