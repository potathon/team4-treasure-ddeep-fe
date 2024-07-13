import React, { useState, useEffect } from 'react';
import styles from './Layout.module.css';
import { FaArrowLeft, FaArrowRight, FaPowerOff } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import On from '../../assets/images/on_btn.png';
import Off from '../../assets/images/off_btn.png';

const Layout = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [powerOn, setPowerOn] = useState(false);
  const [BtnOn, setBtnOn] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setBtnOn(false);
    } else {
      setBtnOn(true);
    }
  }, [location.pathname]);

  const handlePowerClick = () => {
    setBtnOn(!BtnOn);
    console.log(BtnOn);
    if (location.pathname !== '/') {
      navigate('/');
      setPowerOn(false);
    } else {
      if (powerOn) {
        setPowerOn(false);
      } else {
        navigate('/loading');
        setPowerOn(true);
      }
    }
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (location.pathname === '/album') {
      const searchParams = new URLSearchParams(location.search);
      const currentPage = parseInt(searchParams.get('page') || '1', 10);

      if (direction === 'left' && currentPage > 1) {
        searchParams.set('page', (currentPage - 1).toString());
      } else if (direction === 'right') {
        searchParams.set('page', (currentPage + 1).toString());
      }

      navigate({
        pathname: '/album',
        search: searchParams.toString(),
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>{props.children}</div>
        <div className={styles.consoleName}>KtbsStation 5</div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.emptyBox}></div>
        <div className={styles.arrowBtnGroup}>
          <button
            className={styles.depth}
            type="button"
            onClick={() => handleArrowClick('left')}
          >
            <FaArrowLeft />
          </button>
          <button
            className={styles.depth}
            type="button"
            onClick={handlePowerClick}
          >
            <FaPowerOff />
          </button>
          <button
            className={styles.depth}
            type="button"
            onClick={() => handleArrowClick('right')}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className={styles.emptyBox}>
          <div className={styles.powerBtnGroup}>
            <img
              src={BtnOn ? On : Off}
              alt={BtnOn ? 'On_Btn' : 'Off_Btn'}
              className={styles.powerBtn}
            />
            <span>{BtnOn ? 'Onㅤ' : 'Off'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
