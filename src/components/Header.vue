<script>
  export default {
    props: {
      isAuthUser: {
        type: Boolean,
        required: true,
      },
    },
    emits: ["onSelect"],
    methods: {
      onSelect(view) {
        this.$emit("onSelect", view);
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
        mdi-fountain
      </v-icon>
      The Fountains of Sofia
    </v-app-bar-title>

    <v-tabs
      v-if="!isAuthUser"
      color="primary"
      align="center"
    >
      <v-tab
        value="Home"
        @click.prevent="onSelect('Home')"
      >
        <v-icon class="me-2">mdi-home</v-icon>
        Home
      </v-tab>

      <v-tab
        value="Login/Register"
        @click.prevent="onSelect('Login/Register')"
      >
        <v-icon class="me-2">mdi-account</v-icon>
        Login/Register
      </v-tab>

      <v-tab
        value="Favorites"
        @click.prevent="onSelect('Contacts')"
      >
        <v-icon class="me-2">mdi-contacts</v-icon>
        Contacts
      </v-tab>
    </v-tabs>
    <v-tabs
      v-else
      color="primary"
      align="center"
    >
      <v-tab
        value="Home"
        @click.prevent="onSelect('Home')"
      >
        <v-icon class="me-2">mdi-home</v-icon>
        Home
      </v-tab>

      <v-tab
        value="Add Fountain/ Location"
        @click.prevent="onSelect('Add Fountain/ Location')"
      >
        <v-icon class="me-2">mdi-view-grid-plus</v-icon>
        Add Fountain/ Location
      </v-tab>

      <v-tab
        value="Favorites"
        @click.prevent="onSelect('Favorites')"
      >
        <v-icon class="me-2">mdi-heart</v-icon>
        Favorites
      </v-tab>

      <v-tab
        value="Profile"
        @click.prevent="onSelect('Profile')"
      >
        <v-icon class="me-2">mdi-account-cog</v-icon>
        Profile
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<style scoped></style>
