<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Contacts from './pages/Contacts.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Home from './pages/Home/Home.vue';

export default {
  components: {
    Footer,
    Header,
    Contacts,
    Login,
    Register,
    Home,
  },
  data() {
    return {
      view: 'Home',
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
    <Header :is-auth-user="false" @on-select="onNavigationSelect" />
    <v-main>
      <component :is="view" />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
  <Footer />
</template>

<style scoped></style>
