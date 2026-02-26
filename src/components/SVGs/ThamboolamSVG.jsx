import React from 'react';

const ThamboolamSVG = ({ className = '', style = {}, fill = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={className}
        style={{ width: '100%', height: 'auto', maxWidth: '60px', ...style }}
    >
        <g stroke={fill} strokeLinejoin="round" fill="none">
            {/* Thaambalam (Silver / Gold plate) */}
            <ellipse cx="50" cy="65" rx="45" ry="15" fill="rgba(230,194,122,0.15)" strokeWidth="2" />
            <ellipse cx="50" cy="68" rx="45" ry="15" strokeWidth="1" opacity="0.5" />

            {/* Vethalai (Betel Leaves) stacked */}
            <g fill="rgba(12, 43, 32, 0.4)" strokeWidth="1.5">
                {/* Back leaf */}
                <path d="M 25 60 C 10 30 30 10 50 15 C 60 10 80 30 50 65 C 40 50 25 60 25 60 Z" transform="rotate(-15 50 50)" />
                {/* Front leaf */}
                <path d="M 35 65 C 20 35 40 15 60 20 C 70 15 90 35 60 70 C 50 55 35 65 35 65 Z" transform="rotate(20 50 50)" />
                {/* Central leaf */}
                <path d="M 30 65 C 20 25 50 5 50 5 C 50 5 80 25 70 65 C 60 80 40 80 30 65 Z" />
                <path d="M 50 5 L 50 65" strokeDasharray="3 2" />
            </g>

            {/* Paakku (Areca nuts) */}
            <circle cx="43" cy="60" r="4" fill="var(--secondary-color)" strokeWidth="1" />
            <circle cx="57" cy="62" r="3.5" fill="var(--secondary-color)" strokeWidth="1" />
            <circle cx="49" cy="65" r="4.5" fill="var(--secondary-color)" strokeWidth="1" />

            {/* Flowers / Vermilion small packets indication */}
            <path d="M 25 55 Q 35 45 40 58 Z" fill="var(--primary-color)" />
        </g>
    </svg>
);

export default ThamboolamSVG;
