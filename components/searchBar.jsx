import React from 'react';
//the serach bar component 
const searchBar = ({ setSearch }) => {
  return (
    //the input data for the search bar
    <div className="search-container">
    <input
      type="text"
      className="search-input"
      placeholder="Search events..."
      onChange={(e) => setSearch(e.target.value)}
    />
    </div>
  );
};

export default searchBar;