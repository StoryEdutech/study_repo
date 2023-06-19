import { notFound } from "next/navigation";
import { Article} from "@/app/types";

const getArticle = async (slug: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3000/api/articles/${slug}`,{
        next: { revalidate: 2 },
    });

    if (res.status === 404) {
        // notFound 関数を呼び出すと not-fount.tsx を表示する
        notFound();
    }

    if (!res.ok) {
        throw new Error("Failed to fetch article");
    }

    const { article } = await res.json() as { article: Article }
    return article
}

export default getArticle
