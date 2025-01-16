<script>
  export default {
    emits: ["onFilter"],
    data() {
      return {};
    },
    methods: {
      onFilter(filter) {
        this.$emit("onFilter", filter);
      },
    },
  };
</script>

<template>
  <div class="tags">
    <h4>Filter by difficulty:</h4>
    <v-btn
      variant="outlined"
      density="compact"
      color="primary"
      @click="onFilter('Easy')"
    >
      Easy
    </v-btn>
    <v-btn
      variant="outlined"
      density="compact"
      color="primary"
      @click="onFilter('Medium')"
    >
      Medium
    </v-btn>
    <v-btn
      variant="outlined"
      density="compact"
      color="primary"
      @click="onFilter('Hard')"
    >
      Hard
    </v-btn>
    <v-btn
      variant="plain"
      density="compact"
      color="primary"
      class="reset-filter"
      @click="onFilter('Clear')"
    >
      Clear filter
      <v-icon>mdi-close-circle</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  .reset-filter {
    font-family: "Dancing Script", cursive;
    font-size: 12px;
    font-style: italic;
    padding-left: 0px;
  }
</style>
