import React from 'react';
import Navbar from '../components/navbar';
import CategoryMenu from '../components/categoryMenu';
import HomeHero from '../components/homeHero';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <CategoryMenu />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
        <HomeHero />
      </div>
    </div>
  );
};

export default Home;
