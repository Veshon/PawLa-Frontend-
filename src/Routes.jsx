import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import LostFoundSearch from './pages/LostFoundSearch';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lostandfound" element={<LostFoundSearch />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;