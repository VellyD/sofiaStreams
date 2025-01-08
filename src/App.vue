<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Contacts from "./pages/Contacts.vue";

  export default {
    components: { Footer, Header, Contacts },
    data() {
      return {
        view: "Home",
      };
    },
    methods: {
      onNavigationSelect(selectedView) {
        this.view = selectedView;
      },
    },
  };
</script>

<template>
  <v-app>
    <Header
      :is-auth-user="false"
      @on-select="onNavigationSelect"
    />
    <v-main>
      <component :is="view" />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
  <Footer />
</template>

<style scoped></style>
