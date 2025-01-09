// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const customLightTheme = {
  dark: false,
  colors: {
    primary: "#80C1B1",
    secondary: "#AEE1E5",
    accent: "#86C98F",
    success: "#A8D7A9",
    warning: "#FFD777",
    error: "#FF9A8B",
    background: "#EAF6F3",
    surface: "#CFEFE7",
    text: "#3E3E3E",
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
