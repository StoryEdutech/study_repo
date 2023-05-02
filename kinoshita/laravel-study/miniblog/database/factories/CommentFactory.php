<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
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

        $random_id = optional(Post::inRandomOrder()->first())->id;
        $post_id = $this->faker->boolean() && $random_id 
            ? $random_id
            : Post::factory()->create()->id;

        return [
            'user_id' => $user_id,
            'post_id' => $post_id,
            'content' => $this->faker->paragraph,
        ];

    }
}
