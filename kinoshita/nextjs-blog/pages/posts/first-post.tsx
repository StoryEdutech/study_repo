import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { getSortedPostsData } from '@/lib/post'
import { InferGetStaticPropsType } from 'next'
import Layout from "@/components/layout";

type Props = InferGetStaticPropsType<typeof getStaticProps>

const FirstPost = ({ allPostsData }: Props) => {
    console.log(allPostsData)

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
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default FirstPost
