## 基本

### CSR,SSR,SG,ISRについて

#### 前提
- CSR,SSR,SG,ISR全ての手法でデータを扱うことができる

#### 内容

- コベツバでは主にISR,CSRを採用する
  - SSGは、キャッシュ期限がいつ切れるか分からない（設定したら別だけど）ことがあるため、ISRを採用
  - CSRは、秒/分単位で更新のかかるデータを扱うため、採用する

- ISR,CSRどちらを利用しますか？
  - 判断方法は、「このデータ、どの頻度で変わりますか？」
    - ユーザー/セッション関連のデータなら、秒/分単位。キャッシュ消ししまくるのは良くない。CSRで取る
    - ユーザー/セッション関連じゃないなら、運営者/CRONの何かのアクションない限り変わらない＝一日から数ヶ月単位。ISRで生成する/更新していく。

また、ISRとCSRを合体[^1]出来るので、ISRでユーザーデータ以外の整理をして、CSRでユーザーのデータで生成されるUIのみを作る、ということが綺麗です。
[^1]:合体というのがISRのコンポーネントとCSRのコンポーネントということ

appルーターでは、ISR/SSG/SSR/CSRという言葉をほぼ使っていない。
理由として、
- SSGがデフォルト
- パラメータ/revalidation関数ですぐISRに移動出来る
- SSRも同じくパラメーターで設定することになる
- useSWRなどを使ったらCSRと認識される
というふうに設定ができるため、next公式ドキュメントでもISR/SSG/SSR/CSRという言葉をいっていない。

そのため、
- キャッシュしない（＝SSR）
- キャッシュ期間を短くする/Revalidate入れる（＝ISR）
- ブラウザーで取る（＝CSR）

と認識するのが良い

### ISRを実現するためには？
- ISRを実現するため、AWS Amplifyとかいろんな手法があるみたい。奥が深そうなので、一旦保留。
 
## 作成していて気づいたこと

- layout.tsxにhtmlタグやbodyタグの記載をする
- [〇〇]のpage.tsxにはパラメータを受け取るため、paramsが必ず入っているだろう

- Server Componentで、useStateやuseEffectを利用できない
  - SSRでは、サーバーが静的htmlデータを返しているのみなので、状態をクライアントがもっていないため

- Next.js でデータフェッチングを行うにはサーバーサイドで行うことが一般的？
  - コベツバもasync/await、Fetch APIを利用して取得する
    - Fetch APIでは、HTTPステータスコードが200番台でない場合でもエラーとして扱われない。そのためステータスコードを確認し、エラーハンドリングを行う必要がある。
- error.tsx は必ず Client Component として扱われます。なぜ？
- 依存関係のない複数の API を呼び出す場合は処理が並列になるように Promise.all を使うことが推奨されます。

### コンポーネントの切り出し
小さすぎるとかえって、可読性を下げることになる
大きくなってきた(1ファイル50行以上)のものは、コンポーネント化して可読性を上げる
https://nextjs.org/docs/getting-started/react-essentials

