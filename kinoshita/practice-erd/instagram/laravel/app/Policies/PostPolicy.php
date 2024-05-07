<?php

namespace App\Policies;

use Illuminate\Auth\Access\Response;
use App\Models\Post;
use App\Models\User;

class PostPolicy
{
    public function comment(User $user, Post $post)
    {
        // 投稿をしたユーザーのフォロワー (Userモデルのコレクション)
        $followers = $post->user->followers;

        // ↑のフォロワーのリストの中に、（ログイン中の）ユーザーがいるか確認する
        // いたら、ログイン中のユーザーは、この投稿をしたユーザーをフォローしている
        $isFollowing = $followers->contains(function ($follower) use ($user) {
            return $follower['id'] == $user->id;
        });

        return $isFollowing;
    }

    public function update(User $user, Post $post): bool
    {
        // 自身の投稿なら編集できる
        return $user->id == $post->user_id;
    }

    public function delete(User $user, Post $post): bool
    {
        // 管理者か、投稿した本人であれば、削除できる
        return $user->is_admin || $user->id == $post->user_id;
    }
}
