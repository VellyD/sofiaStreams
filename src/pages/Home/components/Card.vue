<script>
  export default {
    props: {
      source: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      show: false,
    }),
  };
</script>

<template>
  <v-card
    class="card"
    width="300"
    color="background"
  >
    <v-img
      height="200px"
      :src="source.image"
      cover
      class="relative-container"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="primary"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>

      <div class="relative-container">
        <v-icon
          class="favorite-btn"
          :color="source.isFavorite === 'true' ? 'red' : 'primary'"
        >
          {{ source.isFavorite ? "mdi-heart" : "mdi-heart-outline" }}
        </v-icon>
      </div>
    </v-img>

    <v-card-title class="text-wrap">{{ source.name }}</v-card-title>

    <v-card-subtitle>
      <v-icon color="primary">mdi-message-star-outline</v-icon>
      {{ source.rating }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="accent"
        :text="source.cuisine"
      ></v-btn>
      <v-btn
        :color="
          source.difficulty === 'Easy'
            ? 'green-lighten-2'
            : source.difficulty === 'Medium'
              ? 'orange-lighten-2'
              : 'red-lighten-2'
        "
        :text="source.difficulty"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Shopping list includes:
          <v-list>
            <v-list-item
              v-for="(ingredient, index) in source.ingredients"
              :key="index"
              prepend-icon="mdi-check"
            >
              {{ ingredient }}
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
  .card {
    margin-top: 25px;
  }
  .location {
    text-align: center;
    text-decoration: none;
    color: #4a90e2;
  }

  .relative-container {
    position: relative;
  }

  .favorite-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
    cursor: pointer;
  }
</style>
