<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
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
        // $path = $request->file('image')->store('images'); // expect: images/z0QTddFeKQavGj3h7FtiYyaPdAczN2nuxBORnCZQ.png

        $user_id = User::find(1)->id;
        $validated = $request->validate([
            'content' => ['required', 'max:2200'],
        ]);

        if($request->file('image')){
            $this->validate($request, [
                'image' => [
                    'required',
                    'mimes:jpeg,png',
                ]
            ]);

            $image_url = $request->file('image')->store('public/images'); 
            // expect: public/images/z0QTddFeKQavGj3h7FtiYyaPdAczN2nuxBORnCZQ.png
            // 画像は、storage/app/public/imagesに保存される
            // http://localhost:8000/storage/images/y2vA7eY7TMB2PBWxjJNP4uEeEwppyLPBoW1ZTFhL.png とブラウザで叩けば画像が返ってくる

            Post::create([
                'user_id' => $user_id,
                'content' => $validated['content'],
                'image_url' => $image_url
            ]);

            return response(null, 200);
        }

        Post::create([
            'user_id' => $user_id,
            'content' => $validated['content'],
        ]);

        return response(null, 200);
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
        $this->authorize('update', $post);

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
        $this->authorize('delete', $post);

       $post->delete();

        return response(null, 200);
    }
}
