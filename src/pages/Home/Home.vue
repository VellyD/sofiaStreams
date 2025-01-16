<script>
  import { getAllRecipes } from "@/services/recipes";
  import { useRecipesStore } from "@/store/recipesStore";
  import Card from "./components/Card.vue";
  import Tags from "./components/Tags.vue";
  import { mapState } from "pinia";
  // import Search from "./components/Search.vue";

  export default {
    components: { Card, Tags },
    setup() {
      const recipesStore = useRecipesStore();
      return { recipesStore };
    },
    data() {
      return {
        recipes: [],
      };
    },
    async created() {
      let data = await getAllRecipes();
      this.recipes = data;
      this.recipesStore.setRecipes(data);
    },
    computed: {
      ...mapState(useRecipesStore, ["data"]),
    },
    methods: {
      filterRecipes(filter) {
        if (filter === "Clear") return (this.recipes = this.data);
        this.recipes = this.data;
        this.recipes = this.data.filter((r) => r.difficulty === filter);
      },
    },
  };
</script>

<template>
  <div class="welcomeHeading">
    <h1>Welcome to YUM YUM</h1>
    <h5>The best recipes you will ever find!</h5>
  </div>

  <Tags @on-filter="filterRecipes" />

  <div class="card-container">
    <Card
      v-for="recipe in recipes"
      :key="recipe.id"
      :source="recipe"
    />
  </div>
</template>

<style scoped>
  .welcomeHeading {
    font-family: "Dancing Script", cursive;
    text-align: center;
    margin: 25px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 40px;
    margin-left: 40px;
    margin-bottom: 40px;
  }
</style>
