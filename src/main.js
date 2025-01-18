/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { useUserStore } from "./store/userStore";

const app = createApp(App);

registerPlugins(app);
const userStore = useUserStore();
userStore.getUserToken();

app.mount("#app");
