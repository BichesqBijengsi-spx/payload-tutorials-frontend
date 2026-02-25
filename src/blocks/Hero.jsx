import React from 'react'

export default function Hero({heading, text, backgroundImage}) {
    return (
        <div>
            <h1>{heading}</h1> 
            <p>{text}</p>
            <img src={backgroundImage} alt="background" />
        </div>
    )
}
