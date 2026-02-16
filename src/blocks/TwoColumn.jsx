import React from 'react'

export default function TwoColumn({heading, text, direction}) {
    return (
        <div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    )
}
