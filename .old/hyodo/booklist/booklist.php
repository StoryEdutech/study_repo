<?php
    // MySQLサーバ接続に必要な値を変数に代入
    $username = 'naoki';
    $password = '1234';

    // PDO のインスタンスを生成して、MySQLサーバに接続
    $database = new PDO('mysql:host=localhost;dbname=booklist;charset=UTF8;', $username, $password);

    // フォームから書籍タイトルが送信されていればデータベースに保存する
    if (array_key_exists('book_title', $_POST)) {
        // 実行するSQLを作成
        $sql = 'INSERT INTO books (book_title) VALUES(:book_title)';
        // ユーザ入力に依存するSQLを実行するので、セキュリティ対策をする
        $statement = $database->prepare($sql);
        // ユーザ入力データ($_POST['book_title'])をVALUES(?)の?の部分に代入する
        $statement->bindParam(':book_title', $_POST['book_title']);
        // SQL文を実行する
        $statement->execute();
        // ステートメントを破棄する
        $statement = null;
    }

    // 実行するSQLを作成
    $sql = 'SELECT * FROM books ORDER BY created_at DESC';
    // SQLを実行する
    $statement = $database->query($sql);
    // 結果レコード（ステートメントオブジェクト）を配列に変換する
    $records = $statement->fetchAll();

    // ステートメントを破棄する
    $statement = null;
    // MySQLを使った処理が終わると、接続は不要なので切断する
    $database = null;
?>
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>Booklist</title>    </head>
    <body>
        <div class="container">
            <h1></h1>

            <h2>書籍の登録フォーム</h2>
            <form action="booklist.php" method="POST" class="form-inline">
                <div class="form-group">
                    <input type="text" name="book_title" class="form-control" placeholder="書籍タイトルを入力" required>
                </div>
                <button type="submit" name="submit_add_book" class="btn">登録</button>
            </form>

            <hr />

            <h2>登録された書籍一覧</h2>
            <ul>
<?php
    if ($records) {
        foreach ($records as $record) {
            $book_title = $record['book_title'];
?>
                    <li><?php print htmlspecialchars($book_title, ENT_QUOTES, "UTF-8"); ?></li>
<?php
        }
    }
?>
            </ul>
        </div>

    </body>
</html>
