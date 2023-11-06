<?php

namespace Database\Factories;

use App\Models\Article;
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
    public function definition(): array
    {
        $date = fake()->date();

        return [
            'body' => fake()->realText(50),
            'article_id' => Article::factory(),
            'user_id' => User::factory(),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
