
<script>
  window.nickname_and_child_info={"":{}};
</script>
<div id="app" data-props='{"for_uid":5}'></div>

<?php
$route="/scripts";
$return=true;
$echo=true;


$kernel=false;
$app=false;
$response=false;
$request=false;
require 'vendor/autoload.php';
$app = require 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$data["allowed"]=true;
$response = $kernel->handle(
    $request = Illuminate\Http\Request::create($route,'GET',$data)
);

if($echo??false){
  $response->send();
}
if(empty($do_not_terminate)){
  $kernel->terminate($request, $response);
}
if($return??false){
  return $response->getContent();
}
