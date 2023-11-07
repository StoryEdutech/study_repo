export type Article = {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  id: number;
  body: string;
  articleId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
};

export type Author = {
  name: string;
  avatarUrl: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};
