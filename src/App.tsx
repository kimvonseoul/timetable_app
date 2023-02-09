import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import ModalPage from './ModalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/e" element={<Header />} />
      <Route path="/edit" element={<ModalPage />} />
      <Route path="/edit/:id" element={<ModalPage />} />
    </Routes>
  );
}

export default App;
