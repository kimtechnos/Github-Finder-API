import React from "react";
import "./preview.css";
import Repos from "./Repos";
import useStore from "../../store/userStore";
import {
  FaMapMarkerAlt,
  FaBook,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

const Previews = ({
  location,
  public_repos,
  followers,
  followersData,
  followingData,
  avatar_url,
  name,
  login,
  following,
  reposData,
  isLoading,
}) => {
  const repos = useStore((state) => state.reposData);

  const followers_Data = useStore((state) => state.followersData);
  const following_Data = useStore((state) => state.followingData);
  const fetchuser = useStore((state) => state.fetchData);
  const userName = useStore((state) => state.userName);

  return (
    <div className="profile-container">
      <div className="profile-card">
        {!isLoading ? (
          <>
            <div className="profile-image">
              <img src={avatar_url} alt={`${name}'s avatar`} />
            </div>
            <h2>{name}</h2>
            <p className="username">{login}</p>
            <a
              href={`https://github.com/${login}`}
              className="view-github"
              target="_blank"
            >
              <FaExternalLinkAlt />
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
            <div className="following">
              <FaUsers aria-label="Following" />
              {following} following
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="followers-following-section">
        <div className="repo">
          <h3>{`Repositories ${
            repos?.length > 0 ? repos.length : "No repositories"
          }`}</h3>
        </div>
        <div className="repository-section">
          {repos.map((repos, i) => (
            <Repos
              key={i}
              reposName={repos.name}
              repoDesc={repos.description}
              fork={repos.forks}
              star={repos.stargazers_count}
              link={repos.html_url}
            />
          ))}
        </div>

        <div className="followers">
          {" "}
          <h3>Followers {followers}</h3>
        </div>
        <div className="followers-list">
          {followers_Data.length > 0 ? (
            followers_Data.map((follower) => (
              <div key={follower.login} className="follower-card">
                <img
                  src={follower.avatar_url}
                  alt={`${follower.login}'s avatar`}
                />
                <p>{follower.login}</p>
                <button
                  className="profile-button"
                  onClick={() =>
                    window.open(
                      `https://github.com/${follower.login}`,
                      "_blank",
                    )
                  }
                >
                  <IoMdLink />
                  View {follower.login}
                </button>
              </div>
            ))
          ) : (
            <p>No followers</p>
          )}
        </div>
        <div className="following ">
          {" "}
          <h3>Following {following}</h3>
        </div>
        <div className="following-list">
          {following_Data && following_Data.length > 0 ? (
            following_Data.map((following) => (
              <div key={following.login} className="following-card">
                <img
                  src={following.avatar_url}
                  alt={`${following.login}'s avatar`}
                />
                <p>{following.login}</p>
                <button
                  className="profile-button"
                  onClick={() =>
                    window.open(
                      `https://github.com/${following.login}`,
                      "_blank",
                    )
                  }
                >
                  <IoMdLink /> View {following.login}
                </button>
              </div>
            ))
          ) : (
            <p>No following</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Previews;
