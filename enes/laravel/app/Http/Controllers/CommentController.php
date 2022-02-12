<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return view('comment.list',["comments"=>Comment::of_current()->paginate(10)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('comment.add_update',[]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      return $this->upsert($request,new Comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
      return view('comment.add_update',["comment"=>$comment]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        return $this->upsert($request,$comment);
    }

    public function upsert(Request $request, Comment $comment)
    {
      $is_new=true;
      if($comment->id!==null){$is_new=false;}
      $comment->content=$request->content;
      $comment->uid=session('child_id');
      $comment->reply_to=$request->reply_to??0;
      $comment->save();
      session()->flash('edit_fb',$is_new?"追加しました":"編集しました");
      return redirect("/comments/{$comment->id}/edit");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
     // WARNING: soft deleteはいいかも、、、 https://laravel.com/docs/8.x/eloquent#soft-deleting
    public function destroy(Comment $comment)
    {
        $comment->delete();
        session()->flash('delete_fb',"削除しました");
        return redirect("/comments/");
    }
    public function confirm_delete($id){
      $comment=Comment::find($id);
      if(!empty($comment)){
        return view("comment.confirm_delete",["comment"=>$comment]);
      }else{
        return view("comment.confirm_delete",["already_deleted"=>true]);
      }
    }


}
