import { Heading } from "@/app/_common/components";
import type { Article } from "@/app/_common/types";
import ArticleList from "./_components/ArticleList";

async function getArticles() {
  const res = await fetch("http://localhost:8000/api/articles", {
    cache: "no-store",
  });

  // エラーハンドリングを行うことが推奨されている
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}
