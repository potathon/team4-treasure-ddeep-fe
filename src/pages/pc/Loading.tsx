import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Loading.module.css';
import Layout from '../../components/layout/Layout';
import loadingVideo from '../../assets/videos/loading_video.mp4';
import loadingMusic from '../../assets/sounds/loading_music.m4a';

const LoadingPC: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(loadingMusic);
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log('Error playing audio:', error);
      }
    };
    playAudio();

    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);

    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
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
