<?php

header('Access-Control-Allow-Origin: *');

$dsn = 'mysql:dbname=todolist;host=hyoudounaokinoMacBook-Air.local';
$user = 'root';
$password = '';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    exit();
}

$sql=$dbh->prepare("SELECT * FROM todoList;");
$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
