
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './ex1/App'; 
import App2 from './ex2/App2'; 
import App3 from './ex3/App3'; 
import App4 from './ex4/App4'; 
import App5 from './ex5/App5'; 


function AppRoutes() {

  return (
    <Routes>
      <Route path="/ex1" element={<App />} />
      <Route path="/ex2" element={<App2 />} />
      <Route path="/ex3" element={<App3 />} />
      <Route path="/ex4" element={<App4 />} />
      <Route path="/ex5" element={<App5 />} />
    </Routes>
  );
}

export default AppRoutes;
