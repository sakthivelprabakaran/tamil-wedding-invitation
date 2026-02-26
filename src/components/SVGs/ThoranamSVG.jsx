import React from 'react';

const ThoranamSVG = ({ className = '', style = {}, fill = 'var(--quaternary-color)' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 150"
        className={className}
        style={{ display: 'block', width: '100%', ...style }}
        preserveAspectRatio="none"
    >
        {/* Main String */}
        <path d="M 0 20 Q 300 60 600 60 T 1200 20" fill="none" stroke={fill} strokeWidth="4" />

        {/* Generate multiple mango leaves hanging from the string */}
        {Array.from({ length: 15 }).map((_, i) => {
            // Calculate position along the curve roughly
            const x = 50 + (i * 78);
            // Rough parabolic y
            const norm = (x - 600) / 600;
            const y = 60 - (40 * norm * norm);

            return (
                <g key={i} transform={`translate(${x}, ${y})`}>
                    {/* Mango Leaf Shape */}
                    <path
                        d="M 0 0 C 15 10 25 35 15 65 C 5 85 -5 110 -2 125 C -5 110 -15 85 -10 65 C -20 35 -10 10 0 0 Z"
                        fill="var(--tertiary-color)"
                        opacity="0.9"
                    />
                    {/* Leaf vein */}
                    <path d="M 0 0 C 5 40 2 80 -2 125" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />

                    {/* Small Marigold flower alternating between leaves */}
                    {i < 14 && (
                        <circle cx="39" cy="-5" r="8" fill="var(--secondary-color)" />
                    )}
                </g>
            );
        })}
    </svg>
);

export default ThoranamSVG;
