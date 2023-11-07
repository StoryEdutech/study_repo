import axios from "@/app/_lib/axios";
import Axios from "axios";
import getCsrfToken from "../getCsrfToken";

export default async function logout() {
  try {
    await getCsrfToken();
    const res = await axios.post("/logout");
    return res.status;
  } catch (error) {
    if (Axios.isAxiosError(error)) return error.status;
    else throw new Error("failed to logout");
  }
}
