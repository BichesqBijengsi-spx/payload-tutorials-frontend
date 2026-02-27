import React from 'react'

export default function Hero({ title, text, backgroundImage }) {
    const bgUrl = backgroundImage?.url ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${backgroundImage.url}` : null;

    return (
        <section 
            className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : 'none' }}
        >
            {/* Elegant overlay for legibility */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            <div className="relative z-10 max-w-4xl px-6 text-center text-white">
                {title && (
                    <h1 className="mb-6 text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {title}
                    </h1>
                )}
                {text && (
                    <p className="text-lg md:text-2xl font-light text-gray-100 drop-shadow-md max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                        {text}
                    </p>
                )}
            </div>
        </section>
    )
}
