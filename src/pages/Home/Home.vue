<script>
  import { getAllRecipes } from "@/data/recipes";
  import Card from "./components/Card.vue";
  // import Search from "./components/Search.vue";

  export default {
    components: { Card },
    data() {
      return {
        recipes: [],
      };
    },
    async mounted() {
      this.recipes = await getAllRecipes();
    },
  };
</script>

<template>
  <div class="card-container">
    <Card
      v-for="recipe in recipes"
      :key="recipe.id"
      :source="recipe"
    />
  </div>
</template>

<style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 40px;
    margin-left: 40px;
    margin-bottom: 40px;
  }
</style>
