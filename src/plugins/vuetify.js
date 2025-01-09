// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#4A90E2", // Calm water blue for buttons and accents
    secondary: "#50BFE6", // Vibrant cyan for highlights
    accent: "#92E1D6", // Soft aqua for complementary elements
    success: "#76C7C0", // Muted teal for positive actions
    warning: "#FFC857", // Warm yellow for warnings
    error: "#E57373", // Light red for errors
    background: "#EAF6FA", // Light, calming blue for backgrounds
    surface: "#D8F1F9", // Slightly darker surface for contrast
    text: "#2D3E50", // Dark navy for readable text
    button: "#7393b3",
  },
  variables: {
    //add variables
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "customLightTheme",
    themes: {
      customLightTheme,
    },
  },
});
