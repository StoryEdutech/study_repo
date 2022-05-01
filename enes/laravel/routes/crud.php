<?php
use StoryEdutech\SimpleCrud\Route\RouteBundler;

$crud_bindings=[
  "comment"=>[]
];
RouteBundler::bindAll($crud_bindings);

require __DIR__.'/comments.php';
