<?php

namespace App\Policies;

use StoryEdutech\ChildAuth\Models\BaseChildUser as ChildUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class BasicPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function before(ChildUser $user){
      // if(($user->role??'none')=="admin"){
      //   return true;
      // }
      return true;
    }
    /**
     * Determine whether the user can view any models.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(ChildUser $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @param  \App\Models\*  $resource
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(ChildUser $user, $resource)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(ChildUser $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @param  \App\Models\*  $resource
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(ChildUser $user, $resource)
    {
        return $user->uid==$resource->uid;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @param  \App\Models\*  $resource
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(ChildUser $user, $resource)
    {
      return $user->uid==$resource->uid;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @param  \App\Models\*  $resource
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(ChildUser $user, $resource)
    {
      return $user->uid==$resource->uid;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \StoryEdutech\ChildAuth\Models\ChildUser  $user
     * @param  \App\Models\*  $resource
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(ChildUser $user, $resource)
    {
      return $user->uid==$resource->uid;
    }

    public function list_allowed($resource,$overriden_user=false){
      //何が使えて、何が使えないかをとるための特殊メソッド（UIの整理で使う）。継承したクラスで使われる前提
			// 今のクラスのメソッドをとる
      if(empty($overriden_user)){
        $user=ChildUser::current();
      }

			$class_name=static::class;
			$a=new \ReflectionClass($class_name);
			$methods=array_map(function($one){return $one->name;},array_filter($a->getMethods(),function($one) use ($class_name){return $one->class==$class_name;}));

			// 親=BasicPolicyのメソッドをとる
			$class_name=self::class;
			$a=new \ReflectionClass($class_name);
			$parent_methods=array_map(function($one){return $one->name;},array_filter($a->getMethods(),function($one) use ($class_name){return $one->class==$class_name;}));

			$can_use_actions=[];

			foreach ($methods as $method){
        if(!in_array($method,['__construct','list_allowed'])){
  				if($this->$method($user,$resource)){
  					$can_use_actions[]=$method;
  				}
        }
      }

			foreach($parent_methods as $method){
				// すでに確認されたものを省く
        if(!in_array($method,['__construct','list_allowed'])){
				if(!in_array($method,$methods)){
					if($this->$method($user,$resource)){
						$can_use_actions[]=$method;
          }
        }
        }
      }
      if($resource->id === null){
        $allow_without_model_action_only_of_self=$this::$allow_without_model_action_only_of_self??[];
        if(! $resource->of_self ){
          $can_use_actions=array_values(array_diff($can_use_actions,$allow_without_model_action_only_of_self));
        }
      }
      return $can_use_actions;
    }

}
