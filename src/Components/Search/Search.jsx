import React, { useState, useEffect } from "react";
import "./search.css";

const Search = ({ setData, setIsLoading }) => {
  const [user, setUser] = useState("kimtechnos");
  const [error, setError] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error(`User ${user} not found`);
      }

      const userData = await response.json();

      const followersResponse = await fetch(userData.followers_url);
      const followersData = await followersResponse.json();
      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      const followingResponse = await fetch(
        `https://api.github.com/users/${user}/following`,
      );
      const followingData = await followingResponse.json();

      setData({ ...userData, followersData, followingData, reposData });
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data from Github API");
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <div className="search-section">
        <div className="title">
          <h1>GITHUB FINDER</h1>
        </div>
        <p>
          <span>
            <a href={user}> By Francis Kimani</a>
          </span>
        </p>
        <div className="search-bar">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter a username"
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Search;
