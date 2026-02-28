import React from 'react';

/**
 * SikkuKolamSVG — Traditional Tamil Sikku Kolam (சிக்கு கோலம்)
 * Interlocking figure-8 loop grid pattern in gold on transparent background.
 *
 * Props:
 *   className, style — passed to the outer <svg>
 *   opacity          — overall opacity (default 0.18 for subtle watermark)
 *   animationDelay   — delay before the draw-on animation starts (default "0s")
 */
const SikkuKolamSVG = ({ className = '', style = {}, opacity = 0.18, animationDelay = '0s' }) => {
    // Core unit cell size
    const U = 40;

    // ── Utility: a figure-8 / lemniscate loop for one cell
    //    Centred at (cx, cy), oriented horizontally (H) or vertically (V)
    const loopH = (cx, cy) =>
        `M ${cx - U * 0.45} ${cy}
         C ${cx - U * 0.45} ${cy - U * 0.28}  ${cx - U * 0.12} ${cy - U * 0.28}  ${cx} ${cy}
         C ${cx + U * 0.12} ${cy - U * 0.28}  ${cx + U * 0.45} ${cy - U * 0.28}  ${cx + U * 0.45} ${cy}
         C ${cx + U * 0.45} ${cy + U * 0.28}  ${cx + U * 0.12} ${cy + U * 0.28}  ${cx} ${cy}
         C ${cx - U * 0.12} ${cy + U * 0.28}  ${cx - U * 0.45} ${cy + U * 0.28}  ${cx - U * 0.45} ${cy} Z`;

    const loopV = (cx, cy) =>
        `M ${cx} ${cy - U * 0.45}
         C ${cx - U * 0.28} ${cy - U * 0.45}  ${cx - U * 0.28} ${cy - U * 0.12}  ${cx} ${cy}
         C ${cx - U * 0.28} ${cy + U * 0.12}  ${cx - U * 0.28} ${cy + U * 0.45}  ${cx} ${cy + U * 0.45}
         C ${cx + U * 0.28} ${cy + U * 0.45}  ${cx + U * 0.28} ${cy + U * 0.12}  ${cx} ${cy}
         C ${cx + U * 0.28} ${cy - U * 0.12}  ${cx + U * 0.28} ${cy - U * 0.45}  ${cx} ${cy - U * 0.45} Z`;

    // ── Diagonal cross connecting diamonds
    const diamond = (cx, cy, r = 7) =>
        `M ${cx} ${cy - r} L ${cx + r} ${cy} L ${cx} ${cy + r} L ${cx - r} ${cy} Z`;

    // ── Dot
    const dot = (cx, cy, r = 2.5) => ({ cx, cy, r });

    // ── Build the repeating grid (7 cols × 5 rows of loop‑pair tiles)
    const cols = 7;
    const rows = 5;
    const padX = U * 0.5;
    const padY = U * 0.5;

    const hLoops = [];
    const vLoops = [];
    const diamonds = [];
    const dots = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cx = padX + col * U * 1.4 + U * 0.7;
            const cy = padY + row * U * 1.4 + U * 0.7;

            // Horizontal figure-8 at each cell
            hLoops.push(loopH(cx, cy));

            // Vertical figure-8 interleaved between horizontal loops
            if (col < cols - 1 && row < rows - 1) {
                const vcx = cx + U * 0.7;
                const vcy = cy + U * 0.7;
                vLoops.push(loopV(vcx, vcy));
            }

            // Diamond at each grid intersection
            diamonds.push(diamond(cx, cy));

            // Small accent dots between loop pairs
            if (col < cols - 1) dots.push(dot(cx + U * 0.7, cy));
            if (row < rows - 1) dots.push(dot(cx, cy + U * 0.7));
        }
    }

    // Corner ornament — 4-petal cross
    const cornerOrnament = (ox, oy) => (
        `M ${ox} ${oy - 14} Q ${ox + 6} ${oy} ${ox} ${oy + 14}
         Q ${ox - 6} ${oy} ${ox} ${oy - 14} Z
         M ${ox - 14} ${oy} Q ${ox} ${oy + 6} ${ox + 14} ${oy}
         Q ${ox} ${oy - 6} ${ox - 14} ${oy} Z`
    );

    const W = padX * 2 + (cols) * U * 1.4;
    const H = padY * 2 + (rows) * U * 1.4;

    const totalLoopLen = 520; // approximate stroke-dasharray for draw animation

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${W} ${H}`}
            className={className}
            style={{ display: 'block', width: '100%', height: '100%', opacity, ...style }}
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <style>{`
                    @keyframes kolamDraw {
                        0%   { stroke-dashoffset: ${totalLoopLen}; opacity: 0; }
                        10%  { opacity: 1; }
                        100% { stroke-dashoffset: 0; opacity: 1; }
                    }
                    @keyframes kolamPulse {
                        0%, 100% { opacity: ${opacity}; }
                        50%       { opacity: ${opacity * 1.7}; }
                    }
                    .kolam-loops {
                        stroke-dasharray: ${totalLoopLen};
                        stroke-dashoffset: ${totalLoopLen};
                        animation:
                            kolamDraw 3.5s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelay} forwards,
                            kolamPulse 6s ease-in-out ${animationDelay} infinite;
                        will-change: stroke-dashoffset, opacity;
                    }
                    .kolam-diamonds {
                        animation: kolamPulse 4s ease-in-out ${animationDelay} 1s infinite alternate;
                    }
                    .kolam-dots {
                        animation: kolamPulse 5s ease-in-out ${animationDelay} 0.5s infinite alternate;
                    }
                `}</style>

                {/* Subtle gold gradient */}
                <linearGradient id="kolamGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F2C94C" />
                    <stop offset="50%" stopColor="#C9933A" />
                    <stop offset="100%" stopColor="#F2C94C" />
                </linearGradient>
            </defs>

            {/* === HORIZONTAL FIGURE-8 LOOPS === */}
            <g className="kolam-loops">
                {hLoops.map((d, i) => (
                    <path
                        key={`h-${i}`}
                        d={d}
                        fill="none"
                        stroke="url(#kolamGold)"
                        strokeWidth="1.2"
                    />
                ))}
            </g>

            {/* === VERTICAL FIGURE-8 LOOPS === */}
            <g className="kolam-loops" style={{ animationDelay: `calc(${animationDelay} + 0.4s)` }}>
                {vLoops.map((d, i) => (
                    <path
                        key={`v-${i}`}
                        d={d}
                        fill="none"
                        stroke="url(#kolamGold)"
                        strokeWidth="1.0"
                    />
                ))}
            </g>

            {/* === DIAMOND NODES at intersections === */}
            <g className="kolam-diamonds">
                {diamonds.map((d, i) => (
                    <path
                        key={`d-${i}`}
                        d={d}
                        fill="url(#kolamGold)"
                        stroke="none"
                    />
                ))}
            </g>

            {/* === ACCENT DOTS === */}
            <g className="kolam-dots">
                {dots.map((d, i) => (
                    <circle
                        key={`dot-${i}`}
                        cx={d.cx}
                        cy={d.cy}
                        r={d.r}
                        fill="#F2C94C"
                    />
                ))}
            </g>

            {/* === CORNER ORNAMENTS === */}
            <g opacity="0.9">
                <path d={cornerOrnament(padX, padY)} fill="url(#kolamGold)" />
                <path d={cornerOrnament(W - padX, padY)} fill="url(#kolamGold)" />
                <path d={cornerOrnament(padX, H - padY)} fill="url(#kolamGold)" />
                <path d={cornerOrnament(W - padX, H - padY)} fill="url(#kolamGold)" />
            </g>
        </svg>
    );
};

export default SikkuKolamSVG;