### フォルダ構造について
#### プライベートフォルダー
- 「_{フォルダ名}」というフォルダにすることで、ルーティングから除外ができる
  - nextの[routing規則はこちら](https://nextjs.org/docs/getting-started/project-structure#dynamic-routes)
  - 目的は、ルーティングに関係ないものを明記しておくことで、フォルダが見やすくなるため
  - [laravel移行のフロントエンドの仕様でも使っている](https://github.com/StoryEdutech/LaravelDiscussion/blob/master/Architecture/Frontend/appFolderStructure.md#lib%E3%81%A8components%E3%81%A8hooks%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)

### reactとの比較(楽になったな‐というところ)
- react routerでやっていたことがフォルダ構造で出来ること
- reactだとローディング中のフラグだったりを作って、制御していた
- データがあるかないかでの、読み込みページの記載がなくなった(はず)
- フェッチ作業時に、useEffectで[]で初回レンダリングの際に対応していたのが書かずに済むこと

### Chakura UIの導入で学んだこと
- Server Component と Client Component かをコンポーネントごとに使い分ける必要がある
  - 使い分ける判断として、[公式ドキュメントが出している判断方法](https://nextjs.org/docs/getting-started/react-essentials#when-to-use-server-and-client-components)を参照する良い
    - クライアントが動作をおこなう場合は、クライアントコンポーネント。なければ、サーバーコンポーネントというイメージというわけではないよ
      - ClientComponentでも、SSG/ISR/SSR出来るため。useStateなどのものがあるかないかで判断するべき。
  - Client Component として扱うためには、`use client` を宣言したファイルでラップする
  - Server Componentで、useStateやuseEffectを利用できない
    - SSR,SSG,ISRのコンポーネントではhtmlデータを持っていて、状態をもっていないため

- コベツバで、chakra-uiを利用するとなった際は、app/Provider.tsxと同じ対応をする。他chakra-uiを利用する際は、app/common/components/index.tsxみたいな感じで。
  - Chakura UIは、TailwindCSSのコンポーネントになったバージョンのイメージだった。
  - Chakura UIが提供しているfigmaのパーツがあり、それを利用すれば、[Chakura UIのコードが作成できる](https://chakra-ui.com/figma/plugin)(コベツバでは使わない気もするが)
- ルート直下にcomponentsフォルダを作成して、横断で使われるchakra-uiやstyled-componentsはroot直下に入れるべき
  - 「@/〇〇」という形で引用しやすいため
  - [定義](https://github.com/enes1004/laravel_with_next/blob/master/nextjs_inside_laravel/components/styled-components/index.ts)
  - [使用](https://github.com/enes1004/laravel_with_next/blob/master/nextjs_inside_laravel/app/_components/MyDiv.js)

### 記事の一覧を表示するで学んだこと

- 本実装ではpagesは使用禁止のため、pages/apiも使用禁止。
  - APIが完全にLaravelにするため、NextJSでAPI書くことがない
  - [参照1](https://github.com/StoryEdutech/kobetsuba_frontend/tree/master/pages)
  - [参照2](https://github.com/StoryEdutech/kobetsuba_frontend/tree/master/pages)
  
### 静的レンダリング
- 静的レンダリングの使用でビルド時にSC、CCの両方をサーバー上で事前にレンダリングできる。
- 作業結果はキャッシュされ再利用される
- 再検証(revalidate)が可能



### データフェッチ
- Server Components内でデータフェッチを推奨
  - Client Components内でする場合は、useSWRを推奨。[将来的にはReactのフックを使用してクライアントコンポーネントのデータをフェッチできるようになる予定](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-on-the-server)
- データを並行してフェッチして時間短縮
  - →同じComponentで二つのAPIを叩く時の話（1 Component 2 API）
  - awaitを無理にfetch直後にしなくていいよ
  - 必要になった時、必要なものだけawaitを入れてよ
  - awaitを出来るだけ後にしてくれたら並行フェッチしてあげるよ
- データの利用箇所でデータをフェッチ
  - 別々のComponent/関数で同じAPIを叩く時の話 (2 Component 1 API )
  - リクエストの自動重複排除がされる(A,B,B,C,D,A,BとリクエストあってもA,B,C,Dとなる) [資料はこちら](https://nextjs.org/docs/app/building-your-application/data-fetching#automatic-fetch-request-deduping) ただし、POSTリクエストは自動的に重複排除されない。
- Loading UI, Streaming, Suspenseを使用してページを段階的にレンダリングし、コンテンツが読み込み中に結果を示す。


#### 並列にデータフェッチをするためには？
サーバーコンポーネントを呼び出す前にフェッチを開始することで、同時に開始できる。

#### 気づいたこと
- データを並行してフェッチして時間短縮
- データの利用箇所でデータをフェッチ

矛盾しているようなきが、、？データの利用箇所でフェッチするなら、並列ではなくなるのでは。
[参考](https://zenn.dev/1031take/articles/e9234890d0c6d3)
[データの取得](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#data-fetching-patterns)


### error.tsxやloading.tsx,not-found.tsxについて
#### error.tsx
- reactの[エラーバウンダリー](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)を採用している
#### loading.tsx
- 読み込みが完了しているかのstateを用意して、条件式を書かなくて済んだのがでかい([reactのSuspenseを利用している](https://react.dev/reference/react/Suspense))