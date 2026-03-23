import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;