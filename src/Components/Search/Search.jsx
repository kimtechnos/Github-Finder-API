import React, { useState, useEffect } from "react";
import "./search.css";
import useStore from "../../store/userStore";

const Search = () => {
  const userGitName = useStore((state) => state.setUserGitName);
  const fetchData = useStore((state) => state.fetchData);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!inputValue) {
      alert("Please enter name to search");
    }
    userGitName(inputValue);
    fetchData(inputValue);
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <div className="search-section">
        <div className="title">
          <h1>GITHUB FINDER</h1>
        </div>
        <p>
          <span>
            <a href={inputValue}> By Francis Kimani</a>
          </span>
        </p>
        <div className="search-bar">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a username"
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};

export default Search;
