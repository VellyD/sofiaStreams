<script>
  export default {
    name: "NotFoundPage",
  };
</script>

<template>
  <v-container class="fill-height justify-center">
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <h6 class="title">(404 Not Found)</h6>
        <h1 class="title">The page you are looking for does not exist!</h1>

        <v-btn
          color="primary"
          @click="$router.push('/')"
        >
          Go Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .fill-height {
    height: 100vh;
  }
  .title {
    font-family: "Dancing Script", cursive;
    text-align: center;
    margin-top: 25px;
  }
</style>
