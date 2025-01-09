<script>
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
        valid: false,
        rules: {
          required: (value) => !!value || "This field is required!",
          email: (value) => {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(value) || "Invalid email address!";
          },
          min: (length) => (value) =>
            (value && value.length >= length) ||
            `Minimum ${length} characters required!`,
        },
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.loginForm.validate()) {
          console.log("Form submitted:", {
            username: this.username,
            email: this.email,
            password: this.password,
          });
        }
      },
    },
  };
</script>

<template>
  <v-container
    class="d-flex justify-center align-center"
    style="height: 100vh"
  >
    <v-card style="width: 400px">
      <v-card-title class="text-h6 text-center">
        <v-icon
          class="me-2"
          color="text"
        >
          mdi-login
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
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            :rules="[rules.required, rules.min(6)]"
            outlined
            required
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="text"
          @click="submitForm"
          :disabled="!valid"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
