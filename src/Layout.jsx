// import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';

function Layout() {
  return (
    <div className='layout-container'>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;