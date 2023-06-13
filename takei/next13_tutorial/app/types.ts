export type Article = {
    id: number;
    title: string;
    content: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date | null;
};

export type Comment = {
    id: number;
    body: string;
    articleId: number;
    createdAt: Date;
    updatedAt: Date | null;
    author: Author;
};

export type Author = {
    name: string;
    avatarUrl: string;
};