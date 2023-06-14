## next13のドキュメント
- Using App Routerにすれば、Next13の[公式ドキュメント](https://nextjs.org/docs)を見れる

### サーバーコンポーネント
- すべてのコンポーネントはデフォルトでサーバーコンポーネントになっている
- jsのバンドルサイズが小さくなる（クライアント側では、jsを実行しないという考え方があるため）
    - hooks, onClickとかon●●系が使えない
    - async/awaitをコンポーネントに使える
- クライアントコンポーネント（親）のなかで、サーバーコンポーネントとして定義したもの（子）が呼び出されていた場合は、それはクライアントコンポーネントとして扱われる！
- サーバーコンポーネント（親）の中で、クライアントコンポーネント（子）を呼び出した場合は、クライアントコンポーネントの分のjsファイルはクライアントに渡すことになる (多分このパターンがほとんどになる)
- 使うとき
    - データを取得する
    - サーバーへの依存が大きい時（リアルタイムに更新するページとか）
    - 機密情報をサーバーに保存するとき
    - loadshとか重たいパッケージを使うとき、（クライアントコンポーネントで使うとすると、jsのサイズがデカくなりすぎる。が、サーバーコンポーネントで実行すれば、クライアントにjsを渡さずにすむ）

### クライアントコンポーネント
- "use client"を付けると、クライアントコンポーネントになる
- インポートされた他のすべてのモジュール (子コンポーネントを含む) はクライアント バンドルの一部とみなされます。(公式ドキュメントより)
- クライアント コンポーネント モジュール グラフ内のコンポーネントは主にクライアント上でレンダリングされますが、Next.js を使用すると、サーバー上で事前レンダリングしてクライアント上でハイドレートすることもできます。(公式ドキュメントより)
    - 親コンポーネントがサーバーコンポーネントだったら、サーバー上で事前レンダリングしてクライアント上でハイドレートするということ
- 使うとき
    - ボタンとか、検索バーとかインタラクティブに動くもの(onClick, onChangeとかを使うやつ)
    - stateとかライフサイクルに影響するもの（useEffectとかuseReducerとかを使うとき）
    - ブラウザ専用のapiを使うとき(windowとか)


### Nextjsのバンドルの仕様
- インポートしたパッケージは、コンポーネント内で使用している分しかバンドルしないようになっている

### レンダリング
- レンダリングは、「データ取得」と「動的関数の有無」に依存する
- [ドキュメントの表](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#dynamic-rendering)
#### 静的レンダリング(static)
- **ビルド時**に**ServerComponent, ClientComponent**の両方をサーバー上で事前にレンダリングできる。

#### 動的レンダリング(dynamic)
- **リクエスト時**に**ServerComponent, ClientComponent**の両方をサーバー上で事前にレンダリングできる。

### 動的関数
- cookies(), headers(), useSearchParams()などがある
- 使うと動的なレンダリングになる
- useSearchParams()を使うときは、使ってるコンポーネントを必ずSuspenseでラップする
    - [公式ドキュメント](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#dynamic-functions)でもSuspenseでラップすように書いてある
    - 挙動としては、Suspenseがあるところを探して、その部分までは、ClientComponentにしようとする
    - なので、Suspenseでラップしていなかったら、（境界線がわからないので）ページ全体がクライアントサイドレンダリングになってしまう
    - たとえ、SeverComponent(親)のなかで、useSearchParams()を使ったClientComponent(子)で使っていたとしても、Suspenseで子コンポーネントをラップしていなかったら、親コンポーネントごとクライアントサイドレンダリングになってしまう


### nextjs13でのfetch()
- 元々のfetchを拡張してあり、キャッシュや再検証(revalidate)の設定をできる
- クライアントサイドでのデータ取得においては、useSWRが推奨されている
- クライアントサイドのfetchは拡張しない半面、useSWRにメモ化を入れている
- https://zenn.dev/1031take/articles/e9234890d0c6d3

### Suspense
- Promiseを返すコンポーネント(Promise<JSX.Element>)にて、Promiseが未解決のときに、別のUI（fallback）を表示させる仕組み
- Suspenseでラップされた部分の外側だけがレンダリングされているなら、その外側の部分はクライアントサイドに渡される(Suspense内はfallback)


#### cahceのオプション
##### no-store
##### no-cache
##### reload
##### only-if-cahsed
##### default
##### force-cache

### error.tsx
- ErrorBoundaryを自動で生成する（**自分で設定しなくておk**）
- 自分でBoundaryを設定しなくても、勝手にpage.tsx内でエラーが起こったら、page.tsx内でエラーをキャッチしてくれるイメージ

### api routeでステータスを返す
- NextResponse.json()の第２引数に{ status: 400 }とかを入れる
- https://github.com/vercel/next.js/discussions/48397

### notFound()
- notFound()を呼び出せば、勝手にnot-found.tsxを表示してくる

https://nextjs.org/docs/getting-started/react-essentials