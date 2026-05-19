import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const GDPRPage = ({ onClose }) => {
    // Scroll to top when mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#FCFCFC] text-[#404042] font-helvetica pb-24">
            
            {/* Header / Nav */}
            <header className="sticky top-0 w-full z-50 bg-[#FCFCFC]/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
                    <button 
                        onClick={onClose}
                        className="flex items-center gap-2 text-[#404042] hover:text-[#B69E57] transition-colors duration-300 font-montserrat text-sm tracking-widest uppercase font-semibold group"
                    >
                        <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                        Zpět na web
                    </button>
                    <img 
                        src="/rodanova logo black.png" 
                        alt="Lucie Roďanová" 
                        className="h-12 w-auto object-contain opacity-80 hidden md:block"
                    />
                </div>
            </header>

            {/* Content Area */}
            <main className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-20">
                
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1F2937] mb-6">
                    Informační memorandum
                </h1>
                <h2 className="font-montserrat text-sm md:text-md tracking-[0.1em] uppercase font-semibold text-[#B69E57] mb-12 lg:mb-16">
                    Informace o zpracování osobních údajů klientů a potenciálních klientů
                </h2>

                <div className="space-y-8 text-[#404042]/90 leading-relaxed text-sm md:text-base">
                    
                    <p>
                        Společnost <strong>4fin Better together, a.s.</strong>, IČO: 060 18 521, se sídlem Na Hřebenech II 1718/10, 140 00 Praha 4, zapsaná v obchodním rejstříku vedeném u Městského soudu v Praze pod sp. zn. B 22413 (dále jen „Společnost“), spolupracující se společností <strong>Broker Trust, a.s.</strong>, IČO: 264 39 719, se sídlem Hanusova 1411/18, Michle, 140 00 Praha 4 (dále jen „Broker Trust“), při poskytování služeb na finančním trhu, může zpracovávat osobní údaje klientů a potenciálních klientů. Vzhledem k tomu, že si vážím Vašeho soukromí a soukromí všech mých klientů, předkládám Vám níže (z pozice vázaného zástupce) informace o tom, jakým způsobem jsou osobní údaje nakládány a chráněny.
                    </p>
                    <p>
                        Společnost považuje za samozřejmé, že s osobními údaji bude nakládáno citlivě a vždy v souladu s Nařízením Evropského parlamentu a Rady (ES) 2016/679 ze dne 27. dubna 2016 (GDPR) a na něj navazujícími právními předpisy. Pokud dojde k jakékoli změně Vašich osobních údajů, prosíme o oznámení této skutečnosti na můj přímý kontakt nebo prostřednictvím e-mailové adresy <strong>gdpr@4fin.cz</strong>.
                    </p>

                    <div className="w-16 h-[1px] bg-[#B69E57] my-12"></div>

                    <h3 className="font-playfair text-2xl md:text-3xl text-[#1F2937] mt-12 mb-6">1. Zpracování osobních údajů pro Broker Trust</h3>
                    <p>
                        Jaké osobní údaje Společnost zpracovává? Může zpracovávat veškeré Vaše osobní údaje, které jste poskytli Broker Trust, zejména Vaše identifikační a kontaktní údaje a údaje nezbytné k poskytování služeb na finančním trhu (včetně zpracování finanční analýzy).
                    </p>
                    <p>
                        Za tímto účelem bude Společnost zpracovávat zejména, nikoliv však výlučně, Vaše následující osobní údaje:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                        <li><strong>identifikační údaje:</strong> oslovení, titul, jméno a příjmení, datum narození, obchodní jméno, IČO;</li>
                        <li><strong>kontaktní údaje:</strong> adresa trvalého případně přechodného pobytu či bydliště, e-mailová adresa, telefon, mobilní telefon;</li>
                        <li><strong>informace o zdravotním stavu:</strong> pouze pokud budete mít zájem o produkty, k jejichž poskytnutí jsou informace nezbytné (např. životní pojištění);</li>
                        <li><strong>další údaje:</strong> nezbytné k vytvoření nabídky (údaje o příjmech a výdajích, pohledávkách a závazcích atd.).</li>
                    </ul>
                    <p className="mt-6">
                        Zpracování Vašich osobních údajů je prováděno na základě Vašeho souhlasu (ve smyslu čl. 6 odst. 1 písm. a) Nařízení) a za účelem vypracování finanční analýzy a navazující nabídky produktů. Souhlas můžete kdykoli odvolat.
                    </p>

                     <div className="w-16 h-[1px] bg-gray-200 my-10"></div>

                    <h3 className="font-playfair text-2xl md:text-3xl text-[#1F2937] mt-12 mb-6">2. Zpracování údajů nad rámec spolupráce s Broker Trust</h3>
                    
                    <h4 className="font-montserrat font-bold text-[#1F2937] mt-8 mb-3">a) Údaje pro účely obchodní a marketingové komunikace</h4>
                    <p>
                        Pokud k tomu udělíte souhlas, bude Společnost a třetí osoby s ní propojené používat Vaše osobní údaje pro účely obchodní a marketingové komunikace spočívající zejména v zasílání elektronických obchodních sdělení ohledně nabídky služeb ze skupiny 4fin Holding, a.s. Souhlas můžete pochopitelně kdykoliv zrušit.
                    </p>

                    <h4 className="font-montserrat font-bold text-[#1F2937] mt-8 mb-3">b) Údaje zpracovávané na základě oprávněného zájmu</h4>
                    <p>
                        I bez Vašeho souhlasu bude Společnost zpracovávat Vaše osobní údaje, jejichž zpracování je nezbytné pro účely oprávněných zájmů Společnosti ve smyslu čl. 6 odst. 1 písm. f) Nařízení, zejména pro ochranu práv Společnosti v souvislosti se službami, které Vám poskytla či poskytuje (například pro účely archivace smlouvy po dobu relevantních promlčecích lhůt, zpravidla až 11 let).
                    </p>

                    <h4 className="font-montserrat font-bold text-[#1F2937] mt-8 mb-3">c) Zpracování údajů vzešlých z komunikace na tomto webu (Kontaktní formulář)</h4>
                    <p>
                        V zájmu bezproblémové komunikace, pokud využijete kontaktní formulář na mých osobních stránkách, předáváte mi prostřednictvím infrastruktury třetích stran (Formspree) své jméno, telefon a e-mailovou adresu. Tyto údaje jsou primárně zaslány na mou e-mailovou adresu výhradně za účelem zpětného kontaktování ohledně služeb, o které jste projevili zájem. K jiným marketingovým účelům nejsou bez dalšího vědomého souhlasu uchovávány.
                    </p>

                     <div className="w-16 h-[1px] bg-gray-200 my-10"></div>

                    <h3 className="font-playfair text-2xl md:text-3xl text-[#1F2937] mt-12 mb-6">3. Příjemci osobních údajů</h3>
                    <p>
                        Vaše osobní údaje mohou být předávány společnosti Broker Trust či společnostem propojeným se Společností (např. 4fin Reality Better together, a.s.). Vaše osobní údaje bude zpracovávat Společnost automatizovaně či prostřednictvím pověřených zaměstnanců, a dále pomocí následujících zpracovatelů:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                        <li><strong>Vázání zástupci:</strong> (jako je Lucie Roďanová), kteří s Vámi budou za Společnost jednat.</li>
                        <li><strong>Technická infrastruktura:</strong> Společnosti spravující informační systémy a cloudová úložiště (např. Google LLC).</li>
                        <li><strong>Odborníci:</strong> Daňoví poradci, advokáti a další strany vázané zákonnou mlčenlivostí.</li>
                        <li><strong>Státní orgány:</strong> Orgány činné v trestním řízení, finanční úřad či ČNB.</li>
                    </ul>
                    <p className="mt-6 text-sm text-gray-500 italic">
                        Vaše osobní údaje nebudou prodávány třetím stranám ani marketingovým agenturám pro nevyžádaná sdělení jiných subjektů.
                    </p>

                     <div className="w-16 h-[1px] bg-gray-200 my-10"></div>

                    <h3 className="font-playfair text-2xl md:text-3xl text-[#1F2937] mt-12 mb-6">4. Vaše práva ve vztahu ke zpracování údajů</h3>
                    <p>
                        Jako subjekt údajů můžete uplatňovat veškerá práva podle Nařízení EU. Máte zejména:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                        <li><strong>Právo na přístup a informace:</strong> o tom, jaké přesně údaje uchováváme.</li>
                        <li><strong>Právo na opravu:</strong> v případě, že uchováváme údaje chybné či neaktuální.</li>
                        <li><strong>Právo na výmaz ("být zapomenut"):</strong> smazání dat, pokud o odstranění výslovně požádáte.</li>
                        <li><strong>Právo na omezení zpracování.</strong></li>
                        <li><strong>Právo vznést námitku:</strong> proti jakémukoliv kroku zpracovatele.</li>
                    </ul>
                    <p className="mt-6">
                        Chcete-li uplatnit svá práva ve vztahu ke zpracování Vašich osobních údajů či máte jiný požadavek týkající se zpracování osobních údajů Společností 4fin Better together, kontaktujte centrálu prostřednictvím e-mailové adresy <strong>gdpr@4fin.cz</strong>. Záležitosti řešené přímo s vázaným zástupcem (Lucie Roďanová) řešte na výše postavených kontaktních telefonech tohoto webu.
                    </p>

                     <div className="w-16 h-[1px] bg-gray-200 my-10"></div>

                    <h3 className="font-playfair text-2xl md:text-3xl text-[#1F2937] mt-12 mb-6">5. Dozorový úřad a Zabezpečení</h3>
                    <p>
                        Kromě výše uvedených práv máte také právo podat stížnost u příslušného dozorového úřadu, pokud se domníváte, že zpracováním Vašich osobních údajů dochází k porušení Nařízení. V České republice je dozorovým úřadem <strong>Úřad pro ochranu osobních údajů</strong>.
                    </p>
                    <p>
                        Společnost zajišťuje vysokou úroveň zabezpečení veškerých osobních údajů technickými i organizačními opatřeními. Přístup k datům mají pouze zaměstnanci a vázaní zástupci, kteří to pro výkon činnosti naprosto nezbytně potřebují a kteří jsou přísně vázání slibem mlčenlivosti.
                    </p>

                </div>

                <div className="mt-20 pt-8 border-t border-gray-200 text-center">
                    <button 
                        onClick={onClose}
                        className="inline-flex items-center gap-3 bg-[#B69E57] hover:bg-[#9C874B] text-white px-10 py-5 rounded-md font-montserrat tracking-widest text-[13px] uppercase font-bold transition-all duration-300 shadow-xl hover:translate-y-[-2px]"
                    >
                        Rozumím a vrátit se zpět na web
                    </button>
                    <p className="mt-8 font-helvetica text-xs text-gray-400 max-w-xl mx-auto line-clamp-3">
                        Tato stránka má informativní charakter pro klienty a návštěvníky webu Lucie Roďanové podle aktuálně platného unijního usnesení GDPR. Provozovatel si vyhrazuje ochranu dat. Poslední aktualizace dokumentu: Březen 2026.
                    </p>
                </div>

            </main>
        </div>
    );
};

export default GDPRPage
