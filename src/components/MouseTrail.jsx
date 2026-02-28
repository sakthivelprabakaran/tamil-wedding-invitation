import React, { useEffect, useRef, useCallback } from 'react';

/**
 * MouseTrail — drops "S", "&", "V" letters wherever the mouse moves.
 * Letters float upward and fade out. Throttled so it doesn't spam too many elements.
 */
const LETTERS = ['S', '&', 'V'];
const COLORS = ['#FFD700', '#F2C94C', '#E8A838', '#D4957A'];

const MouseTrail = () => {
    const containerRef = useRef(null);
    const indexRef = useRef(0);
    const lastTimeRef = useRef(0);

    const spawnLetter = useCallback((x, y) => {
        const container = containerRef.current;
        if (!container) return;

        const letter = document.createElement('span');
        const char = LETTERS[indexRef.current % LETTERS.length];
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const size = 12 + Math.random() * 14;
        const drift = (Math.random() - 0.5) * 40;

        indexRef.current++;

        letter.textContent = char;
        letter.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      font-family: 'Great Vibes', cursive;
      font-size: ${size}px;
      color: ${color};
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
      z-index: 9999;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: transform, opacity;
    `;

        container.appendChild(letter);

        // Trigger animation on next frame
        requestAnimationFrame(() => {
            letter.style.opacity = '0';
            letter.style.transform = `translate(calc(-50% + ${drift}px), calc(-50% - 80px)) scale(0.3) rotate(${(Math.random() - 0.5) * 30}deg)`;
        });

        // Remove element after animation
        setTimeout(() => {
            if (letter.parentNode === container) {
                container.removeChild(letter);
            }
        }, 1600);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const now = Date.now();
            // Throttle: spawn a letter every 100ms
            if (now - lastTimeRef.current < 100) return;
            lastTimeRef.current = now;

            spawnLetter(e.clientX, e.clientY);
        };

        const handleTouchMove = (e) => {
            const now = Date.now();
            if (now - lastTimeRef.current < 120) return;
            lastTimeRef.current = now;

            const touch = e.touches[0];
            if (touch) {
                spawnLetter(touch.clientX, touch.clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [spawnLetter]);

    return <div ref={containerRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }} />;
};

export default MouseTrail;
