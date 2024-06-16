import { create } from "zustand";

const useStore = create((set) => ({
  userGitName: "kimtechnos",
  userGitData: {},
  reposData: [],
  followersData: [],
  followingData: [],
  setUserGitName: (userGitName) => set({ userGitName }),
  setUserGitData: (userGitData) => set({ userGitData }),
  fetchData: async (userGitName) => {
    if (!userGitName) return;
    try {
      const response = await fetch(
        `https://api.github.com/users/${userGitName}`,
      );
      if (!response.ok) {
        throw new Error(`User ${user} not found`);
      }
      const userData = await response.json();

      const followersResponse = await fetch(userData.followers_url);
      const followersData = await followersResponse.json();

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      const followingResponse = await fetch(
        `https://api.github.com/users/${userGitName}/following`,
      );
      const followingData = await followingResponse.json();

      set({
        userGitData: userData,
        userGitName,
        reposData,
        followersData,
        followingData,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useStore;
