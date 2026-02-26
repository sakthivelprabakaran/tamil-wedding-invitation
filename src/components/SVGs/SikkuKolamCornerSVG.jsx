import React from 'react';

const SikkuKolamCornerSVG = ({ className = '', style = {}, fill = 'currentColor', position = 'top-left' }) => {
    // Determine rotation based on corner position
    let rotate = 0;
    if (position === 'top-right') rotate = 90;
    else if (position === 'bottom-right') rotate = 180;
    else if (position === 'bottom-left') rotate = 270;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            style={{
                width: '60px',
                height: '60px',
                transform: `rotate(${rotate}deg)`,
                position: 'absolute',
                ...style
            }}
        >
            <g stroke={fill} strokeWidth="1.5" fill="none" opacity="0.4">
                {/* Dots (Pulli) */}
                <circle cx="20" cy="20" r="1.5" fill={fill} />
                <circle cx="50" cy="20" r="1.5" fill={fill} />
                <circle cx="80" cy="20" r="1.5" fill={fill} />
                <circle cx="20" cy="50" r="1.5" fill={fill} />
                <circle cx="50" cy="50" r="1.5" fill={fill} />
                <circle cx="20" cy="80" r="1.5" fill={fill} />

                {/* Sikku curved lines wrapping around dots */}
                <path d="M 0 35 C 35 35 35 0 35 0" />
                <path d="M 0 65 C 65 65 65 0 65 0" />
                <path d="M 0 95 C 95 95 95 0 95 0" />

                {/* Intertwining loops */}
                <path d="M 35 0 C 35 25 15 25 15 0" />
                <path d="M 0 35 C 25 35 25 15 0 15" />
                <path d="M 65 0 C 65 55 10 55 10 0" />
                <path d="M 0 65 C 55 65 55 10 0 10" />
            </g>
        </svg>
    );
};

export default SikkuKolamCornerSVG;
