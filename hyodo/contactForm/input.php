<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>問い合わせフォーム</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div><h2>中学受験コベツバ お問い合わせフォーム</h2></div>
<div>
	<form action="confirm.php" method="post" name="form" onsubmit="return validate()">
		<h1 class="contact-title">内容入力</h1>
		<p>各項目入力後、「確認画面へ」ボタンをクリック下さい。</p>
		<div>
                	<div>
				<label>お名前<span>必須</span></label>
				<input type="text" name="name" placeholder="例）山田太郎" value="" required>
			</div>
			<div>
				<label>ふりがな<span>必須</span></label>
				<input type="text" name="furigana" placeholder="例）やまだたろう" value="" required>
			</div>
			<div>
				<label>メールアドレス<span>必須</span></label>
				<input type="text" name="email" placeholder="例）guest@example.com" value="" required>
			</div>
			<div>
				<label>電話番号<span>必須</span></label>
				<input type="text" name="tel" placeholder="例）0000000000" value="" required>
			</div>
			<div>
				<label>性別<span>必須</span></label>
				<input type="radio" name="sex" value="男性" checked> 男性
				<input type="radio" name="sex" value="女性"> 女性
			</div>
			<div>
				<label>お問い合わせ項目<span>必須</span></label>
				<select name="item">
					<option value="">お問い合わせ項目を選択してください</option>
					<option value="ご質問・お問い合わせ">ご質問・お問い合わせ</option>
					<option value="ご意見・ご感想">ご意見・ご感想</option>
				</select>
			</div>
			<div>
				<label>お問い合わせ内容<span>必須</span></label>
				<textarea name="content" rows="5" placeholder="お問合せ内容を入力" value="" required></textarea>
			</div>
		</div>
		<button type="submit">確認画面へ</button>
	</form>
</div>
</body>
</html>
