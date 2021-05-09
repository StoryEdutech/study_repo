<?php
$out=[
  "fb"=>"not_ok", // not_okで初期化
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
