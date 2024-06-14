import "./preview.css";
import { FaMapMarkerAlt, FaBook, FaUsers } from "react-icons/fa";

const Previews = ({
  location,
  public_repos,
  followers,
  avatar_url,
  name,
  login,
  following,
  isLoading,
 
}) => {
  return (
    <div className="profile-card">
      {!isLoading ? (
        <>
          <div className="profile-image">
            <img
              //  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              src={avatar_url}
              alt="GitHub"
            />
          </div>
          <h2>{name}</h2>
          <p className="username">{login}</p>
          {/* <p>{html_url}</p> */}
          <a
            href={`https://github.com/${login}`}
            className="view-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            View On GitHub
          </a>

          <div className="location">
            <FaMapMarkerAlt aria-label="Location" />
            {location}
          </div>
          <div className="repositories">
            <FaBook aria-label="Repositories" />
            {public_repos} repositories
          </div>
          <div className="followers">
            <FaUsers aria-label="Followers" />
            {followers} followers
          </div>
          <div className="followers">
            <FaUsers aria-label="Followers" />
            {following} following
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Previews;
