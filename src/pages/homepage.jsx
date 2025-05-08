import React from 'react';
import Navbar from '../components/navbar';
import CategoryMenu from '../components/categoryMenu';
import FilterSortBar from '../components/filterSortBar';
import HomeHero from '../components/homeHero';
import Sidebar from '../components/sideBar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FilterSortBar />
      <div className="flex px-6 py-4 space-x-6">
        <div className="flex-1">
          <HomeHero />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
