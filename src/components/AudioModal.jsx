import React from 'react';
import styles from './AudioModal.module.css';

const AudioModal = ({ onEnable }) => {
    return (
        <div className={styles.audioModal}>
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
                    Enable Audio & Enter
                </button>
            </div>
        </div>
    );
};

export default AudioModal;
