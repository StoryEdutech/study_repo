import type { Article } from "./types";

const getArticles = async () => {
    const res = await fetch("http://localhost:3000/api/articles", {
        next: {
            revalidate: 5 // (仮で)
        }
    });

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
            <h1>新着記事</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home
