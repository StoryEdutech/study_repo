<?php
    sleep(1);
    $request = json_decode(file_get_contents("php://input"), true);
    $value = 0;
    switch ($request['code']) {
        case "1":
            $value = "フロントエンジニア";
            break;
        case "2":
            $value = "CRM";
            break;
        case "3":
            $value = "サーバーサイドエンジニア";
            break;
    }
    $result =[
        "value" => $value,
    ];
    $json = json_encode($result, JSON_UNESCAPED_UNICODE);
    header("Content-Type: application/json; charset=UTF-8");
    echo $json;
    exit;
