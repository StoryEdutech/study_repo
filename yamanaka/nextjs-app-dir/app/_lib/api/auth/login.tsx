import axios from "@/app/_lib/axios";
import Axios from "axios";
import getCsrfToken from "../getCsrfToken";

export default async function login(email: string, password: string) {
  try {
    await getCsrfToken();
    const res = await axios.post("/login", { email, password });
    return res.status;
  } catch (error) {
    if (Axios.isAxiosError(error)) return error.status;
    else throw new Error("failed to login");
  }
}
