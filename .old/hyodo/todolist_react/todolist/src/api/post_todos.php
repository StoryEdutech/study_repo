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
$task = $_POST['task'];
$isCompleted = $_POST['isCompleted'];

$sql = 'insert into todoList (id, task, isCompleted) values (:id, :task, :isCompleted) ON DUPLICATE KEY UPDATE task = :task, isCompleted = :isCompleted;';
$stmt = $dbh->prepare($sql);
$params = array(':id' => $id, ':task' => $task, ':isCompleted' => $isCompleted);
$stmt->execute($params);
