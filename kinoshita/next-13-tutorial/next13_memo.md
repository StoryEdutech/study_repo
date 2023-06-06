## next13のドキュメント
- Using App Routerにすれば、Next13の[公式ドキュメント](https://nextjs.org/docs)を見れる

### Layout(RootLayout)
-  _app.tsx, _document.tsxがなくなったぽいので、html,bodyはここで書く
- Meatdataを自分で定義してexportすれば、nextが勝手に読み込んでくれる（Headコンポーネントを使わなくてもできる）
- これまで、layoutを使うときは、コンポーネントをlayoutタグでラップしていたが、やらなくてもよくなった

### 動的パラメータ
- getStaticPathsがなくなった
- 特に何も定義しなくても、コンポーネント内でparamsというキーで、パラメータを取得できている