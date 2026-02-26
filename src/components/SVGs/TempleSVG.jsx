import React from 'react';

const TempleSVG = ({ className = '', style = {}, isDark = false }) => {
    const fillColor = isDark ? 'var(--secondary-color)' : 'var(--primary-color)';
    const opacity = isDark ? 0.8 : 0.9;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 500"
            className={className}
            style={{ display: 'block', width: '100%', height: '100%', opacity, ...style }}
        >
            <g fill={fillColor}>
                {/* Base */}
                <rect x="50" y="450" width="300" height="50" rx="5" />
                <rect x="75" y="420" width="250" height="30" rx="3" />

                {/* Entrance */}
                <path d="M 150 500 L 150 430 Q 200 400 250 430 L 250 500 Z" fill="var(--bg-color)" />

                {/* Gopuram Layers */}
                {/* Tier 1 */}
                <polygon points="90,420 310,420 290,360 110,360" />
                <rect x="120" y="345" width="160" height="15" />

                {/* Tier 2 */}
                <polygon points="120,345 280,345 260,285 140,285" />
                <rect x="150" y="270" width="100" height="15" />

                {/* Tier 3 */}
                <polygon points="150,270 250,270 235,215 165,215" />
                <rect x="175" y="200" width="50" height="15" />

                {/* Tier 4 */}
                <polygon points="175,200 225,200 215,150 185,150" />
                <rect x="190" y="140" width="20" height="10" />

                {/* Kalasam (Top Ornament) */}
                <path d="M 200 140 C 185 130 185 110 200 100 C 215 110 215 130 200 140 Z" />
                <rect x="198" y="70" width="4" height="30" />
                <circle cx="200" cy="65" r="5" />
                <circle cx="200" cy="50" r="3" />

                {/* Decorative Details (Pillars & Statues abstraction) */}
                <rect x="130" y="380" width="10" height="40" fill="var(--bg-color)" opacity="0.5" />
                <rect x="160" y="380" width="10" height="40" fill="var(--bg-color)" opacity="0.5" />
                <rect x="230" y="380" width="10" height="40" fill="var(--bg-color)" opacity="0.5" />
                <rect x="260" y="380" width="10" height="40" fill="var(--bg-color)" opacity="0.5" />

                <rect x="160" y="305" width="8" height="40" fill="var(--bg-color)" opacity="0.5" />
                <rect x="200" y="295" width="12" height="50" rx="6" fill="var(--bg-color)" opacity="0.6" />
                <rect x="232" y="305" width="8" height="40" fill="var(--bg-color)" opacity="0.5" />

                <circle cx="200" cy="245" r="10" fill="var(--bg-color)" opacity="0.6" />

                {/* Flags */}
                <path d="M 120 345 L 80 320 L 100 355 Z" fill="var(--tertiary-color)" />
                <path d="M 280 345 L 320 320 L 300 355 Z" fill="var(--tertiary-color)" />
            </g>
        </svg>
    );
}

export default TempleSVG;
