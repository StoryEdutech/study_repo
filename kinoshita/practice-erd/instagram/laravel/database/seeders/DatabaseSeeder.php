<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
        User::factory()
            ->has( 
            Post::factory(2) // 全員に２投稿ずつあり
                ->hasComments(3) // 各投稿にコメント3個ある
                ->hasLikes(2) // 各投稿にいいね2個ある
                ->hasTags(2) // 各投稿にたぐ2個ある
            )->create();

        // 管理者
        User::factory(1)->create(['role_id' => 0]);
    }
}
