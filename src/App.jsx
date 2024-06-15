import "./assets/globals.css";
import { useState } from "react";
import Previews from "./Components/Preview/previews";
import Search from "./Components/Search/Search";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Search setIsLoading={setIsLoading} setData={setData} />
      <Previews
        location={data.location}
        public_repos={data.public_repos}
        followers={data.followers}
        following={data.following}
        avatar_url={data.avatar_url}
        name={data.name}
        login={data.login}
        followersData={data.followersData}
        followingData={data.followingData}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
