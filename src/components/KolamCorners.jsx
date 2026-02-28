import React from 'react';
import SikkuKolamCornerSVG from './SVGs/SikkuKolamCornerSVG';

/**
 * KolamCorners — places a SikkuKolam corner decoration in all 4 corners
 * of the nearest `position: relative` ancestor.
 *
 * Props:
 *   size     — pixel size of each corner (default 90)
 *   color    — gold color (default '#F2C94C')
 *   opacity  — (default 0.45)
 *   offset   — pixel inset from edge (default 0)
 */
const KolamCorners = ({ size = 90, color = '#F2C94C', opacity = 0.45, offset = 0 }) => {
    const base = {
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 2,
    };

    return (
        <>
            <SikkuKolamCornerSVG
                position="top-left"
                size={size}
                color={color}
                opacity={opacity}
                style={{ ...base, top: offset, left: offset }}
            />
            <SikkuKolamCornerSVG
                position="top-right"
                size={size}
                color={color}
                opacity={opacity}
                style={{ ...base, top: offset, right: offset }}
            />
            <SikkuKolamCornerSVG
                position="bottom-right"
                size={size}
                color={color}
                opacity={opacity}
                style={{ ...base, bottom: offset, right: offset }}
            />
            <SikkuKolamCornerSVG
                position="bottom-left"
                size={size}
                color={color}
                opacity={opacity}
                style={{ ...base, bottom: offset, left: offset }}
            />
        </>
    );
};

export default KolamCorners;
