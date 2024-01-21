<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use App\Models\Tag;
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
            $posts = Post::factory(2)->create(); // 投稿を生成
        
            $posts->each(function ($post) use ($user) {
                // コメントのデータを紐づける
                $comments = Comment::factory(3)->make(['user_id' => $user->id]);
                $post->comments()->saveMany($comments);

                // タグのデータを紐づける
                $tags = Tag::factory(2)->create(['body' => fake()->word()]);
                $post->tags()->attach($tags->pluck('id'));

                //いいね
                $likes = Like::factory(2)->make(['user_id' => $user->id]);
                $post->likes()->saveMany($likes);
            });

            $user->posts()->saveMany($posts); // ユーザーに投稿を関連付け
        });
    }
}
