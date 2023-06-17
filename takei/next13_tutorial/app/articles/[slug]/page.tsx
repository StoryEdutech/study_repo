import {notFound} from "next/navigation";
import {Suspence} from "react";
import { Article, Comment } from "@/app/types";
import ArticleContent from "./_components/ArticleContent";
import { getArticle,getComments } from "./_helper";

export default async function ArticleDetail ({params}: {params : {slug: string}}) {

  const articlePromise = getArticle(params.slug);
  const commentPromise = getArticle(params.slug);

  const article = await articlePromise;


  return (
    <ArticleContent article={article}></ArticleContent>
  )
}