import { VStack } from "@/app/_lib/components";
import ArticleCard from "./ArticleCard";
import { Article } from "@/app/_lib/types";

export default function ArticleList({ articles }: { articles: Article[] }) {
  /*articles.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });*/
  return (
    <VStack spacing={4} as="ul">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  );
}
