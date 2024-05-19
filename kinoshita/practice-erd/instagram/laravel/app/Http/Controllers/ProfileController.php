<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProfileResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
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
    public function show(Request $request, User $user)
    {
        // フォロー数
        $followersCount = count($user->followers->toArray());
        // フォロワー数
        $followeesCount = count($user->followees->toArray());

        // ログイン中のユーザーをフォローしているかどうか
        $isFollow = $user->is_follow;

        // 画像のリンク一覧
        // 投稿数はこの配列の要素数で分かる
        $postImages = $isFollow
            ? $postImages = $user->posts->map(fn (Post $post) => $post->image_url)
            : null; 
        
        return response()->json(compact([
            'isFollow',
            'followersCount',
            'followeesCount',
            'postImages'
        ]));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
