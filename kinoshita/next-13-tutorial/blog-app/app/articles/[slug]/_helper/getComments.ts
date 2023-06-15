import { Comment } from "@/app/types";

export const getComments = async (articleId: number): Promise<Comment[]> => {
    
    // [slug]でディレクトリを切ってしまっているので、無理くり代入する
    const slug = articleId 

    const res = await fetch(
        `http://localhost:3000/api/articles/${slug}/comments`,
        {
            cache: "no-store",
        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch comments");
    }

    const { comments } = await res.json() as { comments: Comment[] }
    
    return comments
}
