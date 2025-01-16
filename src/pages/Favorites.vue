<script>
  import { useRecipesStore } from "@/store/recipesStore";
  import { useUserStore } from "@/store/userStore";
  import { mapState } from "pinia";
  import Card from "./Home/components/Card.vue";

  export default {
    components: { Card },
    data() {
      return {
        userFavorites: [],
      };
    },
    computed: {
      ...mapState(useUserStore, ["favoritesIDs", "isAuthenticated", "profile"]),
      ...mapState(useRecipesStore, ["data"]),
    },
    mounted() {
      this.userFavorites = this.data.filter((fav) =>
        this.favoritesIDs.includes(fav.id),
      );
    },
  };
</script>

<template>
  <h1 class="title">Favorites</h1>
  <h6 class="subText">
    {{ isAuthenticated ? `of ${profile.username}` : "" }}
  </h6>
  <p
    v-if="!favoritesIDs.length"
    class="title"
  >
    Sorry! You haven't saved any recipes yet!
  </p>
  <div class="card-container">
    <Card
      v-for="fav in userFavorites"
      :key="fav.id"
      :source="fav"
    />
  </div>
</template>

<style scoped>
  .title {
    font-family: "Dancing Script", cursive;
    text-align: center;
    margin-top: 25px;
  }
  .subText {
    font-family: "Dancing Script", cursive;
    text-align: center;
    font-size: 24px;
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
