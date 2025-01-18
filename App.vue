<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    components: {
      Footer,
      Header,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <Footer />
</template>

<style scoped></style>
