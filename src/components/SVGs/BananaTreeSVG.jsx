import React from 'react';

/**
 * Banana tree with natural colors and gentle wind-sway animations.
 * Green leaves, green trunk, yellow-green bananas, red-pink banana flower.
 * Each leaf sways independently with staggered timing for natural wind effect.
 */
const BananaTreeSVG = ({ className = '', style = {}, isFlipped = false }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 900"
            className={className}
            style={{ display: 'block', ...style }}
            preserveAspectRatio="xMidYMax meet"
        >
            <defs>
                <linearGradient id="leafA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3D8B37" />
                    <stop offset="50%" stopColor="#2E7D32" />
                    <stop offset="100%" stopColor="#1B5E20" />
                </linearGradient>
                <linearGradient id="leafB" x1="0.2" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4CAF50" />
                    <stop offset="50%" stopColor="#388E3C" />
                    <stop offset="100%" stopColor="#2E7D32" />
                </linearGradient>
                <linearGradient id="leafC" x1="0" y1="0.1" x2="0.3" y2="1">
                    <stop offset="0%" stopColor="#2E7D32" />
                    <stop offset="60%" stopColor="#1B5E20" />
                    <stop offset="100%" stopColor="#145214" />
                </linearGradient>
                <linearGradient id="trunkNat" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.5" />
                    <stop offset="30%" stopColor="#4CAF50" stopOpacity="0.7" />
                    <stop offset="70%" stopColor="#388E3C" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#1B5E20" stopOpacity="0.45" />
                </linearGradient>
                <linearGradient id="bananaGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C0CA33" />
                    <stop offset="50%" stopColor="#9E9D24" />
                    <stop offset="100%" stopColor="#827717" />
                </linearGradient>
                <linearGradient id="flowerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#AD1457" />
                    <stop offset="50%" stopColor="#880E4F" />
                    <stop offset="100%" stopColor="#6A0040" />
                </linearGradient>
            </defs>

            {/* Wind sway animations — each leaf has its own timing */}
            <style>{`
                .leaf-wind-1 {
                    transform-origin: 200px 230px;
                    animation: leafSway1 6s ease-in-out infinite;
                }
                .leaf-wind-2 {
                    transform-origin: 200px 230px;
                    animation: leafSway2 7s ease-in-out infinite;
                    animation-delay: -1.5s;
                }
                .leaf-wind-3 {
                    transform-origin: 195px 260px;
                    animation: leafSway1 8s ease-in-out infinite;
                    animation-delay: -3s;
                }
                .leaf-wind-4 {
                    transform-origin: 210px 265px;
                    animation: leafSway2 7.5s ease-in-out infinite;
                    animation-delay: -2s;
                }
                .leaf-wind-5 {
                    transform-origin: 190px 300px;
                    animation: leafSway1 9s ease-in-out infinite;
                    animation-delay: -4s;
                }
                .leaf-wind-6 {
                    transform-origin: 215px 305px;
                    animation: leafSway2 8.5s ease-in-out infinite;
                    animation-delay: -1s;
                }
                .leaf-wind-7 {
                    transform-origin: 198px 240px;
                    animation: leafSway1 7s ease-in-out infinite;
                    animation-delay: -5s;
                }
                .bunch-sway {
                    transform-origin: 200px 280px;
                    animation: bunchSwing 5s ease-in-out infinite;
                    animation-delay: -0.5s;
                }
                @keyframes leafSway1 {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(2.5deg); }
                    50% { transform: rotate(-1.5deg); }
                    75% { transform: rotate(1.8deg); }
                }
                @keyframes leafSway2 {
                    0%, 100% { transform: rotate(0deg); }
                    30% { transform: rotate(-2deg); }
                    60% { transform: rotate(2.2deg); }
                    80% { transform: rotate(-1deg); }
                }
                @keyframes bunchSwing {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(1.5deg); }
                }
            `}</style>

            <g transform={isFlipped ? 'translate(400, 0) scale(-1, 1)' : ''}>

                {/* ============ TRUNK ============ */}
                <path d="M 175 900 C 172 800 168 700 170 600 C 172 500 178 420 185 350 C 190 300 195 260 200 230
                         C 205 260 210 300 215 350 C 222 420 226 500 228 600 C 230 700 228 800 225 900 Z"
                    fill="url(#trunkNat)" />
                <path d="M 175 900 C 172 800 168 700 170 600 C 172 500 178 420 185 350 C 190 300 195 260 200 230"
                    fill="none" stroke="#2E7D32" strokeWidth="2" opacity="0.5" />
                <path d="M 225 900 C 228 800 230 700 228 600 C 226 500 222 420 215 350 C 210 300 205 260 200 230"
                    fill="none" stroke="#1B5E20" strokeWidth="1.5" opacity="0.4" />
                {[850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 360, 320].map((y, i) => (
                    <path key={`ring-${i}`}
                        d={`M ${173 + i * 0.5} ${y} Q ${200} ${y - 8} ${227 - i * 0.5} ${y}`}
                        fill="none" stroke="#1B5E20" strokeWidth="1" opacity="0.2" />
                ))}

                {/* ============ LEAF 1: TOP-LEFT ============ */}
                <g className="leaf-wind-1">
                    <path d="M 200 230 C 180 180 140 120 90 60 C 70 35 45 20 30 30 C 40 50 55 75 75 100 C 110 145 155 190 195 225 Z"
                        fill="url(#leafA)" stroke="#1B5E20" strokeWidth="1.5" opacity="0.85" />
                    <path d="M 200 230 C 175 175 130 110 75 50" fill="none" stroke="#81C784" strokeWidth="1.5" opacity="0.5" />
                    <path d="M 190 210 C 170 200 140 175 115 145" fill="none" stroke="#66BB6A" strokeWidth="0.8" opacity="0.3" />
                    <path d="M 182 190 C 160 180 130 155 105 125" fill="none" stroke="#66BB6A" strokeWidth="0.8" opacity="0.28" />
                    <path d="M 172 168 C 150 158 120 135 95 105" fill="none" stroke="#66BB6A" strokeWidth="0.7" opacity="0.25" />
                    <path d="M 162 148 C 140 138 115 118 90 90" fill="none" stroke="#66BB6A" strokeWidth="0.7" opacity="0.22" />
                    <path d="M 150 125 C 130 115 105 95 82 70" fill="none" stroke="#66BB6A" strokeWidth="0.6" opacity="0.2" />
                </g>

                {/* ============ LEAF 2: TOP-RIGHT ============ */}
                <g className="leaf-wind-2">
                    <path d="M 200 230 C 225 175 270 110 330 55 C 350 32 375 18 385 28 C 375 48 358 73 340 98 C 305 145 250 195 208 225 Z"
                        fill="url(#leafB)" stroke="#2E7D32" strokeWidth="1.5" opacity="0.8" />
                    <path d="M 200 230 C 230 170 285 100 345 45" fill="none" stroke="#A5D6A7" strokeWidth="1.5" opacity="0.45" />
                    <path d="M 215 208 C 240 195 275 168 305 135" fill="none" stroke="#81C784" strokeWidth="0.8" opacity="0.28" />
                    <path d="M 225 188 C 250 175 285 148 315 115" fill="none" stroke="#81C784" strokeWidth="0.7" opacity="0.25" />
                    <path d="M 238 168 C 262 155 292 130 320 100" fill="none" stroke="#81C784" strokeWidth="0.7" opacity="0.22" />
                    <path d="M 250 148 C 272 136 300 115 325 85" fill="none" stroke="#81C784" strokeWidth="0.6" opacity="0.2" />
                </g>

                {/* ============ LEAF 3: MID-LEFT ============ */}
                <g className="leaf-wind-3">
                    <path d="M 195 260 C 150 250 80 280 30 350 C 10 380 0 420 5 445 C 20 430 40 400 65 370 C 110 315 160 280 192 268 Z"
                        fill="url(#leafC)" stroke="#1B5E20" strokeWidth="1.5" opacity="0.8" />
                    <path d="M 195 260 C 140 270 65 310 15 395" fill="none" stroke="#81C784" strokeWidth="1.2" opacity="0.4" />
                    <path d="M 175 262 C 140 270 90 295 55 335" fill="none" stroke="#66BB6A" strokeWidth="0.7" opacity="0.25" />
                    <path d="M 158 268 C 125 278 78 305 45 345" fill="none" stroke="#66BB6A" strokeWidth="0.6" opacity="0.22" />
                    <path d="M 140 275 C 108 288 65 318 38 355" fill="none" stroke="#66BB6A" strokeWidth="0.6" opacity="0.2" />
                </g>

                {/* ============ LEAF 4: MID-RIGHT ============ */}
                <g className="leaf-wind-4">
                    <path d="M 210 265 C 260 255 340 285 385 365 C 398 392 400 430 395 450 C 380 435 358 405 335 375 C 290 320 245 285 215 273 Z"
                        fill="url(#leafA)" stroke="#2E7D32" strokeWidth="1.5" opacity="0.75" />
                    <path d="M 210 265 C 270 278 348 320 390 410" fill="none" stroke="#A5D6A7" strokeWidth="1.2" opacity="0.4" />
                    <path d="M 230 270 C 270 278 325 305 360 345" fill="none" stroke="#81C784" strokeWidth="0.7" opacity="0.25" />
                    <path d="M 248 278 C 288 288 340 318 370 358" fill="none" stroke="#81C784" strokeWidth="0.6" opacity="0.22" />
                </g>

                {/* ============ LEAF 5: LOWER-LEFT ============ */}
                <g className="leaf-wind-5">
                    <path d="M 190 300 C 140 320 70 390 40 490 C 30 525 30 555 40 560 C 50 545 65 510 80 475 C 115 400 155 340 188 310 Z"
                        fill="url(#leafB)" stroke="#1B5E20" strokeWidth="1.5" opacity="0.7" />
                    <path d="M 190 300 C 130 335 65 415 38 525" fill="none" stroke="#81C784" strokeWidth="1" opacity="0.35" />
                    <path d="M 170 312 C 130 335 80 390 55 450" fill="none" stroke="#66BB6A" strokeWidth="0.6" opacity="0.22" />
                </g>

                {/* ============ LEAF 6: LOWER-RIGHT ============ */}
                <g className="leaf-wind-6">
                    <path d="M 215 305 C 268 325 340 400 365 505 C 372 538 370 565 360 568 C 350 552 335 518 320 482 C 288 408 250 345 218 315 Z"
                        fill="url(#leafC)" stroke="#2E7D32" strokeWidth="1.5" opacity="0.65" />
                    <path d="M 215 305 C 280 340 345 425 368 540" fill="none" stroke="#A5D6A7" strokeWidth="1" opacity="0.35" />
                </g>

                {/* ============ LEAF 7: Small top-left accent ============ */}
                <g className="leaf-wind-7">
                    <path d="M 198 240 C 165 225 110 195 65 175 C 45 168 30 170 32 182 C 45 192 70 198 95 205 C 140 218 175 235 195 245 Z"
                        fill="url(#leafA)" stroke="#1B5E20" strokeWidth="1.2" opacity="0.6" />
                    <path d="M 198 240 C 155 222 95 195 45 178" fill="none" stroke="#81C784" strokeWidth="0.8" opacity="0.3" />
                </g>

                {/* ============ BANANA BUNCH ============ */}
                <g className="bunch-sway">
                    <path d="M 200 280 C 195 295 185 310 180 340" fill="none" stroke="#2E7D32" strokeWidth="3" opacity="0.7" />

                    <path d="M 162 340 C 155 358 154 378 160 392 C 168 378 170 358 162 340" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 172 337 C 166 355 165 375 170 389 C 178 375 179 355 172 337" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 182 335 C 177 353 176 373 181 387 C 189 373 190 353 182 335" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 192 337 C 188 355 187 375 192 389 C 200 375 200 355 192 337" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 158 338 C 155 330 170 325 195 330 C 200 332 195 340 158 338" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.8" opacity="0.6" />

                    <path d="M 160 390 C 153 408 152 428 158 442 C 166 428 168 408 160 390" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 170 387 C 164 405 163 425 168 439 C 176 425 177 405 170 387" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 180 385 C 175 403 174 423 179 437 C 187 423 188 403 180 385" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 190 387 C 186 405 185 425 190 439 C 198 425 198 405 190 387" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 156 388 C 153 380 168 375 193 380 C 198 382 193 390 156 388" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.8" opacity="0.6" />

                    <path d="M 162 440 C 156 458 155 478 160 490 C 168 478 169 458 162 440" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 172 438 C 167 456 166 476 170 488 C 178 476 179 456 172 438" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 182 436 C 178 454 177 474 181 486 C 189 474 190 454 182 436" fill="url(#bananaGrad)" stroke="#827717" strokeWidth="1" />
                    <path d="M 158 438 C 155 430 170 425 185 430 C 190 432 185 440 158 438" fill="#2E7D32" stroke="#1B5E20" strokeWidth="0.8" opacity="0.6" />

                    {/* Banana Flower */}
                    <path d="M 172 488 C 162 510 158 535 165 555 C 175 545 180 525 172 488"
                        fill="url(#flowerGrad)" stroke="#880E4F" strokeWidth="1.5" opacity="0.85" />
                    <path d="M 172 488 C 182 512 185 538 178 555 C 168 542 164 520 172 488"
                        fill="url(#flowerGrad)" stroke="#AD1457" strokeWidth="1.2" opacity="0.75" />
                    <path d="M 165 555 C 156 570 158 585 168 580" fill="#AD1457" stroke="#880E4F" strokeWidth="0.8" opacity="0.6" />
                    <path d="M 178 555 C 186 570 184 585 174 580" fill="#AD1457" stroke="#880E4F" strokeWidth="0.8" opacity="0.6" />
                    <path d="M 170 558 C 170 575 172 588 172 575" fill="none" stroke="#C2185B" strokeWidth="0.8" opacity="0.4" />
                </g>
            </g>
        </svg>
    );
};

export default BananaTreeSVG;
