import Layout from "@/components/layout"
import Head from 'next/head';
import { getAllPostIds, getPostData } from "@/lib/post"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next"
import Date from '../../components/date'
import utilStyles from '@/styles/utils.module.css'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false,
    }
}
                                    
export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string}>) {
    if(!params || !params?.id){
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

/**
 * [id].tsx params
 * ファイル名に使うパラメータ(ここではid)はgetStaticPathsで返すpathsの
 * 中に同じキー名でないとだめ
 * params: {
 *   id: string  <<==ここもid
 * }
 * 
 * pathsはparamsをもつオブジェクトの配列じゃないとだめ
 * 
 * getServerSidePropsとgetStaticPathsは同時には使えない
 * 
 * getStaticPathsはgetStaticPropsと一緒に使う
 * 
 * TODO
 * コンテキスト(引数にとるもの)をもうちょっと勉強する
 * ISRとは
 */


/**
 * fallbackの挙動
 * { fallback: true } のとき
 * ビルド時にHTMLを生成していないページにリクエストが
 * 来たときは、
 * 外部データがない状態で一時的なHTMLをクライアントに返す（＝フォールバック）
 * 同時にサーバでリクエストされたページをビルドし、同じパスへの２回目以降の
 * リクエストは、レンダリングされた他のページと同様に生成されたページを提供します。
 * 初回＝＞フォールバックコンテンツ
 * ２回目以降＝＞ 初回リクエスト時にサーバ側でビルドし、キャッシュしたHTML
 * 
 * { fallback: false } のとき
 * ビルド時にHTMLを生成していないページにリクエストが
 * 来たときは、４０４エラーになる
 * フォールバックコンテンツを使わないときにfalseを使う
 * 
 * { fallback: blocking } のとき  
 * ビルド時にHTMLを生成していないページにリクエストが
 * 来たときは、完全なHTMLが生成されるまでページを返さない。つまり、
 * 初回はSSRと同じ挙動になる。次回以降はキャッシュされたHTMLを返す
 * 
 */

export default Post
