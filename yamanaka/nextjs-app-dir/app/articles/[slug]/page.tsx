import { Heading } from "@/app/_common/components";
import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleContent from "./_components/ArticleContent";
import LoadingComments from "./_components/LoadingComments";
import Comments from "./_components/Comments";
import SendComment from "./_components/SendComment";
import getArticle from "@/app/_lib/api/getArticle";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
  parent?: ResolvingMetadata;
}): Promise<Metadata> {
  const article = await getArticle(params.slug);

  return {
    title: article?.title,
    description: article?.content,
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  return (
    <div>
      <ArticleContent article={article} />
      <Heading as="h2" mt={8} mb={4}>
        Comments
      </Heading>
      <Suspense fallback={<LoadingComments />}>
        <Comments slug={article.slug} />
      </Suspense>
      <SendComment slug={article.slug} />
    </div>
  );
}
