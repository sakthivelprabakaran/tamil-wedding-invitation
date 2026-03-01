import React, { useMemo } from 'react';

/**
 * FloatingHearts — renders random floating wireframe hearts with "SV" inside.
 * Replaces the old Glitter component.
 */
const FloatingHearts = ({ count = 25 }) => {
    const particles = useMemo(() => {
        const items = [];
        const colors = ['', 'rose', 'saffron'];
        const sizes = ['', 'large', 'tiny', 'tiny'];

        for (let i = 0; i < count; i++) {
            items.push({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: sizes[Math.floor(Math.random() * sizes.length)],
                duration: `${4 + Math.random() * 6}s`,
                delay: `${Math.random() * 8}s`,
            });
        }

        return items;
    }, [count]);

    return (
        <div className="floating-heart-canvas" aria-hidden="true">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className={`heart-sparkle ${p.color} ${p.size}`}
                    style={{
                        left: p.left,
                        top: p.top,
                        '--duration': p.duration,
                        '--delay': p.delay,
                    }}
                >
                    <svg className="heart-svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        <text x="12" y="14.5" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="currentColor" stroke="none" style={{ fontFamily: 'Playfair Display, serif' }}>SV</text>
                        {/* Tiny internal 4-point sparkle */}
                        <path className="inner-sparkle" d="M16 8 L16.5 9.5 L18 10 L16.5 10.5 L16 12 L15.5 10.5 L14 10 L15.5 9.5 Z" fill="var(--yellow-bright)" stroke="none" />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;
