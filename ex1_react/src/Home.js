
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'; 
import AppRoutes from './AppRoutes'; 
import './App.css';

function Home() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default Home;
