import { GoRepoForked } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import "./preview.css";

const Repos = ({ reposName, repoDesc, fork, star, link }) => {
  return (
    <div className="repo-card">
      <a href={link} target="_blank">
        <div className="header">
          <h2>{reposName}</h2>
          <p>{repoDesc}</p>
        </div>
        <div className="footer">
          <div className="icons">
            <p>
              <GoRepoForked /> {fork} forks
            </p>
            <p>
              <FaStar /> {star} stars
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Repos;
