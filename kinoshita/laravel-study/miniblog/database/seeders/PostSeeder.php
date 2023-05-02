<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // PostFactoryで定義したデータを作る
        Post::factory()->count(10)->create();


        // seeder単体で使うときは、１個ずつインサートする
        // Post::create([
        //     'content' => 'hello world',
        //     'title' => 'post 1',
        //     'user_id' => '11111'
        // ]);
        // Post::create([
        //     'content' => 'good morning',
        //     'title' => 'post 2',
        //     'user_id' => '2222'
        // ]);
    }
}
