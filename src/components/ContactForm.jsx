import React, { useRef, useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
    const sectionRef = useRef(null);
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Odesílám...");
        const formData = new FormData(event.target);

        try {
            const formDataObj = Object.fromEntries(formData.entries());

            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    service_id: "service_2kgi615",
                    template_id: "template_9ll3bva",
                    user_id: "eebfPSgvcBLdZFNbT",
                    template_params: {
                        name: formDataObj.name,
                        phone: formDataObj.phone,
                        email: formDataObj.email,
                        message: formDataObj.message
                    }
                })
            });

            if (response.ok) {
                setResult("Zpráva odeslána ✓");
                event.target.reset();
                setTimeout(() => {
                    setResult("");
                }, 5000);
            } else {
                console.log("Error", response);
                setResult("Něco se pokazilo. Zkuste to znovu.");
                setTimeout(() => {
                    setResult("");
                }, 3000);
            }
        } catch (error) {
            console.error("Submission Error", error);
            setResult("Chyba sítě. Zkuste to znovu.");
            setTimeout(() => {
                setResult("");
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    useGSAP(() => {
        const elements = gsap.utils.toArray('.contact-element');
        const animations = [];

        elements.forEach((element) => {
            const anim = gsap.fromTo(element,
                { y: 150, opacity: 0 },
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
        <>
            <style>{`
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus, 
                textarea:-webkit-autofill,
                textarea:-webkit-autofill:hover,
                textarea:-webkit-autofill:focus {
                    -webkit-box-shadow: 0 0 0px 1000px #E1DFE2 inset !important;
                    -webkit-text-fill-color: #1F2937 !important;
                    transition: background-color 5000s ease-in-out 0s;
                }
            `}</style>
            <section id="kontakt" ref={sectionRef} className="bg-[#E1DFE2] py-16 lg:py-20 relative overflow-hidden">

                {/* Top Header Section */}
                <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end pb-10 lg:pb-12 border-b border-[#1F2937]/10 contact-element">
                    <div>
                        <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-6">
                            Kontakt
                        </p>
                        <h2 className="font-playfair text-[40px] md:text-5xl lg:text-[64px] leading-[1.1] text-[#1F2937] font-normal tracking-tight">
                            Pojďme nastavit<br />
                            <span className="italic text-[#B69E57]">vaše finance správně.</span>
                        </h2>
                    </div>
                    <div className="flex lg:justify-end">
                        <p className="font-helvetica text-sm sm:text-[15px] text-[#404042] max-w-sm leading-[1.6] lg:text-right">
                            Ať už řešíte hypotéku, zabezpečení rodiny, nebo jen chcete vědět, že jsou vaše peníze v bezpečí. Jsem tu pro vás.
                        </p>
                    </div>
                </div>

                {/* Bottom Content Section */}
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 contact-element">

                    {/* Left Side: Form */}
                    <div className="lg:col-span-8 px-6 lg:px-20 py-10 lg:py-12 lg:border-r border-[#1F2937]/10">
                        <form onSubmit={onSubmit} className="space-y-8 lg:space-y-10">

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                                <div className="relative group">
                                    <label htmlFor="name" className="block text-[9px] font-montserrat font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-4">Jméno a příjmení *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Jan Novák"
                                        className="w-full bg-transparent border-0 border-b border-[#1F2937]/20 px-0 py-3 font-montserrat text-sm sm:text-[15px] font-normal text-[#1F2937] placeholder-gray-400 focus:ring-0 focus:border-[#B69E57] transition-colors outline-none"
                                    />
                                </div>
                                <div className="relative group">
                                    <label htmlFor="phone" className="block text-[9px] font-montserrat font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-4">Telefon</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="+420"
                                        className="w-full bg-transparent border-0 border-b border-[#1F2937]/20 px-0 py-3 font-montserrat text-sm sm:text-[15px] font-normal text-[#1F2937] placeholder-gray-400 focus:ring-0 focus:border-[#B69E57] transition-colors outline-none"
                                    />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="relative group">
                                <label htmlFor="email" className="block text-[9px] font-montserrat font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-4">E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="jan@novak.cz"
                                    className="w-full bg-transparent border-0 border-b border-[#1F2937]/20 px-0 py-3 font-montserrat text-sm sm:text-[15px] font-normal text-[#1F2937] placeholder-gray-400 focus:ring-0 focus:border-[#B69E57] transition-colors outline-none"
                                />
                            </div>

                            {/* Row 3 */}
                            <div className="relative group">
                                <label htmlFor="message" className="block text-[9px] font-montserrat font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-4">Jak vám mohu pomoci? *</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="2"
                                    placeholder="Rád/a bych s vámi probral/a naši hypotéku..."
                                    className="w-full bg-transparent border-0 border-b border-[#1F2937]/20 px-0 py-3 font-montserrat text-sm sm:text-[15px] font-normal text-[#1F2937] placeholder-gray-400 focus:ring-0 focus:border-[#B69E57] transition-colors outline-none resize-none"
                                ></textarea>
                            </div>

                            {/* Action Row */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group flex items-center justify-center gap-4 py-4 px-10 font-montserrat tracking-[0.2em] uppercase font-bold text-[11px] rounded-md transition-all duration-300 w-full sm:w-auto ${isSubmitting || result === "Zpráva odeslána ✓"
                                            ? "bg-[#1F2937] text-white cursor-not-allowed"
                                            : "bg-[#B69E57] hover:bg-[#9C874B] text-white"
                                        }`}
                                >
                                    {result === "" ? "Odeslat zprávu" : result}
                                    {result === "" && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                                </button>
                                <p className="text-[10px] text-gray-500 font-helvetica max-w-[200px] leading-relaxed">
                                    Odesláním formuláře souhlasíte se<br className="hidden sm:block" />{' '}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.dispatchEvent(new Event('openGDPR'));
                                        }}
                                        className="underline underline-offset-2 decoration-[#B69E57]/50 hover:text-[#B69E57] hover:decoration-[#B69E57] transition-colors duration-300"
                                    >
                                        zpracováním osobních údajů
                                    </button>.
                                </p>
                            </div>

                        </form>
                    </div>

                    {/* Right Side: Info */}
                    <div className="lg:col-span-4 px-6 lg:px-16 py-10 lg:py-12 border-t lg:border-t-0 border-[#1F2937]/10 flex flex-col gap-8 lg:gap-10">
                        <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57]">Kde mě najdete</p>

                        <div>
                            <p className="font-montserrat text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-3">Adresa</p>
                            <p className="font-playfair text-xl sm:text-[22px] text-[#1F2937] font-normal leading-snug">Zahradní 46<br />Kolín III, 280 02</p>
                        </div>

                        <div>
                            <p className="font-montserrat text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-3">Telefon</p>
                            <a href="tel:+420773964522" className="font-playfair text-xl sm:text-[22px] text-[#1F2937] font-normal hover:text-[#B69E57] transition-colors whitespace-nowrap">+420 773 964 522</a>
                        </div>

                        <div>
                            <p className="font-montserrat text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-3">E-mail</p>
                            <a href="mailto:lucie.rodanova@4fin.cz" className="font-playfair text-xl sm:text-[22px] text-[#1F2937] font-normal hover:text-[#B69E57] transition-colors leading-snug block">lucie.rodanova@<br className="hidden sm:block" />4fin.cz</a>
                        </div>

                        <div>
                            <p className="font-montserrat text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-3">IČO</p>
                            <p className="font-playfair text-xl sm:text-[22px] text-[#1F2937] font-normal leading-snug block">00961108</p>
                        </div>

                        <div>
                            <p className="font-montserrat text-[9px] font-semibold tracking-[0.2em] uppercase text-[#404042] mb-3">Sociální sítě</p>
                            <div className="flex items-center gap-5 mt-2">
                                <a href="https://instagram.com/lucie.rodanova_leadersfinance" target="_blank" rel="noreferrer" className="text-[#1F2937] hover:text-[#B69E57] hover:-translate-y-1 transition-all">
                                    <Instagram size={24} strokeWidth={1.5} />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100063497562888" target="_blank" rel="noreferrer" className="text-[#1F2937] hover:text-[#B69E57] hover:-translate-y-1 transition-all">
                                    <Facebook size={24} strokeWidth={1.5} />
                                </a>
                                <a href="https://www.linkedin.com/in/lucie-roďanová/" target="_blank" rel="noreferrer" className="text-[#1F2937] hover:text-[#B69E57] hover:-translate-y-1 transition-all">
                                    <Linkedin size={24} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ContactForm;
