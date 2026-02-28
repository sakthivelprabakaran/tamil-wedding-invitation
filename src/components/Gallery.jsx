import React from 'react';
import { publicUrl } from '../utils/publicUrl';
import styles from './Gallery.module.css';

const Gallery = () => {
  const photos = [
    { id: 1, src: publicUrl('/gallery/IMG_6899.JPG') },
    { id: 2, src: publicUrl('/gallery/IMG_6902.JPG') },
    { id: 3, src: publicUrl('/gallery/IMG_6902_2.JPG') },
    { id: 4, src: publicUrl('/gallery/IMG_6915.JPG') },
    { id: 5, src: publicUrl('/gallery/IMG_6935.JPG') },
    { id: 6, src: publicUrl('/gallery/UGA_1348.JPEG') },
    { id: 7, src: publicUrl('/gallery/UGA_1354.JPEG') },
    { id: 8, src: publicUrl('/gallery/UGA_1363.JPEG') },
    { id: 9, src: publicUrl('/gallery/d6851663-2c7f-4a0f-917d-d396bcf73a11.JPG') },
  ];

  return (
    <section className={styles.gallery} id="gallery">
      <div className="container">
        <h2 className="section-title">Captured Moments</h2>
        <div className={styles.galleryGrid}>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={styles.galleryItem}
            >
              <div className={styles.photoContainer}>
                <img src={photo.src} alt={`Gallery image ${index + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
