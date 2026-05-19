import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Default internal state for preferences
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Read existing consent on mount
        const savedConsent = localStorage.getItem('cookieConsent');
        if (!savedConsent) {
            setTimeout(() => {
                setIsVisible(true);
            }, 10000); // 10s delay
        } else {
            try {
                setPreferences(JSON.parse(savedConsent));
            } catch (e) {
                // fallback
            }
        }

        // Listener for opening cookie settings from the footer
        const openSettings = () => {
            setShowModal(true);
            setIsVisible(false); // Hide banner if it was somehow visible
        };

        window.addEventListener('openCookieSettings', openSettings);

        return () => {
            window.removeEventListener('openCookieSettings', openSettings);
        };
    }, []);

    const handleAcceptAll = () => {
        const fullConsent = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        saveConsent(fullConsent);
    };

    const handleRejectAll = () => {
        const minimalConsent = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        saveConsent(minimalConsent);
    };

    const handleSavePreferences = () => {
        saveConsent(preferences);
    };

    const saveConsent = (updatedPreferences) => {
        localStorage.setItem('cookieConsent', JSON.stringify(updatedPreferences));
        setPreferences(updatedPreferences);
        setIsVisible(false);
        setShowModal(false);
    };

    const handleToggle = (type) => {
        if (type === 'necessary') return; // Cannot toggle necessary
        setPreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    // If neither is visible, render nothing
    if (!isVisible && !showModal) return null;

    return (
        <>
            {/* MINI BANNER */}
            {isVisible && !showModal && (
                <div className="fixed bottom-0 left-0 w-full z-[100] p-4 lg:p-6 pointer-events-none">
                    <div className="max-w-5xl mx-auto bg-[#1F2937] text-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pointer-events-auto border border-gray-700">
                        <div className="flex-1">
                            <h3 className="font-playfair text-xl md:text-2xl mb-2 text-white">Respektuji vaše soukromí</h3>
                            <p className="font-helvetica text-sm text-gray-400 leading-relaxed max-w-xl">
                                Tyto webové stránky používají cookies výhradně pro zajištění základní funkčnosti, analýzu návštěvnosti a pro personalizaci obsahu. Můžete s tím buď souhlasit, s úsměvem odmítnout, nebo si vše podrobně nastavit.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
                            <button 
                                onClick={() => setShowModal(true)}
                                className="px-6 py-3 font-montserrat text-[11px] uppercase tracking-wider font-semibold text-gray-300 hover:text-white transition-colors border border-gray-600 hover:border-gray-400 rounded w-full sm:w-auto"
                            >
                                Nastavení
                            </button>
                            <button 
                                onClick={handleRejectAll}
                                className="px-6 py-3 font-montserrat text-[11px] uppercase tracking-wider font-semibold text-gray-300 hover:text-white transition-colors border border-gray-600 hover:border-gray-400 rounded w-full sm:w-auto"
                            >
                                Jen nezbytné
                            </button>
                            <button 
                                onClick={handleAcceptAll}
                                className="px-8 py-3 bg-[#B69E57] hover:bg-[#9C874B] text-white font-montserrat text-[11px] uppercase tracking-wider font-bold rounded transition-colors shadow-lg w-full sm:w-auto"
                            >
                                Přijmout vše
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* FULL DETAILED MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-[110] bg-[#1F2937]/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[#FCFCFC] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden relative">
                        
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-gray-200 flex justify-between items-center bg-white sticky top-0 z-10 shrink-0">
                            <h2 className="font-playfair text-2xl md:text-3xl text-[#1F2937]">Nastavení Cookies</h2>
                            <button 
                                onClick={() => {
                                    setShowModal(false);
                                    if (!localStorage.getItem('cookieConsent')) setIsVisible(true);
                                }}
                                className="p-2 text-gray-400 hover:text-[#B69E57] transition-colors rounded-full hover:bg-gray-100"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 overflow-y-auto font-helvetica flex-1">
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
                                Níže si můžete vybrat, k jakým účelům budeme sbírat data o vaší návštěvě. Vaše data chraním a nikdy je neposkytnu žádným třetím stranám mimo absolutně nutnou technickou infrastrukturu webu.
                            </p>

                            <div className="space-y-6">
                                {/* Necessary */}
                                <div className="border border-gray-200 rounded-xl p-5 md:p-6 bg-gray-50/50 relative overflow-hidden group hover:border-[#B69E57]/30 transition-colors">
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <h3 className="font-montserrat font-bold text-[#1F2937] uppercase tracking-wider text-xs md:text-sm pt-1">Nutné (Technické)</h3>
                                        <div className="shrink-0 flex items-center gap-2">
                                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Vždy aktivní</span>
                                            <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-not-allowed">
                                                <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                                                    <Check size={12} className="text-gray-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Základní cookies, bez kterých by stránka vůbec nedokázala fungovat. Neobsahují žádná osobní data a nelze je vypnout.
                                    </p>
                                </div>

                                {/* Analytics */}
                                <div className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white relative overflow-hidden group hover:border-[#B69E57]/50 transition-colors">
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <h3 className="font-montserrat font-bold text-[#1F2937] uppercase tracking-wider text-xs md:text-sm pt-1">Analytické</h3>
                                        <button 
                                            onClick={() => handleToggle('analytics')}
                                            className="shrink-0 flex items-center gap-2 focus:outline-none"
                                        >
                                            <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${preferences.analytics ? 'bg-[#B69E57]' : 'bg-gray-300'}`}>
                                                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${preferences.analytics ? 'right-1' : 'left-1'}`}>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Slouží k pochopení, jak se na mém webu chováte. Zajímají mě čtenosti článků a navštěvnost sekcí, díky kterým pak mohu web ladit přesně Vám na míru. (např. Google Analytics)
                                    </p>
                                </div>

                                {/* Marketing */}
                                <div className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white relative overflow-hidden group hover:border-[#B69E57]/50 transition-colors">
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <h3 className="font-montserrat font-bold text-[#1F2937] uppercase tracking-wider text-xs md:text-sm pt-1">Marketingové</h3>
                                        <button 
                                            onClick={() => handleToggle('marketing')}
                                            className="shrink-0 flex items-center gap-2 focus:outline-none"
                                        >
                                            <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${preferences.marketing ? 'bg-[#B69E57]' : 'bg-gray-300'}`}>
                                                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${preferences.marketing ? 'right-1' : 'left-1'}`}>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Používají se pro zobrazování relevantních reklam a obsahu od třetích stran. Mně pomáhají s investicemi do marketingu a efektivitou komunikace na sociálních sítích. (např. Facebook Pixel)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer / Actions */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0 flex flex-col md:flex-row items-center gap-4 justify-between">
                            <button 
                                onClick={handleRejectAll}
                                className="font-montserrat text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-500 hover:text-[#1F2937] transition-colors"
                            >
                                Zamítnout vše
                            </button>
                            
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <button 
                                    onClick={handleSavePreferences}
                                    className="px-6 py-3 font-montserrat text-[11px] uppercase tracking-wider font-semibold text-[#1F2937] hover:text-[#B69E57] bg-white border border-gray-200 hover:border-[#B69E57] rounded transition-colors w-full sm:w-auto"
                                >
                                    Uložit výběr
                                </button>
                                <button 
                                    onClick={handleAcceptAll}
                                    className="px-8 py-3 bg-[#B69E57] hover:bg-[#9C874B] text-white font-montserrat text-[11px] uppercase tracking-wider font-bold rounded transition-colors shadow-md w-full sm:w-auto"
                                >
                                    Přijmout vše
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent
