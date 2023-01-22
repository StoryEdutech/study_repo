<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use StoryEdutech\SimpleCrud\Traits\CrudControllerWithChildTrait;
use Illuminate\Http\Request;

class CommentController extends Controller
{
  use CrudControllerWithChildTrait {
    CrudControllerWithChildTrait::index as crud_index;
  }
  public $paginate=4;
  public static $resource="comment";
  public function __construct(){
    // $this->authorizeResource(Comment::class);

  }
  public function reply_to($id){
    $comment=Comment::find($id);
    if(!empty($comment)){
      return view('comment.add_update',["replying_to"=>$comment]);
    }else{
      session()->flash('edit_fb',"返信しているコメントがもう存在しません");
      return redirect("/comment/");
    }

  }
  public static $is_api=true;
  public function handle_show_data($return){
    $nesting_replies=$this->nested_self_relation_closure("replies",[function($builder){return $builder->with('user')->orderBy('created_at','desc');}]);
    $comment=$return["comment"];
    $comment->replies=$nesting_replies($comment->replies())->get();
    $comment->loadCount('replies');
    return $return;
  }
  public function index($uid=false){
    $nesting_replies=$this->nested_self_relation_closure("replies",[function($builder){return $builder->with('user')->orderBy('created_at','desc');}]);
    return $this->crud_index($uid,[
      function($builder) use ($nesting_replies){
      return $nesting_replies($builder->where('reply_to',0));
    }]);
  }

}
