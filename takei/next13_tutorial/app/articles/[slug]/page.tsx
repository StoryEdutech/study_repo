import {Suspense} from "react";
import ArticleContent from "./_components/ArticleContent";
import Comments from "./_components/Comments";
import { Heading } from "@/components/chakra-ui";
import getArticle from "./_helper/getArtilce"
import LoadingComments from "./LoadingComments";
import {Article} from "@/app/types";
import type { Metadata, ResolvingMetadata } from 'next';


export default async function ArticleDetail ({params}: {params : {slug: string}})Promise:Article[] {

  const articlePromise = getArticle(params.slug);

  const article = await articlePromise;

  return (
    <div>
      <ArticleContent article={article} />
      <Heading>
        コメント一覧
      </Heading>
      <Suspense fallback={<LoadingComments />}>
        {/* @ts-expect-error 現状は jsx が Promise を返すと TypeScript が型エラーを報告するが、将来的には解決される */}
        <Comments slug={params.slug} />
      </Suspense>
    </div>
  )
}


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
  parent?: ResolvingMetadata;
}): Promise<Metadata> {
  const article:Article = await getArticle(params.slug);
  return {
    title: article?.title,
    description: article?.content,
  };
}