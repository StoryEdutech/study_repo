import axios from "@/app/_lib/axios";

export default async function getCsrfToken() {
  try {
    await axios.get("/sanctum/csrf-cookie");
  } catch (error) {
    throw new Error("failed to get csrf token");
  }
}
