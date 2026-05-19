import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
    const headerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Služby', href: '#sluzby' },
        { name: 'O mně', href: '#o-mne' },
        { name: 'Reference', href: '#reference' },
        { name: 'Tým', href: '#tym' },
        // { name: 'Blog', href: '#blog' },
        { name: 'Kontakt', href: '#kontakt' },
    ];

    useGSAP(() => {
        // Only trigger the inner items so the header position stays completely untouched
        gsap.from('.header-anim-item', {
            y: 10,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
        });
    }, { scope: headerRef });

    return (
        <header 
            ref={headerRef} 
            className={`fixed w-full z-50 transition-all duration-500 flex items-center px-0 lg:px-8 ${
                scrolled || isMenuOpen 
                    ? 'bg-[#FCFCFC] shadow-sm py-0 top-0 border-b border-gray-100' 
                    : 'bg-transparent py-4 top-1 md:top-2 lg:top-4'
            }`}
        >
            <div className="max-w-[1400px] mx-auto w-full transition-all duration-500 px-6 md:px-12 lg:px-20">
                <div className={`flex justify-between items-center transition-all duration-500 ${scrolled || isMenuOpen ? 'h-20' : 'h-24'}`}>

                    {/* Logo */}
                    <div className="header-anim-item flex-shrink-0 flex items-center h-full ml-0">
                        <a href="#" className="flex items-center h-full group py-1">
                            <img 
                                src="/rodanova logo black.png" 
                                alt="Lucie Roďanová" 
                                className="max-h-16 xl:max-h-20 w-auto transition-[transform] duration-300"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
                        <div className="flex gap-4 xl:gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="header-anim-item font-helvetica text-[11px] xl:text-sm whitespace-nowrap uppercase tracking-wider font-semibold text-[#1F2937] hover:text-[#B69E57] transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="header-anim-item flex items-center">
                            <a
                                href="tel:+420773964522"
                                className="px-4 py-2.5 xl:px-8 xl:py-3 bg-[#B69E57] hover:bg-[#9C874B] text-white font-helvetica text-[11px] xl:text-sm whitespace-nowrap tracking-widest uppercase font-medium rounded-md transition-all duration-300 hover:scale-[1.02] shadow-sm ml-0 xl:ml-4"
                            >
                                +420 773 964 522
                            </a>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#1F2937] hover:text-[#B69E57] transition-colors duration-300 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-[99%] left-0 w-full bg-[#FCFCFC] z-40 flex flex-col justify-start shadow-xl rounded-b-2xl border-t border-gray-100/50">
                    <div className="px-6 space-y-2 flex flex-col items-center py-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center px-4 py-4 text-sm tracking-widest uppercase font-medium text-[#404042] hover:text-[#B69E57] hover:bg-gray-50 rounded-md transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="tel:+420773964522"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-6 block w-full text-center px-6 py-4 bg-[#B69E57] text-white text-sm tracking-widest uppercase font-medium rounded-md"
                        >
                            +420 773 964 522
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
