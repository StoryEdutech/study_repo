import { Comment } from "@/app/types";

export const getComments = async (slug: string):Promise<Comment[]> => {
  const res = await fetch(
    `http://localhost:3000/api/articles/${slug}/comments`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Faild to fetch comments");
  }

  const data:Comment[] = await res.json();
  return data;
};
export default getComments;
