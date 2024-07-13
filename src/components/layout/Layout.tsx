import React from 'react';
import styles from './Layout.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Layout = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>{props.children}</div>
          <div className={styles.consoleName}>KtbsStation 5</div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.arrowBtnGroup}>
            <button className={styles.depth} type="button">
              <FaArrowLeft />
            </button>
            <button
              className={styles.depth}
              type="button"
              onClick={handleHomeClick}
            >
              <AiFillHome />
            </button>
            <button className={styles.depth} type="button">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
