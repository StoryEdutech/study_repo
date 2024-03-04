<?php
session_start();

if(!isset($_SESSION["user_name"])) {
	$no_login_url = "index.php";
	header("Location: {$no_login_url}");
	exit;
}
?>


<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>お問い合わせフォーム</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div><h1>Company Name</h1></div>
<div><h2>お問い合わせ</h2> </div>
<div>
        <div>
		<h1>お問い合わせ 送信完了</h1>
		<p>
		お問い合わせありがとうございました。<br>
		内容を確認後、回答致します。
		</p>
		<a href="input.php">
			<button type="button">お問い合わせに戻る</button>
		</a>
	</div>
</div>
</body>
</html>
