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
  >
    <v-img
      height="200px"
      :src="source.img"
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
      <a
        :href="`https://www.google.com/maps?q=${source.lang},${source.long}`"
        target="_blank"
        rel="noopener noreferrer"
        class="location"
      >
        <v-icon color="primary">mdi-map-marker</v-icon>
        Location
      </a>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        :color="
          source.isFunctional === 'true' ? 'green-lighten-2' : 'red-lighten-2'
        "
        :text="source.type"
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
          {{ source.details }}
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
