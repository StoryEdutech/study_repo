import { VStack } from "@/components/chakra-ui";
import ArticleCard from "./ArticleCard";
import { Article } from "@/app/types";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <VStack spacing={4} as="ul">
      {articles && articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  );
}