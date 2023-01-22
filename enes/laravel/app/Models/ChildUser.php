<?php

namespace App\Models;

use StoryEdutech\ChildAuth\Models\BaseChildUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChildUser extends BaseChildUser{
  protected $visible=["uid","nickname","grade","grad_year","place","jyuku","gender","applying_school","sapix_class","other_class",'role','use_status','is_graduated'];
  public static function current_child(){
    return static::current();
  }
  public static function current(){
    $current_by_superclass=parent::current()??false;
    if($current_by_superclass){return $current_by_superclass;}
    return Auth::user();
  }
  public static function is_inner($uid){
    return !empty(DB::table('kadai_kaiketsu_site.inner_child_account')->where('uid',$uid)->first());
  }

}
