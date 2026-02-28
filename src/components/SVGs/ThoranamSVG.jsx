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
        // Catenary curve: x goes from 0 to 1200, y sags in the middle
        const x = t * 1200;
        const sag = Math.sin(t * Math.PI) * 55; // max sag of 55px at center
        const y = 30 + sag;

        // Leaf angle — following the rope angle + slight random
        const ropeAngle = Math.cos(t * Math.PI) * 25; // tangent angle
        const leafAngle = 180 + ropeAngle + (Math.random() - 0.5) * 15;

        // Leaf size variation
        const scale = 0.7 + Math.random() * 0.4;

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

            {/* Wind sway animations for thoranam leaves */}
            <style>{`
                .thoranam-leaf {
                    animation: mangoLeafSway var(--sway-dur, 5s) ease-in-out infinite;
                    animation-delay: var(--sway-delay, 0s);
                }
                .thoranam-rope {
                    animation: ropeSway 8s ease-in-out infinite;
                    transform-origin: center top;
                }
                @keyframes mangoLeafSway {
                    0%, 100% { transform: translate(var(--tx), var(--ty)) rotate(var(--base-rot)) scale(var(--sc)); }
                    25% { transform: translate(var(--tx), var(--ty)) rotate(calc(var(--base-rot) + 4deg)) scale(var(--sc)); }
                    50% { transform: translate(var(--tx), var(--ty)) rotate(calc(var(--base-rot) - 3deg)) scale(var(--sc)); }
                    75% { transform: translate(var(--tx), var(--ty)) rotate(calc(var(--base-rot) + 2deg)) scale(var(--sc)); }
                }
                @keyframes ropeSway {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(2px); }
                }
            `}</style>

            {/* === ROPE / STRING === */}
            <g className="thoranam-rope">
                {/* Main rope — catenary curve */}
                <path d="M 0 30 Q 300 85 600 85 Q 900 85 1200 30"
                    fill="none" stroke="#8B7340" strokeWidth="4" />
                <path d="M 0 32 Q 300 87 600 87 Q 900 87 1200 32"
                    fill="none" stroke="#6B5530" strokeWidth="2.5" opacity="0.5" />
                {/* Rope highlight */}
                <path d="M 0 29 Q 300 84 600 84 Q 900 84 1200 29"
                    fill="none" stroke="#C4A35A" strokeWidth="1.5" opacity="0.4" />

                {/* === HANGING KNOTS at intervals === */}
                {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200].map((kx, i) => {
                    const kt = kx / 1200;
                    const ky = 30 + Math.sin(kt * Math.PI) * 55;
                    return (
                        <circle key={`knot-${i}`} cx={kx} cy={ky} r="3.5"
                            fill="#8B7340" stroke="#C4A35A" strokeWidth="0.8" />
                    );
                })}

                {/* === MANGO LEAVES === */}
                {leaves.map((leaf) => {
                    const gradId = `mangoLeaf${(leaf.greenShade % 4) + 1}`;
                    const swayDur = 4 + (leaf.key % 5) * 0.7; // 4s to 6.8s
                    const swayDelay = (leaf.key * 0.3) % 3; // staggered
                    return (
                        <g key={leaf.key}
                            className="thoranam-leaf"
                            style={{
                                '--tx': `${leaf.x}px`,
                                '--ty': `${leaf.y}px`,
                                '--base-rot': `${leaf.angle}deg`,
                                '--sc': leaf.scale,
                                '--sway-dur': `${swayDur}s`,
                                '--sway-delay': `-${swayDelay}s`,
                            }}>
                            {/* Leaf body */}
                            <path d="M 0 0
                                     C 4 -8 6 -20 5 -35
                                     C 4 -45 2 -52 0 -58
                                     C -2 -52 -4 -45 -5 -35
                                     C -6 -20 -4 -8 0 0 Z"
                                fill={`url(#${gradId})`}
                                stroke={getLeafColor(leaf.greenShade)}
                                strokeWidth="0.5"
                                opacity="0.9" />
                            {/* Midrib */}
                            <line x1="0" y1="0" x2="0" y2="-56"
                                stroke={getLeafHighlight(leaf.greenShade)}
                                strokeWidth="0.8" opacity="0.6" />
                            {/* Side veins */}
                            <path d="M 0 -10 L 3.5 -15" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.35" />
                            <path d="M 0 -10 L -3.5 -15" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.35" />
                            <path d="M 0 -20 L 4 -26" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.3" />
                            <path d="M 0 -20 L -4 -26" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.3" />
                            <path d="M 0 -30 L 3.5 -36" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.25" />
                            <path d="M 0 -30 L -3.5 -36" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.4" opacity="0.25" />
                            <path d="M 0 -40 L 3 -45" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.3" opacity="0.2" />
                            <path d="M 0 -40 L -3 -45" stroke={getLeafHighlight(leaf.greenShade)} strokeWidth="0.3" opacity="0.2" />
                            {/* Leaf stem */}
                            <line x1="0" y1="0" x2="0" y2="5"
                                stroke="#6B5530" strokeWidth="1" />
                        </g>
                    );
                })}

                {/* === DECORATIVE MARIGOLD/TURMERIC DOTS === */}
                {[150, 350, 600, 850, 1050].map((dx, i) => {
                    const dt = dx / 1200;
                    const dy = 28 + Math.sin(dt * Math.PI) * 55;
                    return (
                        <g key={`flower-${i}`}>
                            <circle cx={dx} cy={dy} r="5" fill="#E8A838" opacity="0.7" />
                            <circle cx={dx} cy={dy} r="3" fill="#F2C94C" opacity="0.5" />
                            <circle cx={dx} cy={dy} r="1.5" fill="#FFD700" opacity="0.6" />
                        </g>
                    );
                })}

                {/* === END TASSELS === */}
                <g transform="translate(0, 30)">
                    <line x1="0" y1="0" x2="0" y2="15" stroke="#8B7340" strokeWidth="2" />
                    <circle cx="0" cy="18" r="4" fill="#E8A838" opacity="0.6" />
                    <circle cx="0" cy="18" r="2.5" fill="#F2C94C" opacity="0.5" />
                </g>
                <g transform="translate(1200, 30)">
                    <line x1="0" y1="0" x2="0" y2="15" stroke="#8B7340" strokeWidth="2" />
                    <circle cx="0" cy="18" r="4" fill="#E8A838" opacity="0.6" />
                    <circle cx="0" cy="18" r="2.5" fill="#F2C94C" opacity="0.5" />
                </g>
                {/* Center tassel */}
                <g transform="translate(600, 85)">
                    <line x1="0" y1="0" x2="0" y2="20" stroke="#8B7340" strokeWidth="2.5" />
                    <circle cx="0" cy="24" r="6" fill="#E8A838" opacity="0.7" />
                    <circle cx="0" cy="24" r="3.5" fill="#F2C94C" opacity="0.5" />
                    <circle cx="0" cy="24" r="1.5" fill="#FFD700" opacity="0.6" />
                </g>
            </g>
        </svg>
    );
};

export default ThoranamSVG;
