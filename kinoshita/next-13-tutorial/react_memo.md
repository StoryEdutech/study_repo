# react memo
reactのFBをこのファイルに蓄積する

## レンダリング
### if return
- 1つのコンポーネント(JSX.Element)で２つ以上のreturnはなるべくしない
  - 非同期関数を実行結果を使うときは、await中に作成されたものがメモ化される可能性があるため


bad
```
if(comments.length === 0) {
        return <p>コメントがありません</p>
    }
    
return (
    <ul>
        {comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
        ))}
    </ul>
)
```
good
```
return (
    <ul>
        {comments.length ?
        comments.map( { id, body } => (
            <li key={ 'comment'+id }>{ body }</li>
        ):<<p>コメントがありません</p>>
        )}
    </ul>
)
```

### key
- mapとかのループを使ったレンダリングのときの、keyは被らないような値にしなければならない
- idに接頭文字を付ける 例：key={`Comment_${id}`}