import React, { useState, useEffect, useRef } from 'react';
import { Heart, Mic, ArrowRight } from 'lucide-react';
import AudioModal from './AudioModal';
import { publicUrl } from '../utils/publicUrl';
import styles from './EntryPage.module.css';


const EntryPage = ({ onEnter }) => {
  const [animating, setAnimating] = useState(false);
  const [currentSide, setCurrentSide] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [showArrows, setShowArrows] = useState(false);
  const conversationTimeoutRef = useRef(null);
  const targetSideRef = useRef(null);
  const currentSideRef = useRef(null); // Track current side synchronously

  // Generate random heart balloons
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create falling hearts every 2 seconds
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100, // Random position 0-100%
        delay: Math.random() * 2, // Random delay 0-2s
        duration: 3 + Math.random() * 2, // Duration 3-5s
      };
      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    }, 2000);

    return () => clearInterval(heartInterval);
  }, []);

  const handleEnableAudio = () => {
    const testAudio = new Audio();
    testAudio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0QWrLq8KVTFQlDl93wv3EiBTKAzPLXgjIGHm+/7uiZRwwQWrzq8qVTFApBl9zwv3Ah';
    testAudio.volume = 0.01;
    testAudio.play().catch(() => { });
    setTimeout(() => testAudio.pause(), 100);

    setAudioEnabled(true);
    setShowModal(false);
  };

  // Detect if user is on mobile
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
    }, 1500);
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
          console.log(`Using TTS fallback for: ${audioPath}`);
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

    // Trigger arrow animation on hover
    setShowArrows(true);
    setTimeout(() => setShowArrows(false), 2000);

    const previousSide = currentSideRef.current;

    // Update ref immediately
    currentSideRef.current = side;
    setCurrentSide(side);

    if (previousSide === null) {
      // First hover ever - play welcome
      stopAllAudio();
      if (side === 'groom') {
        playAudioWithFallback(
          publicUrl('/audio/groom_hover_welcome.m4a'),
          "Hey! Are you on the groom's side? Click here to enter!",
          0.9
        );
      } else {
        playAudioWithFallback(
          publicUrl('/audio/bride_hover_welcome.m4a'),
          "Hello! Are you on the bride's side? Come on in, click here!",
          1.3
        );
      }
    } else if (previousSide !== side) {
      // Switching sides - play jealous from previous side + response from new side
      stopAllAudio();

      if (previousSide === 'groom') {
        // Coming from groom to bride
        playAudioWithFallback(
          publicUrl('/audio/groom_hover_jealous.m4a'),
          "Hey hey hey! Stay here on my side! Don't go to the bride's side!",
          0.85,
          1.2
        ).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'bride') {
              playAudioWithFallback(
                publicUrl('/audio/bride_response_to_groom.m4a'),
                "Hey groom, be calm! They're MY side now. Welcome to the bride's side!",
                1.3,
                1.1
              );
            }
          }, 500);
        });
      } else {
        // Coming from bride to groom
        playAudioWithFallback(
          publicUrl('/audio/bride_hover_jealous.m4a'),
          "Wait wait wait! Don't leave me! Stay on the bride's side!",
          1.35,
          1.2
        ).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'groom') {
              playAudioWithFallback(
                publicUrl('/audio/groom_response_to_bride.m4a'),
                "Ha! They came back to MY side. Welcome back!",
                0.9,
                1.1
              );
            }
          }, 500);
        });
      }
    }
  };

  const handleMouseLeave = (side, event) => {
    // No longer needed - all logic moved to mouseEnter
  };

  // Mobile touch handler - plays audio immediately on tap
  const handleTouch = (side) => {
    if (!audioEnabled || !isMobile()) return;

    const previousSide = currentSideRef.current;

    // If tapping the same side again - navigate
    if (previousSide === side) {
      handleSelection(side);
      return;
    }

    // Update immediately
    currentSideRef.current = side;
    setCurrentSide(side);

    // Trigger audio immediately on tap
    if (previousSide === null) {
      // First tap - welcome
      stopAllAudio();
      if (side === 'groom') {
        playAudioWithFallback(
          publicUrl('/audio/groom_hover_welcome.m4a'),
          "Hey! Are you on the groom's side? Click here to enter!",
          0.9
        );
      } else {
        playAudioWithFallback(
          publicUrl('/audio/bride_hover_welcome.m4a'),
          "Hello! Are you on the bride's side? Come on in, click here!",
          1.3
        );
      }
    } else if (previousSide !== side) {
      // Switching - play conversation
      stopAllAudio();

      if (previousSide === 'groom') {
        playAudioWithFallback(
          publicUrl('/audio/groom_hover_jealous.m4a'),
          "Hey hey hey! Stay here on my side! Don't go to the bride's side!",
          0.85,
          1.2
        ).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'bride') {
              playAudioWithFallback(
                publicUrl('/audio/bride_response_to_groom.m4a'),
                "Hey groom, be calm! They're MY side now. Welcome to the bride's side!",
                1.3,
                1.1
              );
            }
          }, 500);
        });
      } else {
        playAudioWithFallback(
          publicUrl('/audio/bride_hover_jealous.m4a'),
          "Wait wait wait! Don't leave me! Stay on the bride's side!",
          1.35,
          1.2
        ).then(() => {
          conversationTimeoutRef.current = setTimeout(() => {
            if (currentSideRef.current === 'groom') {
              playAudioWithFallback(
                publicUrl('/audio/groom_response_to_bride.m4a'),
                "Ha! They came back to MY side. Welcome back!",
                0.9,
                1.1
              );
            }
          }, 500);
        });
      }
    }
  };

  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, []);

  return (
    <>
      {showModal && <AudioModal onEnable={handleEnableAudio} />}

      <div className={`${styles.entryPage} ${animating ? styles.exiting : ''}`}>
        {/* Falling Heart Balloons */}
        {hearts.map(heart => (
          <div
            key={heart.id}
            className={styles.fallingHeart}
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            <Heart fill="#D4AF37" color="#D4AF37" size={24} />
          </div>
        ))}

        {/* Flying Arrows */}
        {showArrows && (
          <>
            <div className={`${styles.flyingArrow} ${styles.arrowLeft}`}>
              <ArrowRight size={32} color="#D4AF37" />
            </div>
            <div className={`${styles.flyingArrow} ${styles.arrowRight}`}>
              <ArrowRight size={32} color="#D4AF37" style={{ transform: 'rotate(180deg)' }} />
            </div>
          </>
        )}

        <div
          className={`${styles.split} ${styles.left}`}
          onClick={(e) => {
            if (isMobile() && !animating) {
              e.preventDefault();
              handleTouch('groom');
            } else if (!isMobile()) {
              handleSelection('groom');
            }
          }}
          onMouseEnter={() => !isMobile() && handleMouseEnter('groom')}
          onMouseLeave={(e) => !isMobile() && handleMouseLeave('groom', e)}
        >
          <div className={styles.content}>
            <div className={styles.character}>
              <img src={publicUrl('/groom-character.png')} alt="Groom" />
            </div>
            <h2>Groom's Side</h2>
            <p>Sakthivel Prabakaran</p>
            <div className={styles.icon}><Mic size={48} /></div>
            <p className={styles.clickHint}>
              {isMobile() ? 'Tap to Hear & Enter' : 'Click to Enter'}
            </p>
          </div>
        </div>

        <div className={styles.divider}>
          <div className={styles.heartWrapper}>
            <Heart fill="#fff" color="#D4AF37" size={64} />
          </div>
        </div>

        <div
          className={`${styles.split} ${styles.right}`}
          onClick={(e) => {
            if (isMobile() && !animating) {
              e.preventDefault();
              handleTouch('bride');
            } else if (!isMobile()) {
              handleSelection('bride');
            }
          }}
          onMouseEnter={() => !isMobile() && handleMouseEnter('bride')}
          onMouseLeave={(e) => !isMobile() && handleMouseLeave('bride', e)}
        >
          <div className={styles.content}>
            <div className={styles.character}>
              <img src={publicUrl('/bride-character.png')} alt="Bride" />
            </div>
            <h2>Bride's Side</h2>
            <p>Vivitha</p>
            <div className={styles.icon}><Mic size={48} /></div>
            <p className={styles.clickHint}>
              {isMobile() ? 'Tap to Hear & Enter' : 'Click to Enter'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryPage;
