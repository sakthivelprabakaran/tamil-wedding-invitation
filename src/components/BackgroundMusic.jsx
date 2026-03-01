import React, { useEffect, useRef, useState } from 'react';
import { audioManager } from '../utils/audioManager';
import styles from './BackgroundMusic.module.css';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // We defer to audioManager to handle the strict mobile autoplay policy 
        // to keep logic centralized, playing background music when the user interacts
        // with the modal or screen.

        const checkAudioStatus = () => {
            if (audioManager.bgm && !audioManager.bgm.paused) {
                setVisible(true);
                setMuted(audioManager.bgm.volume === 0);
            }
        };

        const interval = setInterval(checkAudioStatus, 1000);

        const handleVisibilityChange = () => {
            if (document.hidden && audioManager.bgm) {
                audioManager.bgm.pause();
            } else if (!document.hidden && audioManager.bgm && !muted) {
                audioManager.bgm.play().catch(() => { });
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [muted]);

    const toggle = () => {
        const audio = audioManager.bgm;
        if (!audio) return;

        if (audio.volume === 0 || audio.paused) {
            audio.volume = 0.22;
            audio.play().catch(() => { });
            setMuted(false);
        } else {
            audio.volume = 0;
            // Keep it playing but muted so we don't lose the interaction token on mobile
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

