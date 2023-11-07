import axios from "@/app/_lib/axios";
import type { Comment } from "@/app/_lib/types";

export default async function getComments(slug: string) {
  try {
    const res = await axios.get(`/api/articles/${slug}/comments`);
    return res.data as Comment[];
  } catch (error) {
    throw new Error("Failed to get comments");
  }
}
