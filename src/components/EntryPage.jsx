import React, { useState, useEffect, useRef } from 'react';
import AudioModal from './AudioModal';
import Glitter from './Glitter';
import ThoranamSVG from './SVGs/ThoranamSVG';
import { publicUrl } from '../utils/publicUrl';
import styles from './EntryPage.module.css';

const EntryPage = ({ onEnter }) => {
  const [animating, setAnimating] = useState(false);
  const [currentSide, setCurrentSide] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [currentAudio, setCurrentAudio] = useState(null);
  const conversationTimeoutRef = useRef(null);
  const targetSideRef = useRef(null);
  const currentSideRef = useRef(null);

  const handleEnableAudio = () => {
    const testAudio = new Audio();
    testAudio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0QWrLq8KVTFQlDl93wv3EiBTKAzPLXgjIGHm+/7uiZRwwQWrzq8qVTFApBl9zwv3Ah';
    testAudio.volume = 0.01;
    testAudio.play().catch(() => { });
    setTimeout(() => testAudio.pause(), 100);

    setAudioEnabled(true);
    setShowModal(false);
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || window.innerWidth <= 768;
  };

  const handleSelection = (side) => {
    if (!audioEnabled) return;
    stopAllAudio();

    setAnimating(true);
    setTimeout(() => {
      onEnter(side);
    }, 1200);
  };

  const playAudioWithFallback = (audioPath, fallbackText, pitch = 1, rate = 1.1) => {
    return new Promise((resolve) => {
      const audio = new Audio(audioPath);
      audio.volume = 1;

      audio.play()
        .then(() => {
          setCurrentAudio(audio);
          audio.onended = () => resolve();
        })
        .catch(() => {
          const utterance = new SpeechSynthesisUtterance(fallbackText);
          utterance.pitch = pitch;
          utterance.rate = rate;
          utterance.volume = 1;
          utterance.onend = () => resolve();
          window.speechSynthesis.speak(utterance);
        });
    });
  };

  const stopAllAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
    window.speechSynthesis.cancel();
    if (conversationTimeoutRef.current) {
      clearTimeout(conversationTimeoutRef.current);
      conversationTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (side) => {
    if (!audioEnabled) return;
    targetSideRef.current = side;
    const previousSide = currentSideRef.current;
    currentSideRef.current = side;
    setCurrentSide(side);

    if (previousSide === null) {
      stopAllAudio();
      if (side === 'groom') {
        playAudioWithFallback(publicUrl('/audio/groom_hover_welcome.m4a'), "Hey! Are you on the groom's side? Click here to enter!", 0.9);
      } else {
        playAudioWithFallback(publicUrl('/audio/bride_hover_welcome.m4a'), "Hello! Are you on the bride's side? Come on in, click here!", 1.3);
      }
    } else if (previousSide !== side) {
      stopAllAudio();
      if (previousSide === 'groom') {
        playAudioWithFallback(publicUrl('/audio/groom_hover_jealous.m4a'), "Hey hey hey! Stay here on my side!", 0.85, 1.2).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'bride') {
              playAudioWithFallback(publicUrl('/audio/bride_response_to_groom.m4a'), "They're MY side now. Welcome!", 1.3, 1.1);
            }
          }, 500);
        });
      } else {
        playAudioWithFallback(publicUrl('/audio/bride_hover_jealous.m4a'), "Wait! Don't leave me!", 1.35, 1.2).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'groom') {
              playAudioWithFallback(publicUrl('/audio/groom_response_to_bride.m4a'), "Ha! They came back to MY side!", 0.9, 1.1);
            }
          }, 500);
        });
      }
    }
  };

  const handleTouch = (side) => {
    if (!audioEnabled || !isMobile()) return;
    const previousSide = currentSideRef.current;
    if (previousSide === side) { handleSelection(side); return; }
    currentSideRef.current = side;
    setCurrentSide(side);

    if (previousSide === null) {
      stopAllAudio();
      if (side === 'groom') {
        playAudioWithFallback(publicUrl('/audio/groom_hover_welcome.m4a'), "Hey! Are you on the groom's side?", 0.9);
      } else {
        playAudioWithFallback(publicUrl('/audio/bride_hover_welcome.m4a'), "Hello! Are you on the bride's side?", 1.3);
      }
    } else if (previousSide !== side) {
      stopAllAudio();
      if (previousSide === 'groom') {
        playAudioWithFallback(publicUrl('/audio/groom_hover_jealous.m4a'), "Stay here!", 0.85, 1.2).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'bride') {
              playAudioWithFallback(publicUrl('/audio/bride_response_to_groom.m4a'), "Welcome to my side!", 1.3, 1.1);
            }
          }, 500);
        });
      } else {
        playAudioWithFallback(publicUrl('/audio/bride_hover_jealous.m4a'), "Don't leave!", 1.35, 1.2).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'groom') {
              playAudioWithFallback(publicUrl('/audio/groom_response_to_bride.m4a'), "Welcome back!", 0.9, 1.1);
            }
          }, 500);
        });
      }
    }
  };

  useEffect(() => {
    return () => { stopAllAudio(); };
  }, []);

  return (
    <>
      {showModal && <AudioModal onEnable={handleEnableAudio} />}

      <div className={`${styles.entryPage} ${animating ? styles.exiting : ''}`}>

        {/* Top traditional simple thoranam border */}
        <div className={styles.entryThoranamContainer}>
          <ThoranamSVG />
        </div>

        <div
          className={`${styles.split} ${styles.left} glitter-bg`}
          onClick={(e) => {
            if (isMobile() && !animating) { e.preventDefault(); handleTouch('groom'); }
            else if (!isMobile()) { handleSelection('groom'); }
          }}
          onMouseEnter={() => !isMobile() && handleMouseEnter('groom')}
        >
          <Glitter count={18} stars={5} />
          <div className={styles.content}>
            <p className={styles.sideLabel}>Groom's Side</p>
            <div className={styles.character}>
              <img src={publicUrl('/groom-character.png')} alt="Groom" />
            </div>
            <h2 className={styles.name}>Sakthivel<br />Prabakaran</h2>
            <p className={styles.clickHint}>
              {isMobile() ? 'Tap to hear & enter' : 'Click to enter'}
            </p>
          </div>
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <span className={styles.dividerSymbol}>✦</span>
          <div className={styles.dividerLine}></div>
        </div>

        <div
          className={`${styles.split} ${styles.right} glitter-bg`}
          onClick={(e) => {
            if (isMobile() && !animating) { e.preventDefault(); handleTouch('bride'); }
            else if (!isMobile()) { handleSelection('bride'); }
          }}
          onMouseEnter={() => !isMobile() && handleMouseEnter('bride')}
        >
          <Glitter count={18} stars={5} />
          <div className={styles.content}>
            <p className={styles.sideLabel}>Bride's Side</p>
            <div className={styles.character}>
              <img src={publicUrl('/bride-character.png')} alt="Bride" />
            </div>
            <h2 className={styles.name}>Vivitha</h2>
            <p className={styles.clickHint}>
              {isMobile() ? 'Tap to hear & enter' : 'Click to enter'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryPage;
