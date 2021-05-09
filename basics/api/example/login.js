function handle_post(){

// inputから情報を取る。
var post={};
post.username=$("#username").val();
post.pw=$("#pw").val();
// var post={username:"aaaa",pw:"123123"}; // パスワードを見られるようにするのはセキュリティ的によくないが、例なので、一旦無視
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
    window.alert("ログイン出来ました。UIDが："+result.user_id);
  }else{
    //問題あったとき処理（「ログイン情報が一致してません」などをユーザーに教えたり）
    var reason_japanese="不明";
    if(result.reason=="no_param"){
      reason_japanese="情報が送られてない";
    }
    if(result.reason=="login_error"){
      reason_japanese="ログイン情報が一致してません";
    }
    window.alert("ログイン出来ませんでした。理由："+reason_japanese);

  }

  });
}
