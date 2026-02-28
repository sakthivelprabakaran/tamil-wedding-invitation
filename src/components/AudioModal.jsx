import React, { useState, useEffect } from 'react';
import styles from './AudioModal.module.css';
import SikkuKolamSVG from './SVGs/SikkuKolamSVG';
import KolamCorners from './KolamCorners';
import Glitter from './Glitter';

const kurals = [
    {
        number: '45',
        chapter: 'இல்வாழ்க்கை',
        tamil: 'அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை\nபண்பும் பயனும் அது.',
        meaning: 'If married life possesses love and virtue, that is both its duty and reward.',
    },
    {
        number: '46',
        chapter: 'இல்வாழ்க்கை',
        tamil: 'அறத்தாற்றின் இல்வாழ்க்கை ஆற்றின் புறத்தாற்றின்\nபோய்ப் பெறுவது எவன்.',
        meaning: 'If one leads married life on the path of virtue, what more can they gain by renunciation?',
    },
    {
        number: '51',
        chapter: 'வாழ்க்கைத் துணை நலம்',
        tamil: 'மனைத்தக்க மாண்புடையள் ஆகித் தற்கொண்டான்\nவளத்தக்காள் வாழ்க்கைத் துணை.',
        meaning: 'A wife of noble character who lives within her husband\'s means is the perfect companion in life.',
    },
    {
        number: '54',
        chapter: 'வாழ்க்கைத் துணை நலம்',
        tamil: 'பெண்ணின் பெருந்தக்க யாவுள கற்பென்னும்\nதிண்மைஉண் டாகப் பெறின்.',
        meaning: 'What is more precious than a woman who possesses the strength of chastity and fidelity?',
    },
    {
        number: '60',
        chapter: 'வாழ்க்கைத் துணை நலம்',
        tamil: 'நன்கலம் நன்மக்கட் பேறு.',
        meaning: 'Having virtuous children is the greatest jewel and treasure of a home.',
    },
    {
        number: '1122',
        chapter: 'காமம்',
        tamil: 'உடம்பொடு உயிரிடை என்னமற் றன்ன\nமடந்தையொடு எம்மிடை நட்பு.',
        meaning: 'The bond between my beloved and me is like the union between body and soul — inseparable.',
    },
    {
        number: '1126',
        chapter: 'காமம்',
        tamil: 'கண்ணுள்ளின் போகார் இமைப்பின் பருகுவரா\nநுண்ணியர்எம் காத லவர்.',
        meaning: 'My lover never leaves my sight — I fear to even blink, lest they disappear.',
    },
    {
        number: '1281',
        chapter: 'காமம்',
        tamil: 'கள்ளுக்கில் காமத்திற் குண்டு.',
        meaning: 'Love holds a greater intoxication than even the finest liquor.',
    },
];

const AudioModal = ({ onEnable }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % kurals.length);
                setVisible(true);
            }, 600);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const kural = kurals[currentIndex];

    return (
        <div className={`${styles.audioModal} glitter-bg`}>
            {/* GLITTER BACKGROUND */}
            <Glitter count={55} />

            {/* FULL-SCREEN KOLAM BACKGROUND */}
            <div className={styles.kolamBg}>
                <SikkuKolamSVG opacity={0.15} animationDelay="0.3s" />
            </div>

            {/* CORNER KOLAM ORNAMENTS */}
            <KolamCorners size={110} opacity={0.5} offset={20} />

            {/* LEFT FLOATING KURAL PANEL */}
            <div className={`${styles.kuralSidePanel} ${styles.kuralLeft} ${visible ? styles.kuralVisible : styles.kuralHidden}`}>
                <p className={styles.kuralChapter}>திருக்குறள்</p>
                <p className={styles.kuralNumber}>{kural.chapter} · {kural.number}</p>
                <p className={styles.kuralTamil}>{kural.tamil}</p>
                <div className={styles.kuralDivider}></div>
                <p className={styles.kuralMeaning}>"{kural.meaning}"</p>
            </div>

            {/* MODAL CARD — restored to original */}
            <div className={styles.modalContent}>
                <div className={styles.musicalNote}>♪</div>
                <h2 className={styles.modalTitle}>Welcome</h2>
                <p className={styles.modalText}>
                    This invitation features interactive audio.
                    Enable sound for the full experience.
                </p>
                <button
                    className={styles.enableButton}
                    onClick={onEnable}
                >
                    Enable Audio &amp; Enter
                </button>

                {/* MOBILE THIRUKKURAL PANEL (hidden on desktop) */}
                <div className={`${styles.kuralMobile} ${visible ? styles.kuralVisible : styles.kuralHidden}`}>
                    <p className={styles.kuralTamilMobile}>{kural.tamil}</p>
                    <div className={styles.kuralDividerMobile}></div>
                    <p className={styles.kuralMeaningMobile}>"{kural.meaning}"</p>
                </div>
            </div>

            {/* RIGHT FLOATING KURAL PANEL */}
            <div className={`${styles.kuralSidePanel} ${styles.kuralRight} ${visible ? styles.kuralVisible : styles.kuralHidden}`}>
                <p className={styles.kuralChapter}>திருக்குறள்</p>
                <p className={styles.kuralNumber}>{kural.chapter} · {kural.number}</p>
                <p className={styles.kuralTamil}>{kural.tamil}</p>
                <div className={styles.kuralDivider}></div>
                <p className={styles.kuralMeaning}>"{kural.meaning}"</p>
            </div>

        </div>
    );
};

export default AudioModal;
