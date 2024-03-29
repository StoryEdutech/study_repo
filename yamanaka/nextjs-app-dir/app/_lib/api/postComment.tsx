import axios from "@/app/_lib/axios";
import getCsrfToken from "./getCsrfToken";
import Axios from "axios";

export default async function postComment(slug: string, body: string) {
  try {
    await getCsrfToken();
    const res = await axios.post(`api/articles/${slug}/comments`, {
      body,
    });
    return res.status;
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      return error.status;
    } else {
      throw new Error("failed to post comment");
    }
  }
}
