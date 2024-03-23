<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
        return 'index';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, String $likeable_type, String $likeable_id)
    {
        // いいねしたユーザーの情報 $user = auth()->user
        //ログインの処理を作ってないので仮
        $user = User::find(1); 

        // いいねのレコードをlikeテーブルに追加する
        Like::create([         
            'user_id' => $user->id,
            'likeable_type' => $likeable_type,
            'likeable_id' => $likeable_id
        ]);

        return response(null, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, String $likeable_type, String $likeable_id)
    {
        // いいねを探す
        $like = Like::where([
            ['likeable_id', '=', $likeable_id],
            ['likeable_type', '=', $likeable_type]
        ])->firstOrFail();

        $like->delete();

        return response(null, 200);
    }
}
