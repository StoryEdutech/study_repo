import Axios from "axios";
import axios from "@/app/_lib/axios";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import type { Article } from "@/app/_common/types";

export const getArticle = unstable_cache(
  async (slug: string) => {
    try {
      const res = await axios.get(`/api/articles/${slug}`);
      return res.data as Article;
    } catch (error) {
      if (Axios.isAxiosError(error) && error.status == 404) {
        notFound();
      } else {
        throw new Error("failed to get article");
      }
    }
  },
  ["article"],
  { revalidate: 60 }
);

export default getArticle;
