import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
    };
  },
  actions: {
    setProfile(userData) {
      this.profile = userData;
      this.isAuthenticated = true;
    },
  },
});
