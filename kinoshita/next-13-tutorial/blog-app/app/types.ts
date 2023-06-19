export interface Article {
    id: number,
    title: string,
    content: string,
    slug: string,
    createdAt: string,
    updatedAt: string | null
}
  
export interface Comment {
    id: number,
    body: string,
    articleId: number,
    createdAt: string,
    updatedAt: string | null,
    author: Author
}

export interface Author {
    name: string,
    avatarUrl: string
}