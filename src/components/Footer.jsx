import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1F2937] text-gray-300 py-16 border-t border-[#1F2937]"> {/* Added matching top border just in case */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Column 1: Brand & Socials */}
                <div className="lg:col-span-4">
                    <h3 className="font-playfair text-3xl text-white font-normal mb-2 tracking-wide">
                        Lucie Roďanová
                    </h3>
                    <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-6">
                        Finanční poradenství
                    </p>

                    <div className="w-8 h-px bg-[#B69E57] mb-6"></div>

                    <p className="font-helvetica text-sm leading-relaxed text-gray-400 mb-8 max-w-sm">
                        Pomáhám vám dělat správná finanční rozhodnutí a budovat stabilní budoucnost.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/lucie.rodanova_leadersfinance/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-[#B69E57] hover:text-[#B69E57] transition-all text-gray-400">
                            <Instagram size={18} strokeWidth={1.5} />
                        </a>
                        <a href="https://www.linkedin.com/in/lucie-ro%C4%8Fanov%C3%A1/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-[#B69E57] hover:text-[#B69E57] transition-all text-gray-400">
                            <Linkedin size={18} strokeWidth={1.5} />
                        </a>
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                const profileId = '100063497562888';
                                const fbAppUrl = `fb://profile/${profileId}`;
                                const fbWebUrl = `https://www.facebook.com/profile.php?id=${profileId}`;
                                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                                if (isMobile) {
                                    window.location.href = fbAppUrl;
                                    setTimeout(() => {
                                        window.location.href = fbWebUrl;
                                    }, 1000);
                                } else {
                                    window.open(fbWebUrl, '_blank', 'noreferrer');
                                }
                            }}
                            className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-[#B69E57] hover:text-[#B69E57] transition-all text-gray-400"
                        >
                            <Facebook size={18} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Column 2: Links */}
                <div className="lg:col-span-2 lg:col-start-6">
                    <h4 className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-8">
                        Prozkoumat
                    </h4>
                    <ul className="space-y-4 font-helvetica text-sm text-gray-400">
                        <li><a href="#sluzby" className="hover:text-white transition-colors duration-300">Služby</a></li>
                        <li><a href="#o-mne" className="hover:text-white transition-colors duration-300">O mně</a></li>
                        <li><a href="#reference" className="hover:text-white transition-colors duration-300">Reference</a></li>
                        <li><a href="#tym" className="hover:text-white transition-colors duration-300">Tým</a></li>
                        <li><a href="#kontakt" className="hover:text-white transition-colors duration-300">Kontakt</a></li>
                    </ul>
                </div>

                {/* Column 3: Legal */}
                <div className="lg:col-span-3">
                    <h4 className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-8">
                        Právní doložky
                    </h4>
                    <ul className="space-y-4 font-helvetica text-sm text-gray-400">
                        <li>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.dispatchEvent(new Event('openGDPR'));
                                }}
                                className="hover:text-white transition-colors duration-300 pointer-events-auto text-left"
                            >
                                Ochrana osobních údajů (GDPR)
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.dispatchEvent(new Event('openCookieSettings'));
                                }}
                                className="hover:text-white transition-colors duration-300 pointer-events-auto"
                            >
                                Používání Cookies (Nastavení)
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Certifications */}
                <div className="lg:col-span-2">
                    <h4 className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-8">
                        Certifikace
                    </h4>
                    <p className="font-helvetica text-[13px] leading-relaxed text-gray-400 mb-6">
                        Působím pod značkou Leaders Finance s.r.o. ve spolupráci se společností <a href="https://www.4fin.cz" target="_blank" rel="noopener noreferrer" className="text-[#B69E57] font-semibold hover:text-white transition-colors duration-300">4fin Better Together, a.s.</a>, vázaným zástupcem společnosti Broker Trust, a.s., registrované u ČNB.
                    </p>
                    <ul className="flex flex-col space-y-2 font-helvetica text-[11px] text-gray-500">
                        <li>
                            <a href="https://www.4fin.cz/ochrana-osobnich-udaju" target="_blank" rel="noopener noreferrer" className="hover:text-[#B69E57] transition-colors duration-300 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#B69E57]/80"></span>
                                Ochrana osobních údajů (4fin)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.brokertrust.cz/pro-klienty/" target="_blank" rel="noopener noreferrer" className="hover:text-[#B69E57] transition-colors duration-300 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#B69E57]/80"></span>
                                Informace pro klienty (Broker Trust)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Area */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <p className="font-helvetica text-xs text-gray-500 tracking-wider">
                    &copy; {new Date().getFullYear()} Lucie Roďanová.
                </p>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-xs font-helvetica tracking-wider text-gray-500">
                    <p>Vytvořil <a href="https://ozeman.cz" className="hover:text-white transition-colors">ozeman.cz</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
