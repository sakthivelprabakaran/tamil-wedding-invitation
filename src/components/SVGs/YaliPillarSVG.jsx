import React from 'react';

const YaliPillarSVG = ({ className = '', style = {}, fill = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 400"
        className={className}
        style={{ width: '100%', height: '100%', maxWidth: '30px', ...style }}
        preserveAspectRatio="none"
    >
        <g stroke={fill} strokeWidth="1.5" fill="none">
            {/* Top Capital / Bodigai */}
            <path d="M 5 0 L 45 0 L 40 20 L 10 20 Z" fill="rgba(230,194,122,0.15)" />
            <path d="M 0 20 L 50 20 L 40 40 L 10 40 Z" fill="rgba(230,194,122,0.2)" />

            {/* Yali Motif (Mythical creature carving) - abstracted */}
            <path d="M 15 40 C 5 60 5 80 15 90 C 25 100 25 120 15 130" opacity="0.8" />
            <path d="M 35 40 C 45 60 45 80 35 90 C 25 100 25 120 35 130" opacity="0.8" />

            {/* Center Pillar Shaft */}
            <rect x="18" y="130" width="14" height="200" fill="rgba(230,194,122,0.05)" />
            <line x1="25" y1="130" x2="25" y2="330" strokeDasharray="4 4" opacity="0.5" />

            {/* Decorative bands on shaft */}
            <line x1="15" y1="180" x2="35" y2="180" strokeWidth="2" />
            <line x1="15" y1="230" x2="35" y2="230" strokeWidth="2" />
            <line x1="15" y1="280" x2="35" y2="280" strokeWidth="2" />

            {/* Bottom Base / Adishthanam */}
            <path d="M 15 330 L 35 330 L 45 360 L 5 360 Z" fill="rgba(230,194,122,0.2)" />
            <path d="M 5 360 L 45 360 L 50 400 L 0 400 Z" fill="rgba(230,194,122,0.15)" />
        </g>
    </svg>
);

export default YaliPillarSVG;
