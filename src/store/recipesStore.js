import { defineStore } from "pinia";

export const useRecipesStore = defineStore("recipes", {
  state: () => {
    return {
      data: [],
    };
  },
  actions: {
    setRecipes(recipes) {
      this.data = recipes;
    },
  },
});
