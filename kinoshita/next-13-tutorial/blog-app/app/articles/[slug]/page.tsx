import { NextPage, Metadata, ResolvingMetadata } from 'next';
import { Suspense } from "react";
import { getArticle, getComments } from './_helper'
import { notFound } from 'next/navigation';
import { Article } from '@/app/types';

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
    const comments = await getComments(articleId)

    if(comments.length === 0) {
        return <p>コメントがありません</p>
    }
    
    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>{comment.body}</li>
            ))}
        </ul>
    )
    
}

interface GenerateMetadata extends PageProps {
    parent?: ResolvingMetadata // 親のディレクトリのmeatadataを取得するのに必要
}

export const generateMetadata = async ({ params }: GenerateMetadata) =>  {
    const { slug } = params

    const article = await getArticle(slug)

    if(!article) notFound()

    return {
        title: `Blog app | ${article.title}`,
        description: article.content
    }
}

export default ArticleDetail
