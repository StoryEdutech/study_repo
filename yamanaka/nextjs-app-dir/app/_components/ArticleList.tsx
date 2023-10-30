import { VStack } from "@/app/_common/components";
import ArticleCard from "./ArticleCard";
import { Article } from "@/app/_common/types";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <VStack spacing={4} as="ul">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  );
}
