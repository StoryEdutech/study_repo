<?php
use StoryEdutech\SimpleCrud\Route\RouteBundler;

$crud_bindings=[
  "comment"=>[
    "middleware"=>["web","child_auth_api"],

  ]
];
RouteBundler::bindAll($crud_bindings);

require __DIR__.'/comments.php';
