import React from 'react';

const BananaTreeSVG = ({ className = '', style = {}, isFlipped = false }) => {
    const transform = isFlipped ? 'scale(-1, 1) translate(-200, 0)' : '';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 600"
            className={className}
            style={{ display: 'block', height: '100%', ...style }}
        >
            <g transform={transform}>
                {/* Trunk */}
                <path d="M 90 600 C 90 400 80 200 100 150 C 110 200 115 400 110 600 Z" fill="var(--tertiary-color)" opacity="0.6" />
                <path d="M 95 600 C 95 400 85 200 100 150 C 105 200 105 400 105 600 Z" fill="rgba(0,0,0,0.1)" />

                {/* Leaves (Vazhai Ilai) */}
                {/* Top Left Leaf */}
                <path d="M 100 150 C 60 100 20 80 10 120 C 30 140 60 160 95 160 Z" fill="var(--primary-color)" opacity="0.8" />
                <path d="M 100 150 Q 50 110 10 120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />

                {/* Top Right Leaf */}
                <path d="M 100 150 C 140 80 180 70 190 110 C 170 130 130 150 105 160 Z" fill="var(--primary-color)" />
                <path d="M 100 150 Q 150 90 190 110" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />

                {/* Mid Left Leaf (Large) */}
                <path d="M 95 180 C 40 160 -10 200 10 280 C 40 250 60 220 95 200 Z" fill="var(--primary-color)" />
                <path d="M 95 180 Q 30 180 10 280" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />

                {/* Mid Right Leaf (Large, droopy) */}
                <path d="M 105 190 C 160 170 190 220 180 320 C 160 280 130 230 105 210 Z" fill="var(--primary-color)" opacity="0.9" />
                <path d="M 105 190 Q 180 200 180 320" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />

                {/* Bottom Left Leaf (Droopy) */}
                <path d="M 90 230 C 40 250 20 320 30 400 C 50 360 70 280 95 250 Z" fill="var(--primary-color)" opacity="0.85" />

                {/* Bottom Right Leaf */}
                <path d="M 105 240 C 150 260 160 340 140 420 C 130 380 120 300 100 270 Z" fill="var(--primary-color)" opacity="0.75" />

                {/* Banana Bunch (Thaar) */}
                <g transform="translate(85, 230) rotate(-15)">
                    <path d="M 0 0 C -10 20 -5 50 10 70 C 20 50 20 20 0 0 Z" fill="var(--tertiary-color)" />
                    {/* Individual bananas */}
                    <path d="M -5 30 Q -15 40 0 50" stroke="var(--quaternary-color)" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M 0 35 Q -10 45 5 55" stroke="var(--quaternary-color)" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M 5 30 Q 15 40 0 50" stroke="var(--quaternary-color)" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M 8 35 Q 18 45 3 55" stroke="var(--quaternary-color)" strokeWidth="4" strokeLinecap="round" fill="none" />
                    {/* Banana flower (Poo) */}
                    <path d="M 5 70 L 15 90 L 0 85 Z" fill="var(--primary-color)" />
                </g>
            </g>
        </svg>
    );
};

export default BananaTreeSVG;
