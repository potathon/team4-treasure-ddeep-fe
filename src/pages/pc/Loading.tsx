import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Loading.module.css';
import Layout from '../../components/layout/Layout';
import loadingVideo from '../../assets/videos/loading_video.mp4';

const LoadingPC: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className={styles.videoContainer}>
        <video muted autoPlay loop className={styles.video}>
          <source src={loadingVideo} type="video/mp4" />
        </video>
      </div>
    </Layout>
  );
};

export default LoadingPC;
