import React from 'react';
import styles from './Album.module.css';
import Layout from '../../components/layout/Layout';
import AlbumItem from '../../components/AlbumItem';

const AlbumPC: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.album}>
          <div className={styles.contentContainer}>
            <AlbumItem />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AlbumPC;
