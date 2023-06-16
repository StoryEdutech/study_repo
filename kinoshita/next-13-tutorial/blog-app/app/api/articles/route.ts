import { NextResponse } from 'next/server'
import articlesData from '@/dummy-data/articles.data'

export async function GET() {
    return NextResponse.json({ articles: articlesData})
}