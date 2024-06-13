import React from 'react';
import "./search.css";

function Search() {
  return (
    <div>
      <div className="search-section">
        <div className="title">
          <h1>GITHUB FINDER</h1>
        </div>
        <p>
          By<span> Francis Kimani </span>
        </p>

        <div className="searchInput">
          <input type="text" placeholder="Enter a username" />
          <button type="button"> Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search
