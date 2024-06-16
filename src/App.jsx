import "./assets/globals.css";
import { useState } from "react";
import Previews from "./Components/Preview/previews";
import Search from "./Components/Search/Search";
import useStore from "./store/userStore";
import Repos from "./Components/Preview/Repos";

function App() {
  const userName = useStore((state) => state.userGitName);
  const userData = useStore((state) => state.userGitData);
  console.log("This is the user name:", userName);
  console.log(userData);

  // const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Search setIsLoading={isLoading} setData={userName} />
      <Previews
        location={userData.location || "Location not provided."}
        public_repos={userData.public_repos}
        followers={userData.followers}
        following={userData.following}
        avatar_url={userData.avatar_url}
        name={userData.name}
        login={userData.login}
        followersData={userData.followersData}
        followingData={userData.followingData}
        cardTitle={userData.cardTitle}
        cardDesc={userData.cardDesc}
        forks={userData.forks}
        stars={userData.stars}
        repoLink={userData.repoLink}
        reposData={userData.reposData}
      />
    </>
  );
}

export default App;
