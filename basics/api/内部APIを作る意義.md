**APIが作成者側と使用者側が違う場合が多いけど、なんで同じ場合もある？**

一言で言うと、「役割分担」です。

サーバー側がサーバー側がやるべきこと（データベースの確認・情報整理・認証）、
フロント側がフロント側がやるべきこと(HTML要素の編集でFBを出すなど)

をやる。お互いの細かい仕組みを分かずとも、自分の役割を果たせる環境を作るべき。

これによって、もしサーバーの仕組みが変わっても、受け取る情報と渡す情報が変わらない限り、フロントを変えずに済む。変わっても、「渡される情報」という媒体で話せるため、サーバーの細かい仕組みを考える必要性まったくない。

逆もしかり。サーバーがフロントが渡された情報どう表示させるかなどを考えなくていい。必要な情報を渡せたら、後を任される。

結果として、内部API（同じ開発者チームでAPI作成者でも使用者でもある状態）が、開発をスムーズにするものです。それはチームでも、一人の脳内の役割分担の設計でも有意義なものです。

※こういう「内部の仕組みを知らずに実装出来る状態を作る＝ブラックボックスとして扱う」ことを「抽象化」と呼ばれて、ベストプラクティスの一つとして扱われてます（主に、オブジェクト指向でよくあります）
