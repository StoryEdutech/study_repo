<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory(5)->create();
        
        // 手打ちでデータを作るとき
        // Post::create([
        //     'user_id' => '1',
        //     'content' => fake()->realText(),
        //     'image_url' => fake()->imageUrl(),
        // ]);
    }
}
