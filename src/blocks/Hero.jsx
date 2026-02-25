import React from 'react'

export default function Hero({title, text, backgroundImage}) {
    return (
        <div>
            <h1>{title}</h1> 
            <p>{text}</p>
            {backgroundImage?.url && (
                <img src={backgroundImage.url} alt={backgroundImage.alt || 'background'} />
            )}
        </div>
    )
}
