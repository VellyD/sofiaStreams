<script>
  import { logInUser } from "@/services/auth";
  import { useUserStore } from "@/store/userStore";
  import { mapActions } from "pinia";

  export default {
    data() {
      return {
        email: "",
        password: "",
        valid: false,
        rules: {
          required: (value) => !!value || "This field is required!",
          // Add email validation
          email: (value) => {
            const pattern = /^[a-zA-Z][a-zA-Z0-9_.]{2,19}(?<![._])$/;
            return pattern.test(value) || "Invalid email address!";
          },
          min: (length) => (value) =>
            (value && value.length >= length) ||
            `Minimum ${length} characters required!`,
        },
        isLoading: false,
      };
    },
    methods: {
      ...mapActions(useUserStore, ["setProfile"]),
      async submitForm() {
        this.isLoading = true;
        if (this.$refs.loginForm.validate()) {
          let user = await logInUser({
            username: this.email,
            password: this.password,
          });
          if (user) {
            this.setProfile(user);
            this.$router.push("/profile");
          }
        }
        // emilys
        // emilyspass
        this.isLoading = false;
      },
    },
  };
</script>

<template>
  <v-container
    class="d-flex justify-center align-center"
    style="height: 100vh"
  >
    <v-card
      style="width: 400px; border: 2px solid #e8a874; border-radius: 8px"
      color="background"
      :loading="isLoading"
    >
      <v-card-title class="text-h6 text-center text">
        <v-icon
          class="me-2"
          color="primary"
        >
          mdi-login-variant
        </v-icon>
        Login
      </v-card-title>
      <v-card-text>
        <v-form
          ref="loginForm"
          v-model="valid"
        >
          <v-text-field
            v-model="email"
            label="Email"
            :rules="[rules.required, rules.email]"
            outlined
            required
            :disabled="isLoading"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :rules="[rules.required, rules.min(6)]"
            outlined
            required
            :disabled="isLoading"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="button"
          variant="outlined"
          @click="submitForm"
          :disabled="!valid || isLoading"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
  .text {
    color: #e8a874;
  }
</style>
