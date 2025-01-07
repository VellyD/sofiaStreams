/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#9FD8CB", // Light pastel teal (main accent)
    secondary: "#D4F1F4", // Soft pastel cyan
    accent: "#A4D4AE", // Gentle pastel green
    info: "#B4E3D5", // Fresh aqua for information highlights
    success: "#CCE8CF", // Light mint green for positive states
    warning: "#FFECB3", // Soft pastel yellow (to denote caution subtly)
    error: "#FFCCBC", // Light coral for errors (maintains theme softness)
    background: "#F7FCFB", // Very light greenish-white for a clean backdrop
    surface: "#E9F7F4", // Subtle muted green for card surfaces
  },
  variables: {
    //add variables
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "customLightTheme",
    themes: {
      customLightTheme,
    },
  },
});
