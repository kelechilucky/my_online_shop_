import React from 'react';

const HomeHero = () => {
  return (
    <div className="flex bg-purple-100 rounded-lg p-6">
      <div className="w-1/2">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Shopping"
          className="rounded-lg"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center pl-6">
        <h2 className="text-2xl font-bold mb-2">
          New Season, New You - Discover Spring 2025 Styles
        </h2>
        <p className="text-gray-700">
          Discover trend-forward pieces, timeless staples, and effortless styles all in one place.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
