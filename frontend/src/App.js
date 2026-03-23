import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbareqHeader from './components/AlbareqHeader';
import AlbareqBlog from './pages/AlbareqBlog';
import './App.css';

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <AlbareqHeader />
        <Routes>
          <Route path="/" element={<AlbareqBlog />} />
          <Route path="/blog" element={<AlbareqBlog />} />
          <Route path="/blog/:slug" element={<AlbareqBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;