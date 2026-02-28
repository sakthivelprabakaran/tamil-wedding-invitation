import React, { useMemo } from 'react';

/**
 * Glitter — renders random sparkle dot particles across a section.
 * No more star-cross shapes (they looked like "T").
 * Just soft glowing dots in gold, rose-gold, and saffron.
 */
const Glitter = ({ count = 25 }) => {
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
        <div className="glitter-canvas" aria-hidden="true">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className={`sparkle ${p.color} ${p.size}`}
                    style={{
                        left: p.left,
                        top: p.top,
                        '--duration': p.duration,
                        '--delay': p.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default Glitter;
