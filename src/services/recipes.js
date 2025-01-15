import axios from "axios";

export async function getAllRecipes() {
  try {
    const res = await axios.get("https://dummyjson.com/recipes");
    return res.data.recipes;
  } catch (e) {
    console.error(e);
  }
}