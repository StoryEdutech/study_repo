import axios from "@/app/_lib/axios";
import type { Article } from "@/app/_lib/types";

export default async function getArticles() {
  try {
    const res = await axios.get("/api/articles");
    return res.data as Article[];
  } catch (error) {
    throw new Error("failed to get articles");
  }
}
