<?php
namespace App\Http\Traits;
use App\Models\ChildUser;
use Illuminate\Support\Facades\Session;
use App\Http\Traits\CrudModelTrait;

trait CrudModelWithChildTrait {
  use CrudModelTrait;
  public function user(){
    return $this->belongsTo(ChildUser::class,'uid')->withDefault(["name"=>__('無名'),"uid"=>0]);
  }
  public static function of_current(){
    return static::of_user(session('child_id'));
  }
  public static function of_user($uid){
    return static::where('uid',$uid);
  }
  public function is_of_self($fallback=false){
    return static::resource_of_current($this->uid,$fallback);
  }
  public static function resource_of_current($uid=false,$fallback=false){
    if(!$uid){return $fallback;}
    return $uid==session('child_id');
  }

}
