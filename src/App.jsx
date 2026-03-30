import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import HotelLaundryPage from './pages/HotelLaundryPage';
import UniformLaundryPage from './pages/UniformLaundryPage';
import DryCleaningPage from './pages/DryCleaningPage';

const App = () => (
  <BrowserRouter>
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/hotel-laundry" element={<HotelLaundryPage />} />
      <Route path="/services/uniform-laundry" element={<UniformLaundryPage />} />
      <Route path="/services/dry-cleaning" element={<DryCleaningPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

