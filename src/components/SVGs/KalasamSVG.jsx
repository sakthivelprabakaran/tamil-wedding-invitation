import React from 'react';

const KalasamSVG = ({ className = '', style = {} }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
        className={className}
        style={{ display: 'block', height: '100%', ...style }}
    >
        <g>
            {/* Base/Pedestal */}
            <rect x="60" y="270" width="80" height="15" rx="5" fill="var(--secondary-color)" />
            <rect x="75" y="285" width="50" height="10" rx="3" fill="var(--secondary-color)" />

            {/* Brass Pot (Sombu) */}
            <path d="M 100 270 C 180 270 180 170 100 170 C 20 170 20 270 100 270 Z" fill="var(--secondary-color)" />
            <path d="M 100 270 C 160 270 160 180 100 180 C 40 180 40 270 100 270 Z" fill="rgba(255,255,255,0.2)" />

            {/* Pot Neck and Rim */}
            <path d="M 80 170 C 80 150 120 150 120 170 Z" fill="var(--secondary-color)" />
            <ellipse cx="100" cy="155" rx="25" ry="8" fill="var(--secondary-color)" />
            <ellipse cx="100" cy="153" rx="22" ry="6" fill="rgba(0,0,0,0.2)" />

            {/* Mango Leaves (Maa Ilai) arranged in circle */}
            {/* Back Leaves */}
            <path d="M 100 155 C 60 120 30 140 70 160 Z" fill="var(--tertiary-color)" />
            <path d="M 100 155 C 140 120 170 140 130 160 Z" fill="var(--tertiary-color)" />
            {/* Middle Leaves */}
            <path d="M 100 155 C 70 100 40 130 85 160 Z" fill="var(--primary-color)" />
            <path d="M 100 155 C 130 100 160 130 115 160 Z" fill="var(--primary-color)" />
            {/* Front Leaves */}
            <path d="M 100 155 C 80 120 60 150 90 165 Z" fill="var(--primary-color)" opacity="0.9" />
            <path d="M 100 155 C 120 120 140 150 110 165 Z" fill="var(--primary-color)" opacity="0.9" />
            <path d="M 100 155 C 100 110 90 140 100 165 Z" fill="var(--primary-color)" />

            {/* Coconut (Thengai) */}
            <ellipse cx="100" cy="115" rx="30" ry="40" fill="#4A3424" />
            {/* Coconut texture/eyes */}
            <circle cx="90" cy="95" r="3" fill="#2A1B10" />
            <circle cx="110" cy="95" r="3" fill="#2A1B10" />
            <circle cx="100" cy="105" r="3" fill="#2A1B10" />
            <path d="M 80 110 Q 100 150 120 110" stroke="#3A2414" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M 75 125 Q 100 160 125 125" stroke="#3A2414" strokeWidth="2" fill="none" opacity="0.4" />

            {/* Turmeric Thread/Decor around pot */}
            <path d="M 60 215 Q 100 240 140 215" stroke="var(--primary-color)" strokeWidth="6" fill="none" />
            <circle cx="100" cy="227" r="8" fill="var(--tertiary-color)" />
            <circle cx="100" cy="227" r="4" fill="var(--primary-color)" />
        </g>
    </svg>
);

export default KalasamSVG;
