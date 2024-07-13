import React from 'react';
import styles from './Layout.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = (props: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate('/');
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
            onClick={handleHomeClick}
          >
            <AiFillHome />
          </button>
          <button
            className={styles.depth}
            type="button"
            onClick={() => handleArrowClick('right')}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
