import React from 'react';
import Navbar from '../components/navbar';
import CategoryMenu from '../components/categoryMenu';
import HomeHero from '../components/homeHero';
import Benefits from '../components/benefits';
import FAQ from '../components/FAQ';
import Footer from '../components/footer';


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="px-8">
        <Navbar />
      </div>
      <CategoryMenu />
      <HomeHero />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;