import React from 'react';

const FilterSortBar = () => {
  return (
    <div className="flex justify-end space-x-4 px-6 py-2">
      <button className="px-4 py-1 border rounded hover:bg-gray-100">Filter</button>
      <button className="px-4 py-1 border rounded hover:bg-gray-100">Sort</button>
    </div>
  );
};

export default FilterSortBar;
