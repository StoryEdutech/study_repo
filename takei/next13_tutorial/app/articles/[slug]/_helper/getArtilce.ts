import { Article } from "@/app/types";
import NotFound from "../not-found";

export const getArticle = async (slug: string) => {
    const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
        next :{revalidate:60},
    });

    if(res.status === 404) {
        NotFound();
    }

    if(!res.ok) {
        throw new Error("Failed to fetch article");
    }

    const data = await res.json();
    return data as Article;
};

export default getArticle;