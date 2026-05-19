import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-[#FCFCFC] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#B69E57] opacity-[0.03] blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#1F2937] opacity-[0.02] blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                
                {/* 404 Watermark */}
                <span className="font-playfair text-[120px] md:text-[180px] font-bold text-[#1F2937]/5 italic leading-none select-none absolute top-[-40px] md:top-[-80px] -z-10">
                    404
                </span>

                <p className="font-montserrat text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B69E57] mb-6 md:mb-8">
                    Tato stránka neexistuje
                </p>
                
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1F2937] leading-[1.1] mb-6">
                    Tudy cesta nevede.
                </h1>
                
                <p className="font-helvetica text-[#404042] opacity-80 text-base md:text-[17px] leading-relaxed mb-12 max-w-md">
                    Nevadí. Občas ve webovém prohlížeči, stejně jako ve financích, odbočíme špatně. Na hlavní stránce pro vás mám připravený ten správný směr.
                </p>

                <a 
                    href="/"
                    className="inline-flex justify-center items-center bg-[#B69E57] hover:bg-[#9C874B] text-white px-10 py-4 md:py-5 rounded-md font-montserrat tracking-widest text-[12px] md:text-[13px] uppercase font-bold transition-all duration-300 shadow-xl hover:-translate-y-1"
                >
                    Zpět na bezpečí Domova
                </a>

            </div>

        </div>
    );
};

export default ErrorPage;
