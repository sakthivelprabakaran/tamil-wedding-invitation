import React from 'react';

/**
 * ThoranamSVG — Realistic mango leaf festoon/garland (தோரணம்).
 * A curved rope with individual mango leaves hanging in a swag shape.
 * Uses natural mango leaf green colors with gold accents.
 */
const ThoranamSVG = ({ className = '', style = {} }) => {
    // Generate mango leaves along a catenary curve
    const leaves = [];
    const totalLeaves = 38;

    for (let i = 0; i < totalLeaves; i++) {
        const t = i / (totalLeaves - 1); // 0 to 1
        // Straight line: x goes from 0 to 1200, y is constant
        const x = t * 1200;
        const y = 12; // Aligned to top, leaving just enough room for the top half of the flowers

        // Leaf angle — mostly straight down with very slight random variation
        const leafAngle = 180 + (Math.random() - 0.5) * 6;

        // Leaf size variation
        const scale = 0.9 + Math.random() * 0.4;

        // Color variation — different shades of mango green
        const greenShade = Math.floor(Math.random() * 4);

        leaves.push({ x, y, angle: leafAngle, scale, greenShade, key: i });
    }

    const getLeafColor = (shade) => {
        const colors = ['#2D5A1E', '#3A6B2A', '#1E4A12', '#4A7A35'];
        return colors[shade];
    };

    const getLeafHighlight = (shade) => {
        const colors = ['#4A8A38', '#5A9A48', '#3A7A28', '#6AAA55'];
        return colors[shade];
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 160"
            className={className}
            style={{ display: 'block', width: '100%', ...style }}
            preserveAspectRatio="xMidYMin meet"
        >
            <defs>
                {/* Leaf gradients for natural look */}
                <linearGradient id="mangoLeaf1" x1="0" y1="0" x2="0.3" y2="1">
                    <stop offset="0%" stopColor="#3A6B2A" />
                    <stop offset="40%" stopColor="#2D5A1E" />
                    <stop offset="100%" stopColor="#1E4A12" />
                </linearGradient>
                <linearGradient id="mangoLeaf2" x1="0" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#4A7A35" />
                    <stop offset="50%" stopColor="#3A6B2A" />
                    <stop offset="100%" stopColor="#2D5A1E" />
                </linearGradient>
                <linearGradient id="mangoLeaf3" x1="0.2" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2D5A1E" />
                    <stop offset="60%" stopColor="#1E4A12" />
                    <stop offset="100%" stopColor="#153A0C" />
                </linearGradient>
                <linearGradient id="mangoLeaf4" x1="0" y1="0.2" x2="0.4" y2="1">
                    <stop offset="0%" stopColor="#5A8A45" />
                    <stop offset="40%" stopColor="#4A7A35" />
                    <stop offset="100%" stopColor="#3A6B2A" />
                </linearGradient>
                {/* Rope texture */}
                <linearGradient id="ropeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4A35A" />
                    <stop offset="50%" stopColor="#8B7340" />
                    <stop offset="100%" stopColor="#6B5530" />
                </linearGradient>
            </defs>

            {/* Wind sway animations for thoranam leaves - OPTIMIZED FOR PERFORMANCE */}
            <style>{`
                .thoranam-leaf {
                    animation: mangoLeafSway var(--sway-dur, 5s) ease-in-out infinite alternate;
                    animation-delay: var(--sway-delay, 0s);
                    /* Hardware acceleration to prevent jitter/repaint lag */
                    will-change: transform;
                    transform-origin: 0px 0px; 
                }
                .thoranam-rope {
                    /* Removed rope sway to save performance, rope is straight anyway */
                }
                @keyframes mangoLeafSway {
                    /* Using rotate3d and translate3d forces GPU hardware acceleration */
                    0% { transform: translate3d(var(--tx), var(--ty), 0) rotate3d(0, 0, 1, calc(var(--base-rot) - 2deg)) scale(var(--sc)); }
                    100% { transform: translate3d(var(--tx), var(--ty), 0) rotate3d(0, 0, 1, calc(var(--base-rot) + 2deg)) scale(var(--sc)); }
                }
            `}</style>

            {/* === ROPE / STRING === */}
            <g className="thoranam-rope">
                {/* Main rope — straight line */}
                <path d="M 0 12 L 1200 12"
                    fill="none" stroke="#8B7340" strokeWidth="4" />
                <path d="M 0 14 L 1200 14"
                    fill="none" stroke="#6B5530" strokeWidth="2.5" opacity="0.5" />
                {/* Rope highlight */}
                <path d="M 0 11 L 1200 11"
                    fill="none" stroke="#C4A35A" strokeWidth="1.5" opacity="0.4" />

                {/* === HANGING KNOTS at intervals === */}
                {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200].map((kx, i) => {
                    const ky = 12; // Straight line matching rope
                    return (
                        <circle key={`knot-${i}`} cx={kx} cy={ky} r="3.5"
                            fill="#8B7340" stroke="#C4A35A" strokeWidth="0.8" />
                    );
                })}

                {/* === MANGO LEAVES AND BRIGHT YELLOW FLOWERS === */}
                {leaves.map((leaf) => {
                    const gradId = `mangoLeaf${(leaf.greenShade % 4) + 1}`;
                    const swayDur = 4 + (leaf.key % 5) * 0.7; // 4s to 6.8s
                    const swayDelay = (leaf.key * 0.3) % 3; // staggered
                    return (
                        <g key={leaf.key}>
                            {/* Leaf with Wind Animation */}
                            <g className="thoranam-leaf"
                                style={{
                                    '--tx': `${leaf.x}px`,
                                    '--ty': `${leaf.y}px`,
                                    '--base-rot': `${leaf.angle}deg`,
                                    '--sc': leaf.scale,
                                    '--sway-dur': `${swayDur}s`,
                                    '--sway-delay': `-${swayDelay}s`,
                                }}>
                                {/* Leaf body - modified for proper fuller shape */}
                                <path d="M 0 0
                                         C 8 -10 12 -30 0 -60
                                         C -12 -30 -8 -10 0 0 Z"
                                    fill={`url(#${gradId})`}
                                    stroke={getLeafColor(leaf.greenShade)}
                                    strokeWidth="0.5"
                                    opacity="0.9" />
                                {/* Midrib */}
                                <line x1="0" y1="0" x2="0" y2="-58"
                                    stroke={getLeafHighlight(leaf.greenShade)}
                                    strokeWidth="0.8" opacity="0.6" />
                                {/* Side veins */}
                                <path d="M 0 -10 L 4 -15" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.35" />
                                <path d="M 0 -10 L -4 -15" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.35" />
                                <path d="M 0 -22 L 5 -28" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.3" />
                                <path d="M 0 -22 L -5 -28" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.3" />
                                <path d="M 0 -34 L 4 -40" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.25" />
                                <path d="M 0 -34 L -4 -40" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.25" />
                                <path d="M 0 -46 L 3 -51" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.3" opacity="0.2" />
                                <path d="M 0 -46 L -3 -51" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.3" opacity="0.2" />
                                {/* Leaf stem */}
                                <line x1="0" y1="0" x2="0" y2="5"
                                    stroke="#6B5530" strokeWidth="1" />
                            </g>

                            {/* SMALLER, BRIGHTER YELLOW FLOWER AT ROOT */}
                            <g transform={`translate(${leaf.x}, ${leaf.y}) scale(${0.5 + leaf.scale * 0.2})`}>
                                {/* Outer bright yellow petals */}
                                <circle cx="0" cy="0" r="9.5" fill="#FFD700" />
                                <circle cx="0" cy="0" r="6" fill="#FFA000" />
                                <circle cx="0" cy="0" r="3" fill="#D84315" />
                                {/* Starburst petals */}
                                <path d="M 0 -9.5 Q 2.5 -4.5 0 0 Q -2.5 -4.5 0 -9.5 Z" fill="#FFFBE6" opacity="0.9" />
                                <path d="M 0 9.5 Q 2.5 4.5 0 0 Q -2.5 4.5 0 9.5 Z" fill="#FFFBE6" opacity="0.9" />
                                <path d="M 9.5 0 Q 4.5 2.5 0 0 Q 4.5 -2.5 9.5 0 Z" fill="#FFFBE6" opacity="0.9" />
                                <path d="M -9.5 0 Q -4.5 2.5 0 0 Q -4.5 -2.5 -9.5 0 Z" fill="#FFFBE6" opacity="0.9" />
                                {/* Inner ring */}
                                <circle cx="0" cy="0" r="1.5" fill="#FFEB3B" />
                            </g>
                        </g>
                    );
                })}

                {/* NO BOTTOM TASSELS REQUIRED FOR STRAIGHT THORANAM */}
            </g>
        </svg>
    );
};

export default ThoranamSVG;
