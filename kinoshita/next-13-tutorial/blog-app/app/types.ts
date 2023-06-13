export interface Article {
    id: number,
    title: string,
    content: string,
    slug: string,
    createdAt: Date,
    updatedAt: Date | null
}
  
export interface Comment {
    id: number,
    body: string,
    articleId: number,
    createdAt: Date,
    updatedAt: Date | null,
    author: Author
}

export interface Author {
    name: string,
    avatarUrl: string
}