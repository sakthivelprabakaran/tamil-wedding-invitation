import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioManager } from '../utils/audioManager';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const photos = [
    { id: 1, caption: 'Photo 1', audioSrc: '/audio/photo1.mp3' },
    { id: 2, caption: 'Photo 2', audioSrc: '/audio/photo2.mp3' },
    { id: 3, caption: 'Photo 3', audioSrc: '/audio/photo3.mp3' },
    { id: 4, caption: 'Photo 4', audioSrc: '/audio/photo4.mp3' },
    { id: 5, caption: 'Photo 5', audioSrc: '/audio/photo5.mp3' },
    { id: 6, caption: 'Photo 6', audioSrc: '/audio/photo6.mp3' },
  ];

  const handlePhotoHover = (index, audioSrc) => {
    setPlayingIndex(index);
    audioManager.play(audioSrc, false);
  };

  const handlePhotoLeave = () => {
    setPlayingIndex(null);
    audioManager.stop();
  };

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <h2 className="section-title">Captured Moments</h2>
        <div className={styles.galleryGrid}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.galleryItem}
              onMouseEnter={() => handlePhotoHover(index, photo.audioSrc)}
              onMouseLeave={handlePhotoLeave}
            >
              <div className={styles.placeholderPhoto}>
                {photo.caption}
                <div className={`${styles.audioIndicator} ${playingIndex === index ? styles.playing : ''}`}>
                  <Volume2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
