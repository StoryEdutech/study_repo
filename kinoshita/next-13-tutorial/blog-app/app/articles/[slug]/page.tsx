import { NextPage, Metadata, ResolvingMetadata } from 'next';
import { Suspense } from "react";
import { getArticle, getComments } from './_helper'
import { notFound } from 'next/navigation';
import { Article, Comment } from '@/app/types';

interface PageProps { 
    params: {
        slug: string 
    }
}

const ArticleDetail: NextPage<PageProps> = async ({ params }) => {
    const { slug } = params

    const {
        title,
        content,
        id
    }: Article = await getArticle(slug)
  
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <h2>Comments</h2>
            <Suspense fallback={<p>コメントを取得中です...</p>}>
                <CommentList articleId={id} />
            </Suspense>
        </div>
    )
}

interface CommentProps {
    articleId: number
}

const CommentList = async ({ articleId }: CommentProps) => {

    // 記事では、slugを引数にした関数になってるけど
    // Comment型にはslugがなくて、articleIdがあるので、article.idでCommentを取得
    const comments: Comment[] = await getComments(articleId)
    
    return (
        <ul>
            {
                comments.length ?
                comments.map(({ id, body }) => (
                    <li key={`Comment_${id}`}>{body}</li>
                )) : (
                    <p>コメントがありません</p>
                )
            }
        </ul>
    )
    
}

export const generateMetadata = async ({ params }: {
    params: { slug: string},
    // parent?: ResolvingMetadata なくてもできる
}) =>  {
    const { slug } = params

    const article = await getArticle(slug)

    if(!article) notFound()

    return {
        title: `Blog app | ${article.title}`,
        description: article.content
    }
}

export default ArticleDetail
