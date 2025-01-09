<script>
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: null,
        valid: false,
        rules: {
          required: (value) => !!value || "This field is required!",
          email: (value) => {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(value) || "Invalid email address!";
          },
          min: (length) => (value) =>
            (value && value.length >= length) ||
            `Minimum ${length} characters required.`,
        },
      };
    },
    methods: {
      confirmPasswordRule(value) {
        return value === this.password || "Passwords do not match!";
      },
      submitForm() {
        if (this.$refs.registerForm.validate()) {
          // Handle form submission here (e.g., send data to server)
          console.log("Form submitted:", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            gender: this.gender,
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
    <v-card
      elevation="3"
      style="width: 400px"
    >
      <v-card-title class="text-h6 text-center text">
        <v-icon class="me-2">mdi-account-plus</v-icon>
        Register
      </v-card-title>
      <v-card-text>
        <v-form
          ref="registerForm"
          v-model="valid"
        >
          <v-text-field
            v-model="firstName"
            label="First Name"
            :rules="[rules.required]"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="lastName"
            label="Last Name"
            :rules="[rules.required]"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Email (Username)"
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

          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            :rules="[rules.required, confirmPasswordRule]"
            outlined
            required
          ></v-text-field>

          <v-radio-group
            v-model="gender"
            label="Gender"
            color="button"
          >
            <v-radio
              label="Male"
              value="male"
              class="text"
            ></v-radio>
            <v-radio
              label="Female"
              value="female"
              class="text"
            ></v-radio>
            <v-radio
              label="Other"
              value="other"
              class="text"
            ></v-radio>
          </v-radio-group>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="button"
          variant="outlined"
          @click="submitForm"
          :disabled="!valid"
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
  .text {
    color: #2d3e50;
  }
</style>
