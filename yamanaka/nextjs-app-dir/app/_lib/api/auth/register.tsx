import axios from "@/app/_lib/axios";
import Axios from "axios";
import getCsrfToken from "../getCsrfToken";

export default async function register(
  name: string,
  email: string,
  password: string,
  password_confirmation: string
) {
  try {
    await getCsrfToken();
    const res = await axios.post("/register", {
      name,
      email,
      password,
      password_confirmation,
    });
    return res.status;
  } catch (error) {
    if (Axios.isAxiosError(error)) return error.status;
    else throw new Error("failed to register");
  }
}
