import { NextResponse } from 'next/server'
import articlesData from '@/dummy-data/articles.json'
import { Article } from '@/app/types'

const getArticlefromDummy = (slug:string): Article | null => {

    let article = null

    articlesData.forEach(element => {
        if(element.slug === slug){
            article = element
        } 
    })

    return article
} 

interface Params {
    params : {
        slug: string
    }
}

export async function GET(request: Request,  { params }: Params) {
    const { slug } = params

    const article = getArticlefromDummy(slug)

    if(!article) return NextResponse.json(null, { status: 404})

    return NextResponse.json({ article })
}