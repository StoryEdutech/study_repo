import { NextResponse } from 'next/server'
import commentsData from '@/dummy-data/comments.json'
import { Comment } from '@/app/types'

const getCommentsfromDummy = (articleId:number): Comment[] | null => {

    const comments = commentsData.filter(element => {
        return element.articleId === articleId
    })

    return comments
} 

interface Params {
    params : {
        slug: string
    }
}

export async function GET(request: Request,  { params }: Params) {
    const { slug: articleId } = params

    const comments = getCommentsfromDummy(+articleId)
        
    if(!comments) return NextResponse.json(null, { status: 404})

    return NextResponse.json({ comments })
}