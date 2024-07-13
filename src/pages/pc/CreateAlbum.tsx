import React from 'react';
import styles from './CreateAlbum.module.css';
import Layout from '../../components/layout/Layout';
import Window from '../../assets/images/window.png';

const CreateAlbumPC: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.windowContainer}>
          <img src={Window} alt="bookImg" />
        </div>
      </div>
    </Layout>
  );
};

export default CreateAlbumPC;
