import { Article } from "@/app/types";
import NotFound from "../not-found";

export const getArticle = async (slug: string):Promise<Article> => {
    const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
        next: { revalidate: 60 },
    });

    if (res.status === 404) {
        NotFound();
    }

    if (!res.ok) {
        throw new Error("Faild to fetch Articles");
    }
    const data:Article = await res.json();
    return data;
};

export default getArticle;