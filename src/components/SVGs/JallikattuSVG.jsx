import React from 'react';

const JallikattuSVG = ({ className = '', style = {}, fill = 'var(--primary-color)', opacity = 1 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 400"
        className={className}
        style={{ display: 'block', width: '100%', height: '100%', opacity, ...style }}
    >
        <g fill={fill}>
            {/* Bull Hump (Thimil) - The iconic feature of the Kangayam bull */}
            <path d="M 230 180 C 240 100 280 80 300 120 C 315 150 320 180 320 200 Z" />

            {/* Head and Horns */}
            <path d="M 310 170 C 350 160 380 180 400 220 C 410 240 410 270 390 290 C 370 310 340 300 320 280 Z" />
            {/* Horn 1 */}
            <path d="M 380 190 Q 420 120 450 140 Q 430 160 390 210 Z" />
            {/* Horn 2 (background) */}
            <path d="M 360 180 Q 380 100 410 110 Q 400 140 375 190 Z" opacity="0.8" />

            {/* Body and Back */}
            <path d="M 240 140 C 150 150 100 180 80 230 C 70 260 80 290 100 300 C 150 280 200 290 280 270 C 300 260 320 230 310 200 Z" />

            {/* Front Legs (charging stance) */}
            <path d="M 280 270 C 290 320 280 360 310 380 C 320 380 320 370 300 350 C 290 320 310 290 320 280 Z" />
            <path d="M 260 270 C 270 310 250 350 270 370 C 280 370 280 360 260 340 C 250 310 270 280 280 270 Z" opacity="0.8" />

            {/* Back Legs (pushing off) */}
            <path d="M 120 280 C 100 330 60 360 30 370 C 40 370 60 360 90 330 C 120 290 150 290 150 280 Z" />
            <path d="M 150 280 C 140 330 110 370 90 390 C 100 390 120 370 140 340 C 160 310 180 290 180 280 Z" opacity="0.8" />

            {/* Tail (swishing up) */}
            <path d="M 90 230 Q 50 180 70 140 Q 60 160 80 210 Z" />
            <circle cx="70" cy="140" r="10" />

            {/* Dust/Motion lines to give the charging effect */}
            <path d="M 20 360 L 60 360" stroke={fill} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M 10 340 L 40 340" stroke={fill} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
            <path d="M 40 380 L 100 380" stroke={fill} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        </g>
    </svg>
);

export default JallikattuSVG;
