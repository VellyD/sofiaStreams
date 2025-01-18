# YUM YUM Cooking app

**Yum Yum** is a modern web application for discovering and managing cooking recipes. The app offers both public and private functionalities, making it easy for users to browse recipes and manage their own favorites.

---

## Features

### Public Functionality
- Browse a variety of cooking recipes.
- Filter recipes by difficulty.

### Private Functionality
- **Save Favorites**: Logged-in users can save their favorite recipes for quick access.
- **User Profile**: View personal profile information.

---

## Tech Stack

- **Frontend Framework**: Vue.js
- **UI Framework**: Vuetify
- **State Management**: Pinia
- **Routing**: Vue Router
- **Code Styling**: ESLint and Prettier
- **DB/BackEnd**: [DummyJSON](https://dummyjson.com/)


---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VellyD/yumyum.git
   ```
2. Navigate to the project directory:
   ```bash
   cd yum-yum
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Scripts

| Script          | Description                      |
|-----------------|----------------------------------|
| `npm run dev`   | Starts the development server.   |

---

## Folder Structure

```plaintext
src/
├── components/     # Reusable Vue components
├── pages/          # App views/pages
├── plugins/        # Vuetify setup and app .use setup
├── router/         # Vue Router setup and routes
├── services/       # API calls to the DummyJSON server
├── store/          # Pinia stores
├── App.vue         # Root component
├── main.js         # App entry point
```

---
## Testing
Since the register is only for showcasing the form and rules, you can use default DummyJSON users for login.

## Deploy URL
[Live under Github Pages](https://vellyd.github.io/yumyum/)
## Contact

For questions or feedback, please reach out to [VellyD].
