import React from 'react';
import styles from './Album.module.css';
import Layout from '../../components/layout/Layout';

const AlbumPC: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.album}></div>
      </div>
    </Layout>
  );
};

export default AlbumPC;