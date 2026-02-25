import React from 'react'

export default function Hero({heading, text, backgroundImage}) {
    return (
        <div>
            <h1>{heading}</h1> 
            <p>{text}</p>
            {backgroundImage?.url && (
                <img src={backgroundImage.url} alt={backgroundImage.alt || 'background'} />
            )}
        </div>
    )
}
