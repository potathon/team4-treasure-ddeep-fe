import React, { useState } from 'react';
import styles from './Album.module.css';
import Layout from '../../components/layout/Layout';
import AlbumItem from '../../components/AlbumItem';

const AlbumPC: React.FC = () => {
  const itemsPerPage = 2;
  const albumItems = Array.from({ length: 10 }, (_, index) => (
    <AlbumItem key={index} />
  )); // Replace this with actual data

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(albumItems.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = albumItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.album}>
          <div className={styles.contentContainer}>{currentItems}</div>
          <div className={styles.pagination}></div>
        </div>
      </div>
    </Layout>
  );
};

export default AlbumPC;
