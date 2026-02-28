import React from 'react';

/**
 * GarlandDividerSVG — A horizontal rope-and-flower section divider.
 *
 * Derived from ThoranamSVG: uses the same straight rope, knot beads,
 * and bright yellow marigold flowers — but WITHOUT the mango leaves.
 * This gives a clean, decorative garland banner between sections.
 *
 * Props:
 *   flowerCount — number of flowers along the garland (default 14)
 *   opacity     — overall opacity of the SVG (default 0.7)
 */
const GarlandDividerSVG = ({ flowerCount = 14, opacity = 0.7, className = '', style = {} }) => {
    const width = 1200;
    const ropY = 14; // y-position of the rope

    // Evenly space flowers across the width
    const flowers = Array.from({ length: flowerCount }, (_, i) => {
        const t = i / (flowerCount - 1);
        const x = t * width;
        // Slight size variation for a natural look
        const scale = 0.75 + (i % 3) * 0.1;
        return { x, scale, key: i };
    });

    // Bead knots between flowers
    const knotXs = flowers.map(f => f.x);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} 40`}
            className={className}
            style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                opacity,
                overflow: 'visible',
                ...style,
            }}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
        >
            <defs>
                {/* Rope gradient */}
                <linearGradient id="garlandRope" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4A35A" />
                    <stop offset="50%" stopColor="#8B7340" />
                    <stop offset="100%" stopColor="#6B5530" />
                </linearGradient>
            </defs>

            {/* === ROPE === */}
            {/* Main strand */}
            <path d={`M 0 ${ropY} L ${width} ${ropY}`}
                fill="none" stroke="#8B7340" strokeWidth="3.5" />
            {/* Shadow strand */}
            <path d={`M 0 ${ropY + 2} L ${width} ${ropY + 2}`}
                fill="none" stroke="#6B5530" strokeWidth="2" opacity="0.5" />
            {/* Highlight strand */}
            <path d={`M 0 ${ropY - 1} L ${width} ${ropY - 1}`}
                fill="none" stroke="#C4A35A" strokeWidth="1" opacity="0.35" />

            {/* === BEAD KNOTS at every flower position === */}
            {knotXs.map((kx, i) => (
                <circle key={`knot-${i}`} cx={kx} cy={ropY} r="3"
                    fill="#8B7340" stroke="#C4A35A" strokeWidth="0.8" />
            ))}

            {/* === MARIGOLD / YELLOW FLOWERS === */}
            {flowers.map(({ x, scale, key }) => (
                <g key={key} transform={`translate(${x}, ${ropY}) scale(${scale})`}>
                    {/* Outer petal glow */}
                    <circle cx="0" cy="0" r="11" fill="#FFD700" opacity="0.25" />
                    {/* Petals */}
                    <circle cx="0" cy="0" r="9" fill="#FFD700" />
                    {/* Inner ring */}
                    <circle cx="0" cy="0" r="5.5" fill="#FFA000" />
                    {/* Centre */}
                    <circle cx="0" cy="0" r="2.8" fill="#D84315" />
                    {/* Cross-petal highlights */}
                    <path d="M 0 -9 Q 2 -4 0 0 Q -2 -4 0 -9 Z" fill="#FFFBE6" opacity="0.85" />
                    <path d="M 0  9 Q 2  4 0 0 Q -2  4 0  9 Z" fill="#FFFBE6" opacity="0.85" />
                    <path d="M  9 0 Q 4  2 0 0 Q 4 -2  9 0 Z" fill="#FFFBE6" opacity="0.85" />
                    <path d="M -9 0 Q-4  2 0 0 Q-4 -2 -9 0 Z" fill="#FFFBE6" opacity="0.85" />
                    {/* Diagonal petals */}
                    <path d="M 6.4 -6.4 Q 2 -2 0 0 Q 2  2 6.4 6.4 Z" fill="#FFE57F" opacity="0.6" />
                    <path d="M -6.4 6.4 Q -2 2 0 0 Q -2 -2 -6.4 -6.4 Z" fill="#FFE57F" opacity="0.6" />
                    {/* Centre dot */}
                    <circle cx="0" cy="0" r="1.2" fill="#FFEB3B" />
                </g>
            ))}
        </svg>
    );
};

export default GarlandDividerSVG;
