import { NextPage } from "next"

interface Props { 
    params: {
        slug: string 
    }
}

const Article: NextPage<Props> = ({ params }) => {
    return (
        <div>
            <h1>記事の詳細</h1>
            <p>記事のスラッグ: {params.slug}</p>
        </div>
    )
}

export default Article
