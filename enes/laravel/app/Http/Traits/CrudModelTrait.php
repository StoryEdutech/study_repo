<?php
namespace App\Http\Traits;

trait CrudModelTrait{

  public function init_settings($reinit=false){
    if($this->_settings_already_init??$reinit){return;}
    $this->_model=static::$model??"\App\Models\\".str_replace("_","",ucwords(static::$resource,"_"));
    $this->_settings_already_init=true;
  }

}
