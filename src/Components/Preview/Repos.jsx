import { GoRepoForked } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import "./preview.css";

const Repos = ({ repo }) => {
  return (
    <div className="repo-card">
      <a href={repo.html_url} target="_blank">
        <div className="header">
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
        </div>
        <div className="footer">
          <div className="icons">
            <p>
              <GoRepoForked /> {repo.forks_count} forks
            </p>
            <p>
              <FaStar /> {repo.stargazers_count} stars
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Repos;
