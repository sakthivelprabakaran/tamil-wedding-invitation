import React from 'react';

/**
 * WelcomeThoranamSVG — A clean, elegant top border for the Welcome Screen.
 * Uses realistic mango leaves with distinct veins, hanging from a subtle rope.
 * At the start point of each leaf, there is a prominent yellow marigold flower.
 */
const WelcomeThoranamSVG = ({ className = '', style = {} }) => {
    const width = 1200;
    const leafCount = 20; // Enough to span nicely but not overlap too messily

    // Generate leaves based on the count
    const leaves = Array.from({ length: leafCount }).map((_, i) => {
        // Distribute evenly across the width, slightly inset from edges
        const x = 30 + (i / (leafCount - 1)) * (width - 60);

        // Gentle catenary curve for the rope height
        const t = x / width;
        const y = 20 + Math.sin(t * Math.PI) * 40;

        // Slight alternating rotation for natural look
        const angle = i % 2 === 0 ? -5 : 5;
        // Occasional slight scale variation
        const scale = 0.95 + (i % 3) * 0.05;
        // Alternate green shades
        const greenShade = i % 4;

        return { key: `leaf-${i}`, x, y, angle, scale, greenShade };
    });

    const getLeafColor = (shade) => {
        const colors = ['#2d5a27', '#346b2d', '#264d21', '#3b7833'];
        return colors[shade];
    };

    const getLeafHighlight = (shade) => {
        const highlights = ['#43803b', '#4d9943', '#397332', '#56a64b'];
        return highlights[shade];
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 160"
            className={className} style={{ display: 'block', width: '100%', ...style }}
            preserveAspectRatio="xMidYMin meet">
            <defs>
                {/* Mango Leaf Gradients */}
                <linearGradient id="mangoLeaf1" x1="0" y1="0" x2="0.2" y2="1">
                    <stop offset="0%" stopColor="#43803b" />
                    <stop offset="40%" stopColor="#2d5a27" />
                    <stop offset="100%" stopColor="#1a3617" />
                </linearGradient>
                <linearGradient id="mangoLeaf2" x1="0" y1="0" x2="0.4" y2="1">
                    <stop offset="0%" stopColor="#4d9943" />
                    <stop offset="50%" stopColor="#346b2d" />
                    <stop offset="100%" stopColor="#1f401b" />
                </linearGradient>
                <linearGradient id="mangoLeaf3" x1="0.2" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#397332" />
                    <stop offset="60%" stopColor="#264d21" />
                    <stop offset="100%" stopColor="#152b12" />
                </linearGradient>
                <linearGradient id="mangoLeaf4" x1="0" y1="0.2" x2="0.3" y2="1">
                    <stop offset="0%" stopColor="#56a64b" />
                    <stop offset="45%" stopColor="#3b7833" />
                    <stop offset="100%" stopColor="#22471e" />
                </linearGradient>

                {/* Rope Gradient */}
                <linearGradient id="ropeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B7340" />
                    <stop offset="50%" stopColor="#C4A35A" />
                    <stop offset="100%" stopColor="#8B7340" />
                </linearGradient>

                {/* Prominent Yellow Flower Definition */}
                <g id="big-yellow-flower">
                    <circle cx="0" cy="0" r="16" fill="#F2C94C" />
                    <circle cx="0" cy="0" r="12" fill="#F2994A" />
                    <circle cx="0" cy="0" r="8" fill="#EB5757" />
                    {/* Petal details */}
                    <path d="M 0 -16 Q 4 -8 0 0 Q -4 -8 0 -16 Z" fill="#FFFBE6" opacity="0.6" />
                    <path d="M 0 16 Q 4 8 0 0 Q -4 8 0 16 Z" fill="#FFFBE6" opacity="0.6" />
                    <path d="M 16 0 Q 8 4 0 0 Q 8 -4 16 0 Z" fill="#FFFBE6" opacity="0.6" />
                    <path d="M -16 0 Q -8 4 0 0 Q -8 -4 -16 0 Z" fill="#FFFBE6" opacity="0.6" />

                    <path d="M 11 11 Q 6 6 0 0 Q 6 -6 11 11 Z" fill="#FFE066" opacity="0.5" transform="rotate(45)" />
                    <path d="M -11 -11 Q -6 -6 0 0 Q -6 6 -11 -11 Z" fill="#FFE066" opacity="0.5" transform="rotate(45)" />
                    <path d="M 11 -11 Q 6 -6 0 0 Q 6 6 11 -11 Z" fill="#FFE066" opacity="0.5" transform="rotate(-45)" />
                    <path d="M -11 11 Q -6 6 0 0 Q -6 -6 -11 11 Z" fill="#FFE066" opacity="0.5" transform="rotate(-45)" />

                    {/* Core */}
                    <circle cx="0" cy="0" r="4" fill="#6B1D1D" />
                    <circle cx="0" cy="0" r="2" fill="#F2C94C" />
                </g>
            </defs>

            {/* Optional gentle wind sway animation */}
            <style>{`
                .welcome-leaf {
                    animation: leafSway var(--sway-dur, 5s) ease-in-out infinite;
                    animation-delay: var(--sway-delay, 0s);
                }
                @keyframes leafSway {
                    0%, 100% { transform: translate(var(--tx), var(--ty)) rotate(var(--base-rot)) scale(var(--sc)); }
                    50% { transform: translate(var(--tx), var(--ty)) rotate(calc(var(--base-rot) + 4deg)) scale(var(--sc)); }
                }
            `}</style>

            {/* === MAIN ROPE === */}
            <path d="M 0 20 Q 300 60 600 60 Q 900 60 1200 20"
                fill="none" stroke="url(#ropeGrad)" strokeWidth="4" />
            <path d="M 0 22 Q 300 62 600 62 Q 900 62 1200 22"
                fill="none" stroke="#6B5530" strokeWidth="2" opacity="0.5" />

            {/* === LEAVES AND FLOWERS === */}
            {leaves.map((leaf, index) => {
                const gradId = `mangoLeaf${(leaf.greenShade % 4) + 1}`;
                const swayDur = 4.5 + (index % 5) * 0.5;
                const swayDelay = -index * 0.3;

                return (
                    <g key={leaf.key}>
                        {/* THE LEAF */}
                        <g className="welcome-leaf"
                            style={{
                                '--tx': `${leaf.x}px`,
                                '--ty': `${leaf.y}px`,
                                '--base-rot': `${leaf.angle}deg`,
                                '--sc': leaf.scale,
                                '--sway-dur': `${swayDur}s`,
                                '--sway-delay': `${swayDelay}s`,
                            }}>
                            {/* Leaf body — elongated pointed shape copied from main page */}
                            <path d="M 0 0
                                     C 5 10 7 25 6 45
                                     C 4 60 2 70 0 78
                                     C -2 70 -4 60 -6 45
                                     C -7 25 -5 10 0 0 Z"
                                fill={`url(#${gradId})`}
                                stroke={getLeafColor(leaf.greenShade)}
                                strokeWidth="0.5"
                                opacity="0.95" />

                            {/* Midrib */}
                            <line x1="0" y1="0" x2="0" y2="75"
                                stroke={getLeafHighlight(leaf.greenShade)}
                                strokeWidth="1" opacity="0.7" />

                            {/* Side veins */}
                            <path d="M 0 15 L 4 22" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.6" opacity="0.5" />
                            <path d="M 0 15 L -4 22" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.6" opacity="0.5" />
                            <path d="M 0 30 L 5 38" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.5" opacity="0.4" />
                            <path d="M 0 30 L -5 38" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.5" opacity="0.4" />
                            <path d="M 0 45 L 4.5 54" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.3" />
                            <path d="M 0 45 L -4.5 54" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.3" />
                            <path d="M 0 60 L 3 68" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.3" opacity="0.2" />
                            <path d="M 0 60 L -3 68" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.3" opacity="0.2" />
                        </g>

                        {/* THE LARGE YELLOW FLOWER AT THE START POINT */}
                        <use href="#big-yellow-flower" x={leaf.x} y={leaf.y} />
                    </g>
                );
            })}
        </svg>
    );
};

export default WelcomeThoranamSVG;
