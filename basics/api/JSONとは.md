#JSONとは#

APIでよく使われるデータ形式です。

実際にサーバー（API作成者側）とフロント（使用者側）でデータの受け渡しが、どの形式でもいいです。

例えば、

フロントから送られるデータ（Request）

username:aaaa#pw:123123

返事としてサーバーから送れれるデータ（Response）

user_id:123#fb:ok

という形式でもOKですが、この場合、Requestを送る前とResponseを受け取った時にデータ⇔文字列が発生して、それに合わせた整理コードを作る必要性があります。

形式が変われば、整理コードも変える必要性がある。それで毎回形式を確認して、整理コードを編集する必要性が出てくる。

じゃ、どうすればいい？

ここでの解答が「共通言語を作ろう」となります。その共通言語がJSONです。

JSONにおいては、整理コードがデフォルトでサーバー側の言語にもフロント側の言語にも存在して、すぐ使えるし、標準となっているため、ぐるぐる変わらない。

#JSON使用例#

※実際のものがexample/{login.php/login.js}に入れてます。

Javascript（login.js）

```
var post={username:"aaaa",pw:"123123"}; // パスワードを見られるようにするのはセキュリティ的によくないが、例なので、一旦無視
var api_url="login.php";

//JSON形式なら勝手に文字列に変換されます。

$.post(api_url,post,function(res){
  //resはサーバーからきた返事で「文字列形式のJSON」です。なので、それを「オブジェクトとしてのJSON」に変える必要せいがある。
  //それをするのはJSON.parseというものです。
  // res → '{"user_id":123,"fb":"ok"}'
  var result=JSON.parse(res);
  // result → {user_id:123,fb:"ok"} (まわりに「'」がないことに注意)
  if(result.fb=="ok"){
    //問題ないとき処理（リダイレクトしたり、「ログインできました」とモーダルを表示させたり）
  }else{
    //問題あったとき処理（「ログイン情報が一致してません」などをユーザーに教えたり）

  }

  });

```

php （login.php）

```
<?php
$out=[
  "fb"=>"not_ok" // not_okで初期化
  "reason"=>"no_param" // 情報が送られずに呼ばれた時は条件を満たしてないから、エラーを出す。これで内容を述べる
];
//空じゃないか確認
if(!empty($_POST["username"]) && !emptY($_POST["pw"])){
  $username=$_POST["username"];
  $pw=$_POST["pw"];
  //ここにデータベースの情報確認を。今はダミーを作っておく
  if($username=="aaaa" && $pw=="123123"){
    $user_id=123;
  }

  //情報が帰ってきたらそれに合わせて返事を変える
  if(!empty($user_id)){
    //ログイン出来た
    $out["fb"]="ok";
    $out["user_id"]=$user_id;
  }else{
    //ログイン出来なかった。（※fbがまだnot_okだから変える必要性がない）
    $out["reason"]="login_error";
  }

}

//返事を出す。配列をJSONの文字に変換。PHPに初期からあるjson_encodeを使用。

$out_str=json_encode($out);

// ログイン出来た場合、
// $out → ["fb"=>"ok","user_id"=>123]
// $out_str → '{"fb"=>"ok","user_id":123}' ←上のJavascriptコードのresと同じ。

//出力させる。
echo $out_str;

```
