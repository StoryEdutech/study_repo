<?php
namespace App\Http\Traits;
use App\Models\ChildUser;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use App\Http\Traits\CrudControllerTrait;

trait CrudControllerWithChildTrait {
  use CrudControllerTrait {
      CrudControllerTrait::index as parent_index;
  }
  public function init_resource_defaults(){
    $this->_defaults=[
      "uid"=>session('child_id')
    ];
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index($uid=false,$closures=false)
  {
    $this->uid_stock=$uid;
    $closures_copy=$closures?$closures:[];
    array_unshift($closures_copy,function($resource_collection_builder) use ($uid){
      return $uid?$resource_collection_builder::of_user($uid):$resource_collection_builder::of_current();
    });
    return $this->parent_index($closures_copy);
  }
  public function handle_index_data($return){
    $return["of_self"]=$this->_model::resource_of_current($this->uid_stock,true);
    return $return;
  }

}
