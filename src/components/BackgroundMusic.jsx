import React, { useEffect, useRef, useState } from 'react';
import { publicUrl } from '../utils/publicUrl';
import styles from './BackgroundMusic.module.css';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const audio = new Audio(publicUrl('/audio/background_music.mp3'));
        audio.loop = true;
        audio.volume = 0.22;
        audioRef.current = audio;

        // Try autoplay immediately
        const tryPlay = () => {
            audio.play()
                .then(() => setVisible(true))
                .catch(() => {
                    // Browser blocked autoplay — wait for first user gesture
                    const startOnInteraction = () => {
                        audio.play()
                            .then(() => setVisible(true))
                            .catch(() => { });
                        document.removeEventListener('click', startOnInteraction);
                        document.removeEventListener('touchstart', startOnInteraction);
                        document.removeEventListener('keydown', startOnInteraction);
                    };
                    document.addEventListener('click', startOnInteraction, { once: true });
                    document.addEventListener('touchstart', startOnInteraction, { once: true });
                    document.addEventListener('keydown', startOnInteraction, { once: true });
                });
        };

        tryPlay();

        // Pause on tab switch, resume on focus
        const handleVisibilityChange = () => {
            if (document.hidden) {
                audio.pause();
            } else if (!muted) {
                audio.play().catch(() => { });
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            audio.pause();
            audio.src = '';
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (muted) {
            audio.volume = 0.22;
            audio.play().catch(() => { });
            setMuted(false);
        } else {
            audio.volume = 0;
            setMuted(true);
        }
    };

    if (!visible) return null;

    return (
        <button
            className={`${styles.musicBtn} ${muted ? styles.muted : ''}`}
            onClick={toggle}
            title={muted ? 'Unmute music' : 'Mute music'}
            aria-label={muted ? 'Unmute background music' : 'Mute background music'}
        >
            <span className={styles.icon}>{muted ? '♪' : '♫'}</span>
        </button>
    );
};

export default BackgroundMusic;

