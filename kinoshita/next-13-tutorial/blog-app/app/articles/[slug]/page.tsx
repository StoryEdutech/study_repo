import { NextPage } from "next"
import { notFound } from "next/navigation";
import { Article, Comment } from "../../types";

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`,
    {
    next: { revalidate: 2 },
    }
  );

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


// const getComments = async (slug: string) => {
//   const res = await fetch(
//     `http://localhost:3000/api/articles/${slug}/comments`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch comments");
//   }

//   const data = await res.json();
//   return data.comments as Comment[];
// };


interface Props { 
    params: {
        slug: string 
    }
}

const ArticleDetail: NextPage<Props> = async ({ params }) => {
    const { slug } = params

    // const articlePromise = getArticle(slug);
    // const commentsPromise = getComments(slug);
  
    // const [article, comments] = await Promise.all([
    //   articlePromise,
    //   commentsPromise,
    // ]);

    const article = await getArticle(slug);
  
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <h2>Comments</h2>
            {/* <ul>
            {comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
            ))}
            </ul> */}
        </div>
    );}

export default ArticleDetail
