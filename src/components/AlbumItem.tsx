import React from 'react';
import styles from './AlbumItem.module.css';
import { SERVER_URL } from '../utils/static';

interface AlbumData {
  id: string;
  title: string;
  post_image_path: string;
  update_at: string;
  nickname: string;
  content: string;
}

interface AlbumItemProps {
  item: AlbumData;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ item }) => {
  return (
    <div key={item.id} className={styles.albumItem}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={SERVER_URL + item.post_image_path}
        ></img>
        <div className={styles.title}>{item.title}</div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          날짜: <span>{item.update_at}</span>
        </div>
        <div className={styles.infoItem}>
          작성자: <span>{item.nickname}</span>
        </div>
        <div className={styles.content}>{item.content}</div>
      </div>
    </div>
  );
};

export default AlbumItem;
