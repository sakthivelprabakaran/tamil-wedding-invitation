import React from 'react';

/**
 * VerticalGarlandSVG — A tall vertical garland strip with marigold flowers
 * on a bead string, designed to run along the left or right side of the page.
 *
 * Uses an SVG <pattern> so flowers repeat seamlessly regardless of page height.
 * Place with position: fixed and height: 100vh for full-page coverage.
 *
 * Props:
 *   side     — 'left' | 'right' (default 'left')
 *   opacity  — overall opacity (default 0.5)
 *   width    — pixel width of the garland strip (default 48)
 */
const VerticalGarlandSVG = ({ side = 'left', opacity = 0.5, width = 48 }) => {
    const patternHeight = 42; // tighter — even more flowers per screen
    const cy = 30;            // vertical centre of flower within tile
    const cx = width / 2;    // horizontal centre of strip

    const posStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        [side]: 0,
        width: `${width}px`,
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,   /* just above page background, behind content */
        opacity,
    };

    const id = `vgpat-${side}`;

    return (
        <svg
            className={`vertical-garland vertical-garland-${side}`}
            xmlns="http://www.w3.org/2000/svg"
            style={posStyle}
            preserveAspectRatio="xMidYMin slice"
            aria-hidden="true"
        >
            <defs>
                {/* ── Single repeating tile (52px tall) ── */}
                <pattern id={id} x="0" y="0"
                    width={width} height={patternHeight}
                    patternUnits="userSpaceOnUse">

                    {/* === VERTICAL ROPE === */}
                    <line x1={cx + 1} y1="0" x2={cx + 1} y2={patternHeight}
                        stroke="#6B5530" strokeWidth="1.8" opacity="0.6" />
                    <line x1={cx} y1="0" x2={cx} y2={patternHeight}
                        stroke="#8B7340" strokeWidth="1.5" />
                    <line x1={cx - 1} y1="0" x2={cx - 1} y2={patternHeight}
                        stroke="#C4A35A" strokeWidth="0.7" opacity="0.35" />

                    {/* === BEAD / KNOT at top of tile === */}
                    <circle cx={cx} cy="3" r="2.5" fill="#C4A35A" />
                    <circle cx={cx} cy="3" r="1.5" fill="#E8C56A" />

                    {/* === MARIGOLD FLOWER — compact size === */}
                    {/* Soft glow */}
                    <circle cx={cx} cy={cy} r="14" fill="#FF8F00" opacity="0.10" />
                    {/* Petal layer 1 — 8 outer petals */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                        const rad = deg * Math.PI / 180;
                        const px = cx + Math.sin(rad) * 10;
                        const py = cy + (-Math.cos(rad)) * 10;
                        return <ellipse key={i}
                            cx={px} cy={py}
                            rx="5" ry="6.5"
                            fill="#FFA000"
                            transform={`rotate(${deg} ${px} ${py})`} />;
                    })}
                    {/* Petal layer 2 — 8 inner petals, offset 22.5° */}
                    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg, i) => {
                        const rad = deg * Math.PI / 180;
                        const px = cx + Math.sin(rad) * 7;
                        const py = cy + (-Math.cos(rad)) * 7;
                        return <ellipse key={i}
                            cx={px} cy={py}
                            rx="4" ry="5.5"
                            fill="#FFB300"
                            transform={`rotate(${deg} ${px} ${py})`} />;
                    })}
                    {/* Centre dome */}
                    <circle cx={cx} cy={cy} r="5.5" fill="#FF6F00" />
                    <circle cx={cx} cy={cy} r="3.5" fill="#FF8F00" />
                    <circle cx={cx} cy={cy} r="2" fill="#FFB300" />
                    <circle cx={cx} cy={cy} r="1" fill="#FFCA28" />

                    {/* === SMALL LEAVES between bead and flower === */}
                    <path d={`M ${cx} 10 Q ${cx - 8} 16 ${cx - 4} 22`}
                        fill="#2D5A1E" opacity="0.8" />
                    <path d={`M ${cx} 10 Q ${cx + 8} 16 ${cx + 4} 22`}
                        fill="#3A6B2A" opacity="0.8" />

                </pattern>
            </defs>

            {/* Fill the full height with the repeating pattern */}
            <rect x="0" y="0" width={width} height="100%" fill={`url(#${id})`} />
        </svg>
    );
};

export default VerticalGarlandSVG;
