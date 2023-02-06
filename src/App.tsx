import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/e" element={<Header />} />
    </Routes>
  );
}

export default App;
