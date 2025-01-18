<script>
  import { logInUser } from "@/services/auth";
  import { useUserStore } from "@/store/userStore";
  import { mapActions } from "pinia";

  export default {
    data() {
      return {
        userName: "",
        password: "",
        valid: false,
        rules: {
          required: (value) => !!value || "This field is required!",
          userName: (value) => {
            const pattern = /^[a-zA-Z][a-zA-Z0-9_.]{2,19}(?<![._])$/;
            return pattern.test(value) || "Invalid username!";
          },
          min: (length) => (value) =>
            (value && value.length >= length) ||
            `Minimum ${length} characters required!`,
        },
        isLoading: false,
        isError: false,
        errorMessageText: "",
      };
    },
    methods: {
      ...mapActions(useUserStore, ["setProfile"]),
      async submitForm() {
        this.isLoading = true;
        if (this.$refs.loginForm.validate()) {
          let res = await logInUser({
            username: this.userName,
            password: this.password,
          });

          if (res.status === 200) {
            this.setProfile(res.data);
            this.$router.push("/profile");
          } else {
            this.errorMessageText = res.response.data.message;
            this.isError = true;
            setTimeout(() => {
              this.isError = false;
            }, 5000);
          }
        }

        this.isLoading = false;
      },
    },
  };
</script>

<template>
  <v-alert
    v-if="isError"
    class="alert"
    border="top"
    type="error"
    variant="outlined"
    position="absolute"
    elevation="2"
    rounded="true"
    width="400px"
  >
    {{ errorMessageText }}
  </v-alert>

  <v-container
    class="d-flex justify-center align-center"
    color="primary"
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
            v-model="userName"
            label="Username"
            :rules="[rules.required, rules.userName]"
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
        <router-link
          class="registerlink"
          to="/register"
        >
          New to YUM YUM?
          <br />
          Register here!
        </router-link>

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
  .registerlink {
    font-size: 12px;
    text-decoration: none;
    color: #e8a874;
    margin-left: 10px;
  }
  .alert {
    top: 80px;
    right: 5px;
    z-index: 1000;
  }
</style>
