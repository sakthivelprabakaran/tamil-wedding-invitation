import React from 'react';

/**
 * SikkuKolamCornerSVG — Traditional Tamil corner Kolam decoration.
 *
 * A single corner unit with concentric quarter-arcs and interlocking
 * figure-8 loops inspired by the sikku kolam style. Rotate 90°/180°/270°
 * for the other three corners via the `position` prop.
 *
 * Props:
 *   position  — 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
 *   size      — pixel size of the square SVG (default 90)
 *   color     — stroke/fill color (default '#F2C94C')
 *   opacity   — overall opacity (default 0.5)
 *   className, style
 */
const SikkuKolamCornerSVG = ({
    position = 'top-left',
    size = 90,
    color = '#F2C94C',
    opacity = 0.5,
    className = '',
    style = {},
}) => {
    const rotations = {
        'top-left': 0,
        'top-right': 90,
        'bottom-right': 180,
        'bottom-left': 270,
    };
    const rotate = rotations[position] ?? 0;

    // All paths drawn for top-left; rotation handles other corners.
    // viewBox = 100×100, corner at top-left (0,0)
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            style={{
                width: size,
                height: size,
                transform: `rotate(${rotate}deg)`,
                display: 'block',
                opacity,
                ...style,
            }}
        >
            <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">

                {/* === CONCENTRIC QUARTER-ARCS (the radiating "frame") === */}
                <path d="M 0,28 Q 28,28 28,0" strokeWidth="1.2" opacity="0.7" />
                <path d="M 0,48 Q 48,48 48,0" strokeWidth="1.2" opacity="0.65" />
                <path d="M 0,68 Q 68,68 68,0" strokeWidth="1.2" opacity="0.6" />
                <path d="M 0,88 Q 88,88 88,0" strokeWidth="1.2" opacity="0.55" />

                {/* === PULLI DOTS at the grid nodes === */}
                <circle cx="14" cy="14" r="2" fill={color} stroke="none" opacity="0.9" />
                <circle cx="14" cy="38" r="1.5" fill={color} stroke="none" opacity="0.8" />
                <circle cx="38" cy="14" r="1.5" fill={color} stroke="none" opacity="0.8" />
                <circle cx="28" cy="28" r="1.8" fill={color} stroke="none" opacity="0.85" />
                <circle cx="14" cy="58" r="1.2" fill={color} stroke="none" opacity="0.7" />
                <circle cx="58" cy="14" r="1.2" fill={color} stroke="none" opacity="0.7" />

                {/* === INNER INTERLOCKING FIGURE-8 LOOPS === */}
                {/* Top horizontal loop around the first pulli */}
                <path
                    d="M 6,14 C 6,8 22,8 22,14 C 22,20 6,20 6,14 Z"
                    strokeWidth="1"
                    opacity="0.75"
                />
                {/* Left vertical loop around the first pulli */}
                <path
                    d="M 14,6 C 8,6 8,22 14,22 C 20,22 20,6 14,6 Z"
                    strokeWidth="1"
                    opacity="0.75"
                />
                {/* Second-row horizontal loop */}
                <path
                    d="M 6,38 C 6,32 22,32 22,38 C 22,44 6,44 6,38 Z"
                    strokeWidth="0.9"
                    opacity="0.65"
                />
                {/* Second-col vertical loop */}
                <path
                    d="M 38,6 C 32,6 32,22 38,22 C 44,22 44,6 38,6 Z"
                    strokeWidth="0.9"
                    opacity="0.65"
                />
                {/* Diagonal cross-loop at (28,28) */}
                <path
                    d="M 20,28 C 20,22 36,22 36,28 C 36,34 20,34 20,28 Z"
                    strokeWidth="0.85"
                    opacity="0.6"
                />
                <path
                    d="M 28,20 C 22,20 22,36 28,36 C 34,36 34,20 28,20 Z"
                    strokeWidth="0.85"
                    opacity="0.6"
                />

                {/* === CORNER FLOWER / LOTUS === */}
                {/* Four petals around the very corner node (0,0) origin */}
                <path d="M 0,0 Q 5,-12 0,-18 Q -5,-12 0,0"
                    strokeWidth="1"
                    opacity="0.7"
                    transform="rotate(45 0 0) translate(8 0)"
                />

                {/* Small diamond at the anchor */}
                <path
                    d="M 6,0 L 10,4 L 6,8 L 2,4 Z"
                    fill={color}
                    stroke="none"
                    opacity="0.85"
                />

            </g>
        </svg>
    );
};

export default SikkuKolamCornerSVG;
