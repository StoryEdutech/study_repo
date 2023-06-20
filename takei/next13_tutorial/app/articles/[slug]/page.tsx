import {Suspense} from "react";
import ArticleContent from "./_components/ArticleContent";
import Comments from "./_components/Comments";
import { Heading } from "@/components/chakra-ui";
import getArticle from "./_helper/getArtilce"
import getComments from "./_helper/getComments";
import LoadingComments from "./LoadingComments";

export default async function ArticleDetail ({params}: {params : {slug: string}}) {

  const articlePromise = getArticle(params.slug);
  const commentPromise = getComments(params.slug);

  const article = await articlePromise;

  return (
    <div>
      <ArticleContent article={article} />
      <Heading>
        コメント一覧
      </Heading>
      <Suspense fallback={<LoadingComments />}>
        <Comments commentPromise={commentPromise} />
      </Suspense>
    </div>
  )
}