import React from 'react';
import styles from './CreateAlbum.module.css';
import Layout from '../../components/layout/Layout';

const CreateAlbumPC: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.windowContainer}>
          <div className={styles.topBar}></div>
          <div className={styles.innerContainer}>
            <div className={styles.imageContainer}></div>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="작성자"
                className={styles.input}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className={styles.input}
              />
            </div>
            <input
              type="text"
              placeholder="제목"
              className={styles.titleInput}
            />
            <select className={styles.dropdown}>
              <option value="jeju-northeast">제주 북동쪽</option>
              <option value="jeju-northwest">제주 북서쪽</option>
              <option value="seogwipo-southeast">서귀포 남동쪽</option>
              <option value="seogwipo-southwest">서귀포 남서쪽</option>
            </select>
            <textarea
              placeholder="내용을 입력하세요"
              className={styles.textArea}
            ></textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAlbumPC;
