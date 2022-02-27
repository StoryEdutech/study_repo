<?php

namespace App\Policies;
// not a policy but it adds getCanUseActionsAttribute method
trait CanUseActionsListing{
  public function getCanUseActionsAttribute(){
    return $this->can_use_actions();
  }
  public function can_use_actions() {
    $this->setAttribute('can_use_actions',$this->policy()->list_allowed($this));
    return $this->attributes['can_use_actions'];
  }
  public static function can_use_actions_without_model($of_self=false){
      $obj=new static;
      if($of_self){
        $obj->of_self=true;
      }
      return $obj->policy()->list_allowed($obj);
  }

}
