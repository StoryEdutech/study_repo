<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $logined_user = Auth::user();

        if(!$logined_user) {
            return view('login');
        }

        $user_id = $logined_user['id'];
        $username = $logined_user['name'];
        $users_posts = Auth::user()->posts;

        return view('blog.home', [
            'user_id' => $user_id,
            'username' => $username,
            'users_posts' => $users_posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $logined_user = Auth::user();

        if(!$logined_user) {
            return view('login');
        }

        $user_id = $logined_user['id'];

        $title = $request->input('title');
        $content = $request->input('content');

        DB::beginTransaction();
        try {
            Post::create([
                'user_id' => $user_id,
                'title' => $title,
                'content' => $content
            ]);
    
            DB::commit();
        } catch(\Throwable $e) {
            DB::rollBack();
            abort(500);
        }

        return redirect()->route('blog.home');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
