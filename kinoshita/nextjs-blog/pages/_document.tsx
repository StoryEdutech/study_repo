import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/**
 * htmlタグ、bodyタグに属性を追加できる
 * 
 * Headはnext/headのやつじゃなくて、next/documentのやつ
 */