import { NextResponse } from 'next/server'
import type { Article } from '@/app/types'

const sampleArticles: Article[] = [
    {
        id: 1,
        title: "タイトル1",
        content: "ここが本文",
        slug: "slug_1",
        createdAt: new Date(),
        updatedAt: null
    },
    {
        id: 2,
        title: "タイトル22333",
        content: "ここが本文",
        slug: "slug_2",
        createdAt: new Date(),
        updatedAt: null
    },
]

export async function GET() {
    return NextResponse.json({ articles: sampleArticles})
}