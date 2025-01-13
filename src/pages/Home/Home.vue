<script>
  import Card from "./components/Card.vue";
  export default {
    components: { Card },
    data() {
      return {
        fountains: [],
      };
    },
    async mounted() {
      const url = "https://dummyjson.com/c/d340-42b2-42a9-99d7";
      const request = await fetch(url).then((res) => res.json());
      console.log(request);
      this.fountains = request;
    },
  };
</script>

<template>
  <div class="card-container">
    <Card
      v-for="fountain in fountains"
      :key="fountain.id"
      :source="fountain"
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
