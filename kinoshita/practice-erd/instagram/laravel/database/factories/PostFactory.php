<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 選ばれたユーザーの投稿を作る
        return [
            'user_id' => User::factory()->create()->id,
            'content' => fake()->realText(),
            'image_url' => fake()->imageUrl(),
        ];
    }
}
