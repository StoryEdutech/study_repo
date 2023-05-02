<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{

    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        // fakerを使う
        // userのデータがあったら、そのユーザーのid
        // なかったら、userを新しく作り、idを取得
        $random_id = optional(User::inRandomOrder()->first())->id;
        $user_id = $this->faker->boolean() && $random_id 
            ? $random_id
            : User::factory()->create()->id;

        return [
            'title' => $this->faker->title,
            'content' => $this->faker->paragraph,
            'user_id' => $user_id
        ];


        // fakerを使わないときはべた書き
        // $titles = ['apple', 'banana', 'lemon', 'grape', 'orange', 'peach', 'pineapple'];
        // $contents = ['red', 'yellow', 'purple', 'orange', 'pink', 'black', 'white'];

        // $title = $titles[rand(0, count($titles) - 1)];
        // $content = $contents[rand(0, count($contents) - 1)];
        // return [
        //     'title' => $title,
        //     'content' => $content,
        //     'user_id' => random_int(1, 100)
        // ];
    }
}
