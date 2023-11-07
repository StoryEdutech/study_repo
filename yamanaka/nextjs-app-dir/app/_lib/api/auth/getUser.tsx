import axios from "@/app/_lib/axios";
import Axios from "axios";
import type { User } from "@/app/_lib/types";

export default async function getUser() {
  try {
    const res = await axios.get("/api/user");
    return res.data as User;
  } catch (error) {
    if (Axios.isAxiosError(error)) return error.status;
    else throw new Error("failed to get user");
  }
}
