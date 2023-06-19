import { NextResponse } from 'next/server'
import articlesData from '@/dummy-data/articles.data'

export async function GET() {
    return NextResponse.json({ articles: articlesData})
}

export async function POST(req: Request) {

    const { title, content } = await req.json() as { title: string, content: string }

    if(!title || !content) {
        return NextResponse.json(null, {
            status: 400,
            statusText: 'required title and content'
        })
    }

    articlesData.push({
        id: (new Date()).getTime(),
        title: title,
        content: content,
        slug: `slug_${(new Date()).getTime()}`,
        createdAt: String(new Date()),
        updatedAt: null
    })
    return NextResponse.json(null, { status: 201 })
}