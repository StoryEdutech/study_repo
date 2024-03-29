import type { Article } from "./types";
import { Heading } from "@/components/chakra-ui";
import ArticleList from "./_components/ArticleList";

async function getArticles():Promise<Article[]> {
  const res = await fetch("http://localhost:3000/api/articles", { cache: "no-store" });

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: Article[] = await res.json();
  return data;
}

export default async function Home() {
  const articles:Article[] = await getArticles();

  return (
    <div>
     <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}