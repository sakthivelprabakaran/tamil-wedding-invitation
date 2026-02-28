import React, { useEffect, useRef, useCallback } from 'react';

/**
 * MouseTrail — spawns an animated SVG heart containing "SV" wherever
 * the cursor moves. Each heart floats upward, pulses once, then fades out.
 */
const GOLD_COLORS = ['#FFD700', '#F2C94C', '#E8A838', '#FF9ECB'];

const MouseTrail = () => {
    const containerRef = useRef(null);
    const lastTimeRef = useRef(0);

    const spawnHeart = useCallback((x, y) => {
        const container = containerRef.current;
        if (!container) return;

        const size = 28 + Math.random() * 18;         // 28–46px
        const color = GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)];
        const drift = (Math.random() - 0.5) * 50;       // horizontal wobble
        const rotStart = (Math.random() - 0.5) * 20;    // slight initial tilt

        // Build SVG heart wrapper
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%) scale(0.4) rotate(${rotStart}deg);
            opacity: 0;
            transition: transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                        opacity  1.6s ease-out;
            will-change: transform, opacity;
        `;

        // Inline SVG heart with "SV" text
        wrapper.innerHTML = `
            <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg"
                 width="${size}" height="${size * 0.9}">
                <defs>
                    <filter id="hglow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>
                <!-- Heart shape -->
                <path d="M50,85 C50,85 5,55 5,28 A20,20,0,0,1,50,25 A20,20,0,0,1,95,28 C95,55 50,85 50,85 Z"
                    fill="${color}"
                    opacity="0.9"
                    filter="url(#hglow)"
                />
                <!-- Inner lighter heart for depth -->
                <path d="M50,72 C50,72 15,50 15,31 A14,14,0,0,1,50,29 A14,14,0,0,1,85,31 C85,50 50,72 50,72 Z"
                    fill="white"
                    opacity="0.18"
                />
                <!-- "SV" text centered in heart -->
                <text x="50" y="54"
                    font-family="'Cormorant Garamond','Times New Roman',serif"
                    font-size="28"
                    font-weight="700"
                    font-style="italic"
                    fill="white"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    opacity="0.95"
                    letter-spacing="2"
                >SV</text>
            </svg>
        `;

        container.appendChild(wrapper);

        // Trigger float-up + scale + fade animation
        requestAnimationFrame(() => {
            wrapper.style.opacity = '0.95';
            wrapper.style.transform = `translate(calc(-50% + ${drift}px), calc(-50% - 90px)) scale(1) rotate(${rotStart + (Math.random() - 0.5) * 15}deg)`;
        });

        // Fade out near end
        setTimeout(() => {
            wrapper.style.opacity = '0';
        }, 1200);

        // Remove after animation completes
        setTimeout(() => {
            if (wrapper.parentNode === container) container.removeChild(wrapper);
        }, 1650);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const now = Date.now();
            if (now - lastTimeRef.current < 120) return;  // throttle to ~8fps
            lastTimeRef.current = now;
            spawnHeart(e.clientX, e.clientY);
        };

        const handleTouchMove = (e) => {
            const now = Date.now();
            if (now - lastTimeRef.current < 150) return;
            lastTimeRef.current = now;
            const touch = e.touches[0];
            if (touch) spawnHeart(touch.clientX, touch.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [spawnHeart]);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
        />
    );
};

export default MouseTrail;
