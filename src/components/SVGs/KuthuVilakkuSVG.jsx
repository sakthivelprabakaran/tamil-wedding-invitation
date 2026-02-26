import React from 'react';

const KuthuVilakkuSVG = ({ className = '', style = {}, fill = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 250"
        className={className}
        style={{ width: '100%', height: 'auto', maxWidth: '80px', ...style }}
    >
        <g stroke={fill} strokeWidth="1.5" fill="none">
            {/* Base */}
            <path d="M 20 230 Q 50 200 80 230 L 85 240 L 15 240 Z" fill="rgba(230,194,122,0.15)" />
            <path d="M 30 215 Q 50 190 70 215" />

            {/* Lower stem nodes */}
            <ellipse cx="50" cy="190" rx="15" ry="5" />
            <ellipse cx="50" cy="170" rx="10" ry="4" />
            <ellipse cx="50" cy="140" rx="12" ry="4.5" />

            {/* Main stem lines connecting nodes */}
            <line x1="45" y1="190" x2="45" y2="170" />
            <line x1="55" y1="190" x2="55" y2="170" />

            <line x1="46" y1="170" x2="46" y2="140" />
            <line x1="54" y1="170" x2="54" y2="140" />

            <line x1="44" y1="140" x2="44" y2="100" />
            <line x1="56" y1="140" x2="56" y2="100" />

            {/* Oil basin (Agal) */}
            <path d="M 20 90 Q 50 110 80 90 Q 75 100 50 105 Q 25 100 20 90 Z" fill="rgba(230,194,122,0.3)" />
            <path d="M 20 90 Q 50 80 80 90" strokeDasharray="2 2" />

            {/* Fluted top (Annapakshi/Crown) */}
            <path d="M 40 90 L 45 40 Q 50 30 55 40 L 60 90 Z" fill="rgba(230,194,122,0.2)" />
            <path d="M 45 40 Q 50 10 50 10 Q 50 10 55 40 Z" />

            {/* Flames (with an animation class capability if we want to pulse it in CSS) */}
            <g className="flame">
                <path d="M 50 15 Q 45 5 50 0 Q 55 5 50 15 Z" fill="#F8E7B0" stroke="#F8E7B0" />
                {/* 5 spouts flames */}
                <path d="M 25 85 Q 20 75 25 70 Q 30 75 25 85 Z" fill="#F8E7B0" stroke="#F8E7B0" />
                <path d="M 75 85 Q 70 75 75 70 Q 80 75 75 85 Z" fill="#F8E7B0" stroke="#F8E7B0" />
                {/* Back 2 flames sketched smaller */}
                <path d="M 35 88 Q 33 80 35 76 Q 37 80 35 88 Z" fill="#F8E7B0" stroke="#F8E7B0" opacity="0.6" />
                <path d="M 65 88 Q 63 80 65 76 Q 67 80 65 88 Z" fill="#F8E7B0" stroke="#F8E7B0" opacity="0.6" />
            </g>
        </g>
    </svg>
);

export default KuthuVilakkuSVG;
