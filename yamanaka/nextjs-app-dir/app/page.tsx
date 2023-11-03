import { Heading } from "@/app/_common/components";
import ArticleList from "./_components/ArticleList";
import getArticles from "@/app/_lib/api/getArticles";

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
