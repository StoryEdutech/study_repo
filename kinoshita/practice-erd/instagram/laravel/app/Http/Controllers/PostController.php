<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\String_;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $post->load([
            'comments' => [ 'likes' ], //Postコメントとそれぞれのコメントのいいね
            'likes', // Postのいいね
            'tags' // Postのタグ
        ]);

        return response()->json(new PostResource($post));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'content' => ['required', 'max:2200'],
        ]);

        $post->content = $validated['content'];

        $post->save();

        return response()->json(new PostResource($post));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
       $post->delete();

        return response(null, 200);
    }
}
