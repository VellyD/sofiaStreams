import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
      favoritesIDs: [],
    };
  },
  actions: {
    setProfile(userData) {
      this.profile = userData;
      sessionStorage.setItem("user", JSON.stringify(userData));
      this.isAuthenticated = true;
    },
    addFavorite(id) {
      this.favoritesIDs.push(id);
    },
    removeFavorite(id) {
      this.favoritesIDs = this.favoritesIDs.filter((fav) => fav !== id);
    },
    getUserToken() {
      if (!sessionStorage.getItem("user")) return;
      this.profile = JSON.parse(sessionStorage.getItem("user"));
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.profile = null;
      sessionStorage.removeItem("user");
    },
  },
});
