import React, { useEffect, useState } from 'react';
import styles from './AlbumItem.module.css';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import albumData from '../datas/albumdata.json'
interface PostData {
  title: string;
  post_image_path: string;
  update_at: string;
  nickname: string;
  content: string;
}

const AlbumItem: React.FC = () => {
  const { location } = useParams();
  // const { data, error, loading } = useFetch(
  //   "http://localhost:8081/posts?location="+location
  // );

  const [data, setData] = useState<PostData[]>([]);
  
  useEffect(() => {
    setData(albumData.album.data);
  }, []);

  return (
    <div className={styles.container} >
    {data.map((data, index) => (
      <div key={index} className={styles.albumItem}>
        <div className={styles.title}>{data?.title}</div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>{data?.post_image_path}</div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            날짜: <span>{data?.update_at}</span>
          </div>
          <div className={styles.infoItem}>
            작성자: <span>{data?.nickname}</span>
          </div>
          <div className={styles.content}>{data?.content}</div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default AlbumItem;
