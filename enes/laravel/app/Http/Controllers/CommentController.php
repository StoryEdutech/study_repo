<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Traits\CrudControllerWithChildTrait;
use Illuminate\Http\Request;

class CommentController extends Controller
{
  use CrudControllerWithChildTrait {
    CrudControllerWithChildTrait::index as crud_index;
  }
  // public $paginate=4;
  public static $resource="comment";
  public function reply_to($id){
    $comment=Comment::find($id);
    if(!empty($comment)){
      return view('comment.add_update',["replying_to"=>$comment]);
    }else{
      session()->flash('edit_fb',"返信しているコメントがもう存在しません");
      return redirect("/comment/");
    }

  }
  public function index($uid=false){
    return $this->crud_index($uid,[
      function($builder){
      return $builder->where('reply_to',0);
    }]);
  }


}
