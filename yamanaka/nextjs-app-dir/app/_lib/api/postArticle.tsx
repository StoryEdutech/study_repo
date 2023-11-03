import axios from "@/app/_lib/axios";
import getCsrfToken from "./getCsrfToken";
import Axios from "axios";

export default async function postArticle(title: string, content: string) {
  try {
    await getCsrfToken();
    const res = await axios.post("api/articles", { title, content });
    return res.status;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      return error.status;
    } else {
      throw new Error("failed to post article");
    }
  }
}
