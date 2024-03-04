<?php

// 現在の年月
$y = date('Y');
$m = date('n');

// 月末日
$last_day = date('j', mktime(0, 0, 0, $m + 1, 0, $y));

$calendar = array();
$j = 0;

// 月末日まで繰り返し
for ($i = 1; $i < $last_day + 1; $i++) {

    // 曜日
    $week = date('w', mktime(0, 0, 0, $m, $i, $y));

    // 1日の場合のみの処理
    if ($i == 1) {

        // 一日の曜日までを繰り返し
        for ($s = 1; $s <= $week; $s++) {

            // 前半に空文字をセット
            $calendar[$j]['day'] = '';
            $j++;

        }

    }

    // 配列に日付を入れていく
    $calendar[$j]['day'] = $i;
    $j++;

    // 月末日の場合のみの処理
    if ($i == $last_day) {

        // 月末日から残り
        for ($e = 1; $e <= 6 - $week; $e++) {

            // 後半に空文字をセット
            $calendar[$j]['day'] = '';
            $j++;

        }

    }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>カレンダー</title>
</head>
<body>
<h1><?php echo $y; ?>年<?php echo $m; ?>月のカレンダー</h1>
<br>
<br>
<table>
    <tr>
        <th>日</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
        <th>土</th>
    </tr>

    <tr>
    <?php $cnt = 0; ?>
    <?php foreach ($calendar as $key => $value): ?>

        <td>
        <?php $cnt++; ?>
        <?php echo $value['day']; ?>
        </td>

    <?php if ($cnt == 7): ?>
    </tr>
    <tr>
    <?php $cnt = 0; ?>
    <?php endif; ?>

    <?php endforeach; ?>
    </tr>
</table>
</body>
</html>
