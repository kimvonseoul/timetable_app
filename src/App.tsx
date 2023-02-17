import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Header from './Header';
import Main from './Main';
import ModalPage from './ModalPage';
import ProfPage from './ProfPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/e" element={<Header />} />
      <Route path="/edit" element={<ModalPage />} />
      <Route path="/edit/:id" element={<ModalPage />} />
      <Route path='/profile' element={<ProfPage />} />
    </Routes>
  );
}

export default App;
