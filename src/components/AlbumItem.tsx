import React from 'react';
import styles from './AlbumItem.module.css';

const AlbumItem: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>title</div>
      <div className={styles.imageContainer}>
        <div className={styles.image}>image</div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          날짜: <span>2024-07-13</span>
        </div>
        <div className={styles.infoItem}>
          작성자: <span>Author Name</span>
        </div>
        <div className={styles.content}>내용~~</div>
      </div>
    </div>
  );
};

export default AlbumItem;
