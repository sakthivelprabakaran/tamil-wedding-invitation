import React from 'react';

const NadaswaramThavilSVG = ({ className = '', style = {}, fill = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        className={className}
        style={{ width: '100%', height: 'auto', maxWidth: '200px', ...style }}
    >
        {/* Nadaswaram (Angled Flute) */}
        <g transform="translate(40, 20) rotate(25)" stroke={fill} strokeWidth="1.5" fill="none">
            {/* Main body */}
            <path d="M 0 0 C 40 5 80 5 120 15 L 125 35 C 80 25 40 25 0 20 Z" fill="rgba(230,194,122,0.2)" />
            {/* Bell end */}
            <path d="M 120 15 C 130 -5 140 -10 150 -5 C 155 5 150 45 145 50 C 135 55 125 45 125 35 Z" fill="rgba(230,194,122,0.4)" />
            {/* Detail rings */}
            <line x1="20" y1="4" x2="20" y2="24" />
            <line x1="40" y1="6" x2="40" y2="26" />
            <line x1="60" y1="8" x2="60" y2="28" />
            <line x1="80" y1="10" x2="80" y2="30" />
            <line x1="100" y1="12" x2="100" y2="32" />
        </g>

        {/* Thavil (Drum) */}
        <g transform="translate(80, 50)" stroke={fill} strokeWidth="1.5" fill="none">
            {/* Drum body barrel shape */}
            <path d="M 0 0 C 20 -10 40 -10 60 0 C 65 20 65 40 60 60 C 40 70 20 70 0 60 C -5 40 -5 20 0 0 Z" fill="rgba(230,194,122,0.15)" />
            {/* Left drumhead */}
            <ellipse cx="0" cy="30" rx="5" ry="30" fill="rgba(230,194,122,0.3)" />
            {/* Right drumhead */}
            <ellipse cx="60" cy="30" rx="5" ry="30" fill="rgba(230,194,122,0.3)" />
            {/* Tension straps (V-shape lacing) */}
            <path d="M 0 0 L 10 30 L 0 60" />
            <path d="M 10 30 L 20 0" />
            <path d="M 10 30 L 20 60" />
            <path d="M 20 0 L 30 30 L 20 60" />
            <path d="M 30 30 L 40 0" />
            <path d="M 30 30 L 40 60" />
            <path d="M 40 0 L 50 30 L 40 60" />
            <path d="M 50 30 L 60 0" />
            <path d="M 50 30 L 60 60" />
            {/* Center strap ring */}
            <line x1="0" y1="30" x2="60" y2="30" strokeWidth="2" />
        </g>
    </svg>
);

export default NadaswaramThavilSVG;
