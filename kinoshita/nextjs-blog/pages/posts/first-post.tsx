import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { getSortedPostsData } from '@/lib/post'
import { InferGetStaticPropsType } from 'next'
import Layout from "@/components/layout";
import fetch from 'node-fetch'


type Props = InferGetStaticPropsType<typeof getStaticProps>

const FirstPost = ({ data }: Props) => {
    console.log(data)

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}

export async function getStaticProps() {
    // fetchはnode-fetchのfetchじゃないとだめ
    // 普通のfetch(web api)はクライアントサイドでしか動かない
    // getStaticPropsはサーバーで実行される
    const res = await fetch('http://localhost:5000')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}

export default FirstPost
