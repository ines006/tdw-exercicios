
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './ex1/App'; 
import App2 from './ex2/App2'; 


function AppRoutes() {

  return (
    <Routes>
      <Route path="/ex1" element={<App />} />
      <Route path="/ex2" element={<App2 />} />
    </Routes>
  );
}

export default AppRoutes;
