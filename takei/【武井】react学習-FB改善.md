### スタイルについて

- styled-componentsは積極的に使ってよい。スタイルの共通化なら、[共通のstyled-components](https://styled-components.com/docs/basics#extending-styles)
を作って、拡張する。
 - CSSファイルに.buttonなど、ニッチなスタイルを過剰に入れるということが防げるため

### 変数の扱い

- 変数名が被った際、修正したほうが良いだろう方において、別名で宣言するという方法が存在する
  - `const { firstName: name, lastName } = person;`にて、firstNameと言う変数名をname変数に変更している
  - [参考記事](https://flaviocopes.com/how-to-rename-object-destructuring/)
