import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserView } from 'react-device-detect';
import GlobalStyle from './GlobalStyle';
import styles from './App.module.css';
import Home from './pages/pc/Home';
import Album from './pages/pc/Album';
import CreateAlbum from './pages/pc/CreateAlbum';
import Loading from './pages/pc/Loading';
import OffPage from './pages/pc/OffPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserView className={styles.browserContainer}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/album" element={<Album />} />
            <Route path="/create-album" element={<CreateAlbum />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/" element={<OffPage />} />
          </Routes>
        </Router>
      </BrowserView>
    </>
  );
}

export default App;
