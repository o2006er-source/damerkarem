import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbareqHeader from './components/AlbareqHeader';
import AlbareqFooter from './components/AlbareqFooter';
import AlbareqHomeComplete from './pages/AlbareqHomeComplete';
import AlbareqAbout from './pages/AlbareqAbout';
import AlbareqBlog from './pages/AlbareqBlog';
import './App.css';

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <AlbareqHeader />
        <Routes>
          <Route path="/" element={<AlbareqHomeComplete />} />
          <Route path="/about" element={<AlbareqAbout />} />
          <Route path="/blog" element={<AlbareqBlog />} />
          <Route path="/blog/:slug" element={<AlbareqBlog />} />
        </Routes>
        <AlbareqFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;