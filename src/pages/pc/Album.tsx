import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Album.module.css';
import Layout from '../../components/layout/Layout';
import AlbumItem from '../../components/AlbumItem';
import BackArrow from '../../assets/images/arrow_back.png';
import useFetch from '../../hooks/useFetch';
import { SERVER_URL } from '../../utils/static';

const AlbumPC: React.FC = () => {
  const itemsPerPage = 2;
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const albumLocation = query.get('location');
  const currentPage = parseInt(query.get('page') || '1', 10);

  const { data, error, loading } = useFetch(
    albumLocation
      ? `${SERVER_URL}/posts?location=${encodeURIComponent(albumLocation)}&page=${currentPage}`
      : '',
  );

  const totalPages = data ? Math.ceil(data.data.length / itemsPerPage) : 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      navigate(`/album?location=${albumLocation}&page=${currentPage + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      navigate(`/album?location=${albumLocation}&page=${currentPage - 1}`);
    }
  };

  const currentItems = data
    ? data.data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : [];

  return (
    <Layout>
      <div className={styles.container}>
        <button className={styles.arrowBtn} onClick={() => navigate('/home')}>
          <img src={BackArrow} alt="arrow" className={styles.backArrow} />
        </button>
        <div className={styles.album}>
          <div className={styles.contentContainer}>
            {loading && <p></p>}
            {error && <p>{error.message}</p>}
            {currentItems.map((item: any) => (
              <AlbumItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AlbumPC;
