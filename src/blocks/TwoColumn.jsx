import React from 'react'

export default function TwoColumn({ heading, text, direction, image }) {
  const isReverse = direction === "reverse";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isReverse ? "row-reverse" : "row",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      {image?.url && (
        <div style={{ flex: 1 }}>
          <img
            src={image.url}
            alt={image.alt || heading || "Two column image"}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
