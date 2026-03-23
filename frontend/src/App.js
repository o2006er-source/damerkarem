import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbareqHeader from './components/AlbareqHeader';
import AlbareqFooter from './components/AlbareqFooter';
import AlbareqHome from './pages/AlbareqHome';
import AlbareqBlog from './pages/AlbareqBlog';
import './App.css';

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <AlbareqHeader />
        <Routes>
          <Route path="/" element={<AlbareqHome />} />
          <Route path="/blog" element={<AlbareqBlog />} />
          <Route path="/blog/:slug" element={<AlbareqBlog />} />
        </Routes>
        <AlbareqFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;