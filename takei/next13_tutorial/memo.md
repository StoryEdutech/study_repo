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