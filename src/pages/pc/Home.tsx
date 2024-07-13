import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Layout from '../../components/layout/Layout';
import Logo from '../../assets/images/logo.png';

const HomePC: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/create-album');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <button className={styles.button} onClick={handleButtonClick}></button>
      </div>
    </Layout>
  );
};

export default HomePC;
