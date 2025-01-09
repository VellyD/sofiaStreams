<script>
  export default {
    data() {
      return {
        icons: [
          { name: "mdi-web", url: "https://stolichnah2o.com/" },
          { name: "mdi-twitter", url: "" },
          { name: "mdi-instagram", url: "" },
        ],
      };
    },
  };
</script>

<template>
  <v-footer
    color="primary"
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="`icon-${icon}`"
        :icon="icon.name"
        :href="icon.url"
        variant="text"
        class="mx-4"
        color="text"
      ></v-btn>
    </div>

    <p class="pt-0 text">Stop drinking plastic water!</p>

    <v-divider></v-divider>

    <div class="text">
      <v-icon
        size="24"
        class="mb-2"
      >
        mdi-fountain
      </v-icon>
      <v-divider></v-divider>
      <strong>The Fountains of Sofia</strong>
    </div>
  </v-footer>
</template>

<style scoped>
  .text {
    color: #2d3e50;
  }
</style>
