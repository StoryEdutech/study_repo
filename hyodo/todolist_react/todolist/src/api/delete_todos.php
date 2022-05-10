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

$id = $_POST['id'];

$sql = 'delete from todoList where id= :id;';
$stmt = $dbh->prepare($sql);
$params = array(':id' => $id);
$stmt->execute($params);
