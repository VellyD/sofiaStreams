<script>
  export default {
    props: {
      isAuthUser: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>

<template>
  <v-app-bar
    :elevation="2"
    color="background"
  >
    <v-app-bar-title>
      <v-icon
        size="28"
        color="primary"
        class="mb-2"
      >
        mdi-chef-hat
      </v-icon>
      Yum Yum recipes
    </v-app-bar-title>

    <v-tabs
      v-if="!isAuthUser"
      color="text"
      align="center"
    >
      <v-tab
        value="Home"
        to="/"
      >
        <v-icon class="me-2">mdi-home</v-icon>
        Home
      </v-tab>

      <v-tab
        value="Login"
        to="/login"
      >
        <v-icon class="me-2">mdi-login-variant</v-icon>
        Login
      </v-tab>

      <v-tab
        value="Register"
        to="/register"
      >
        <v-icon class="me-2">mdi-account-plus</v-icon>
        Register
      </v-tab>
    </v-tabs>
    <v-tabs
      v-else
      color="primary"
      align="center"
    >
      <v-tab
        value="Home"
        to="/"
      >
        <v-icon class="me-2">mdi-home</v-icon>
        Home
      </v-tab>

      <v-tab
        value="Favorites"
        to="/favorites"
      >
        <v-icon class="me-2">mdi-heart</v-icon>
        Favorites
      </v-tab>

      <v-tab
        value="Profile"
        to="/profile"
      >
        <v-icon class="me-2">mdi-account-cog</v-icon>
        Profile
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<style scoped></style>
