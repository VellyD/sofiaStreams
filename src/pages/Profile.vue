<script>
  import { mapState } from "pinia";
  import { useUserStore } from "../store/userStore";

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(useUserStore, ["profile", "isAuthenticated"]),
    },
    created() {
      if (!this.isAuthenticated) return this.$router.push("/login");
    },
  };
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-card
      style="max-width: 500px; padding: 20px; border-radius: 12px"
      color="background"
      class="elevation-5"
    >
      <v-row class="d-flex align-center">
        <v-col
          cols="4"
          class="text-center"
        >
          <v-avatar size="150">
            <v-img
              :src="profile.image"
              alt="Profile Picture"
            />
          </v-avatar>
        </v-col>
        <v-col cols="8">
          <v-card-title
            class="text-h5"
            style="color: var(--v-primary)"
          >
            {{ profile.firstName }}
          </v-card-title>
          <v-card-subtitle
            class="text-subtitle-2"
            style="color: var(--v-text)"
          >
            {{ profile.gender }}
          </v-card-subtitle>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-text>
        <p style="color: var(--v-text)">
          Welcome to your profile page, {{ profile.username }}! This is where
          you can view and update your personal information.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped></style>
