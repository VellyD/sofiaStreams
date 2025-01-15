import axios from "axios";

export async function logInUser(user) {
  try {
    const res = await axios.post("https://dummyjson.com/auth/login", user);
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
