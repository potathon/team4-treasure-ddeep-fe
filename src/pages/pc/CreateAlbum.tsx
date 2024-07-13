import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateAlbum.module.css';
import Layout from '../../components/layout/Layout';
import CloseBtn from '../../assets/images/button.png';
import { SERVER_URL } from '../../utils/static';

const CreateAlbumPC: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('제주북동쪽');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const navigate = useNavigate();

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
  const handleLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
  };
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setPreview(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    navigate('/home');
  };

  const submitPost = () => {
    if (
      image === null ||
      nickname === '' ||
      password === '' ||
      title === '' ||
      content === '' ||
      location === ''
    ) {
      alert('모든 내용을 입력해주세요');
      return;
    }

    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('password', password);
    formData.append('title', title);
    formData.append('location', location);
    formData.append('content', content);
    formData.append('post_image_path', image);

    fetch(`${SERVER_URL}/posts`, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        if (res.ok) {
          alert('등록 완료');
          navigate('/home');
        } else {
          return res.json().then(data => {
            throw new Error(data.message || 'Something went wrong');
          });
        }
      })
      .catch(err => {
        console.error('Error:', err);
        alert('업로드 중 오류 발생');
      });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.windowContainer}>
          <div className={styles.topBar}>
            <button className={styles.closeBtn} onClick={handleButtonClick}>
              <img src={CloseBtn} alt="Close Btn" />
            </button>
          </div>
          <div className={styles.innerContainer}>
            <div className={styles.imageContainer}>
              {preview && <img src={preview} alt="upload preview" />}
              {!image && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className={styles.fileBtn}
                />
              )}
            </div>
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
            <select
              className={styles.dropdown}
              value={location}
              onChange={handleLocation}
            >
              <option value="제주북동쪽">제주 북동쪽</option>
              <option value="제주북서쪽">제주 북서쪽</option>
              <option value="서귀포남동쪽">서귀포 남동쪽</option>
              <option value="서귀포남서쪽">서귀포 남서쪽</option>
            </select>
            <textarea
              value={content}
              placeholder="내용을 입력하세요"
              className={styles.textArea}
              onChange={handleContent}
            ></textarea>
            <input
              type="button"
              value="제출"
              onClick={submitPost}
              className={styles.submitBtn}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAlbumPC;
