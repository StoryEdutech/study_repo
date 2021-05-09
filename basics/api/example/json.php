<?php
// 一般的ではないが、JSONがAPI以外でも使えます。そのための例です。

$setting=["a"=>1,"b"=>2];

 ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<p>今の設定は</p>
<p>a: <span id="a"></span></p>
<p>b: <span id="b"></span></p>
<p>a*b: <span id="prod"></span></p>


<script>
var setting=JSON.parse('<?= json_encode($setting) ?>');
$("#a").html(setting.a);
$("#b").html(setting.b);
$("#prod").html(setting.b*setting.a);
</script>
