<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(5)->create()->each(function ($user) {
            $posts = Post::factory(2)->make(); // 投稿を生成

            $user->posts()->saveMany($posts); // ユーザーに投稿を関連付け
        
            // 投稿に関連するコメントを生成
            $posts->each(function ($post) use ($user) {
                $comments = Comment::factory(3)->make(['user_id' => $user->id]);
                $post->comments()->saveMany($comments);
            });
        });
    }
}
