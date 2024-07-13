import React, { useState } from 'react';
import styles from './CreateAlbum.module.css';
import Layout from '../../components/layout/Layout';

const CreateAlbumPC: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const submit_post = () => {
    if (nickname === '' || password === '' || title === '' || content === '') {
      alert('모든 내용을 입력해주세요');
      return;
    } else {
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: nickname,
          password: password,
          title: title,
          content: content,
        }),
      }).then(res => {
        if (res.ok) {
          // setInvalidMessage("");
          alert('등록 완료');
        }
      });
    }
  };
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
                value={nickname}
                placeholder="작성자"
                className={styles.input}
                onChange={handleNickname}
              />
              <input
                type="password"
                value={password}
                placeholder="비밀번호"
                className={styles.input}
                onChange={handlePassword}
              />
            </div>
            <input
              type="text"
              value={title}
              placeholder="제목"
              className={styles.titleInput}
              onChange={handleTitle}
            />
            <select className={styles.dropdown}>
              <option value="jeju-northeast">제주 북동쪽</option>
              <option value="jeju-northwest">제주 북서쪽</option>
              <option value="seogwipo-southeast">서귀포 남동쪽</option>
              <option value="seogwipo-southwest">서귀포 남서쪽</option>
            </select>
            <textarea
              value={content}
              placeholder="내용을 입력하세요"
              className={styles.textArea}
              onChange={handleContent}
            ></textarea>
            <input type="button" value="제출" onClick={submit_post} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAlbumPC;
