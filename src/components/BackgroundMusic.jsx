import React, { useEffect, useRef, useState } from 'react';
import { audioManager } from '../utils/audioManager';
import styles from './BackgroundMusic.module.css';

const BackgroundMusic = () => {
    const audioRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Since AudioModal unlocks the BGM immediately, we can make the button visible
        // as soon as it mounts to allow the user to control the BGM on the first page.

        const checkAudioStatus = () => {
            if (audioManager.bgm) {
                setVisible(true);
                setMuted(audioManager.bgm.volume === 0 || audioManager.bgm.paused);
            }
        };

        // Check immediately
        checkAudioStatus();

        // Fast polling just to catch the state change when AudioModal enables it
        const interval = setInterval(checkAudioStatus, 200);

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

