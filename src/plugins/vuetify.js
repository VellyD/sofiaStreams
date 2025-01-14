// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#E8A874", // Vibrant peach for primary buttons and accents
    secondary: "#F4C57C", // Rich golden beige for highlights
    accent: "#D9A773", // Warm sandy brown for complementary elements
    success: "#9BBF68", // Fresh olive green for positive actions
    warning: "#F4A236", // Bold golden yellow for warnings
    error: "#D87D74", // Deep coral for errors
    background: "#FFF8EF", // Warm creamy beige for the background
    surface: "#F4D1AF", // Richer warm beige for surfaces
    text: "#4A3222", // Dark chocolate brown for high contrast and readability
    button: "#E5977B", // Bold salmon for buttons
  },
  variables: {
    // variables
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
