import type { Article } from "./types";
import { Heading, VStack } from '@/lib/components'
import ArticleCard from "./_components/ArticleCard";

const getArticles = async () => {
    // Suspense検証用 遅延させる
    const start = new Date().getTime()
    while(new Date().getTime() - start < 3500) {
        // なにもしない
    }

    const res = await fetch("http://localhost:3000/api/articles", {
        // next: {
        //     revalidate: 5 // (仮で
        // },
        cache: 'no-store'
    });

    // Error検証用
    // throw new Error("Failed to fetch articles")

    // エラーハンドリングを行うことが推奨されている
    if (!res.ok) {
        throw new Error("Failed to fetch articles");
    }

    const { articles } = await res.json() as { articles: Article[] }

    return articles
}

const Home = async () => {
    const articles = await getArticles();

    return (
        <div>
            <Heading as="h1" mb={4}>
            新着記事
            </Heading>
            
            <VStack spacing={4} as="ul">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </VStack>
        </div>
    );
}

export default Home
