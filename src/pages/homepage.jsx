import React from 'react';
import Navbar from '../components/navbar';
import CategoryMenu from '../components/categoryMenu';
import HomeHero from '../components/homeHero';
import Benefits from '../components/benefits';


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="px-8">
        <Navbar />
      </div>
      <CategoryMenu />
      <HomeHero />
      <Benefits />
     
    </div>
  );
};

export default Home;