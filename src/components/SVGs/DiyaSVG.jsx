import React from 'react';

const DiyaSVG = ({ className = '', style = {} }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 300"
        className={className}
        style={{ display: 'block', height: '100%', ...style }}
    >
        <g>
            {/* Base */}
            <rect x="40" y="270" width="70" height="20" rx="10" fill="var(--secondary-color)" />
            <rect x="50" y="260" width="50" height="15" rx="5" fill="var(--secondary-color)" />
            <path d="M 75 260 L 55 240 L 95 240 Z" fill="var(--secondary-color)" />

            {/* Stem */}
            <rect x="70" y="80" width="10" height="160" fill="var(--secondary-color)" />
            <rect x="65" y="150" width="20" height="15" rx="5" fill="var(--secondary-color)" />
            <rect x="65" y="200" width="20" height="15" rx="5" fill="var(--secondary-color)" />

            {/* Top Bowl (Agal) */}
            <path d="M 75 80 C 130 80 130 40 75 40 C 20 40 20 80 75 80 Z" fill="var(--secondary-color)" />
            <ellipse cx="75" cy="45" rx="35" ry="10" fill="rgba(0,0,0,0.2)" />

            {/* Flames */}
            <path d="M 75 40 Q 60 20 75 0 Q 90 20 75 40 Z" fill="var(--tertiary-color)" />
            <path d="M 75 35 Q 65 20 75 10 Q 85 20 75 35 Z" fill="#FFA500" />

            {/* Side flames (5 face lamp - Kuthu Vilakku) */}
            <path d="M 50 45 Q 40 30 50 20 Q 60 30 50 45 Z" fill="var(--tertiary-color)" />
            <path d="M 100 45 Q 90 30 100 20 Q 110 30 100 45 Z" fill="var(--tertiary-color)" />
            <path d="M 35 55 Q 25 40 35 30 Q 45 40 35 55 Z" fill="var(--tertiary-color)" />
            <path d="M 115 55 Q 105 40 115 30 Q 125 40 115 55 Z" fill="var(--tertiary-color)" />

            {/* Glow Effect */}
            <circle cx="75" cy="20" r="40" fill="var(--tertiary-color)" opacity="0.1" />
            <circle cx="75" cy="20" r="20" fill="var(--tertiary-color)" opacity="0.2" />
        </g>
    </svg>
);

export default DiyaSVG;
