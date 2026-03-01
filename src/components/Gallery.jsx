import React from 'react';
import { publicUrl } from '../utils/publicUrl';
import styles from './Gallery.module.css';

const Gallery = () => {
  const photos = [
    { id: 1, src: publicUrl('/gallery/Photo_01.jpg') },
    { id: 2, src: publicUrl('/gallery/Photo_02.jpg') },
    { id: 3, src: publicUrl('/gallery/Photo_03.JPG') },
    { id: 4, src: publicUrl('/gallery/Photo_04.jpg') },
    { id: 6, src: publicUrl('/gallery/Photo_06.JPG') },
    { id: 7, src: publicUrl('/gallery/Photo_07.JPG') },
    { id: 9, src: publicUrl('/gallery/Photo_09.JPG') },
    { id: 10, src: publicUrl('/gallery/Photo_10.JPEG') },
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
