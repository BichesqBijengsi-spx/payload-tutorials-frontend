import React from 'react'

export default function Hero({ title, text, backgroundImage }) {
    // Debug log to see exactly what data we're getting
    console.log('Hero block data:', { title, text, backgroundImage });

    let bgUrl = null;
    
    // 1. Get the base URL from env
    const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || '';

    if (backgroundImage && typeof backgroundImage === 'object' && backgroundImage.url) {
        let rawUrl = backgroundImage.url;
        
        // 2. If it's an absolute URL using localhost, replace it with the correct baseUrl
        if (rawUrl.startsWith('http://localhost') || rawUrl.startsWith('http://127.0.0.1')) {
            const urlPath = rawUrl.replace(/^https?:\/\/[^/]+/, '');
            bgUrl = `${baseUrl}${urlPath}`;
        } 
        // 3. If it's already a full external URL, use it
        else if (rawUrl.startsWith('http')) {
            bgUrl = rawUrl;
        } 
        // 4. If it's a relative path, ensure no double slashes
        else {
            const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
            const cleanPath = rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;
            bgUrl = `${cleanBase}${cleanPath}`;
        }
    }

    console.log('Final refined bgUrl:', bgUrl);

    return (
        <section 
            className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden bg-gray-900"
            style={{ backgroundImage: bgUrl ? `url("${bgUrl}")` : 'none' }}
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
