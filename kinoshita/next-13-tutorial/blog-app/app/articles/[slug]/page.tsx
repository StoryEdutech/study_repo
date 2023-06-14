import { NextPage } from "next"
import { notFound } from "next/navigation";
import { Article, Comment } from "@/app/types";

const getArticle = async (slug: string) => {
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
};


const getComments = async (articleId: number) => {
    
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

};


interface Props { 
    params: {
        slug: string 
    }
}

const ArticleDetail: NextPage<Props> = async ({ params }) => {
    const { slug } = params

    const article = await getArticle(slug)

    // 記事では、slugを引数にした関数になってるけど
    // Comment型にはslugがなくて、articleIdがあるので、article.idでCommentを取得
    const comments = await getComments(article.id)
  
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <h2>Comments</h2>
            <ul>
                {
                    comments.length > 0 ? (
                        comments.map((comment) => (
                            <li key={comment.id}>{comment.body}</li>
                        ))
                    ) : (
                        <p>コメントがありません</p>
                    )
                }
            </ul>
        </div>
    )
}

export default ArticleDetail
