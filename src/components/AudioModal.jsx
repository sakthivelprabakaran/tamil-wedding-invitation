import React from 'react';
import { Volume2 } from 'lucide-react';
import styles from './AudioModal.module.css';

const AudioModal = ({ onEnable }) => {
    return (
        <div className={styles.audioModal}>
            <div className={styles.modalContent}>
                <div className={styles.modalIcon}>
                    <Volume2 size={64} />
                </div>
                <h2 className={styles.modalTitle}>Welcome to Our Wedding!</h2>
                <p className={styles.modalText}>
                    For the <strong>best experience</strong>, this invitation includes interactive audio features.
                    <br /><br />
                    Hover over each side to hear playful messages from the bride and groom!
                </p>
                <button
                    className={styles.enableButton}
                    onClick={onEnable}
                >
                    Enable Audio & Continue
                </button>
            </div>
        </div>
    );
};

export default AudioModal;
