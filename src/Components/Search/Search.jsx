import React, { useState, useEffect } from "react";
import "./search.css";

const Search = ({ setData, setIsLoading }) => {
  const [user, setUser] = useState("kimtechnos");
  const [error, setError] = useState([]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const userData = await response.json();
      setData(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data from Github API");
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };
  // if (setIsLoading) {
  //   return <div>loading........</div>;
  // }
  // if (error) {
  //   return <div>{error}</div>;
  // }
  // if (!user) {
  //   return <div>User not found</div>;
  // }

  useEffect(() => {
    const fetchData = async () => {
      await handleClick();
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="search-section">
        <div className="title">
          <h1>GITHUB FINDER</h1>
        </div>
        <p>
          <span>
            <a href=""> By Francis Kimani</a>
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
    </div>
  );
};

export default Search;
