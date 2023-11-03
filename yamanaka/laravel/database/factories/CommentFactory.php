<?php

namespace Database\Factories;

use App\Models\Article;
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
            'name' => fake()->name(),
            'article_id' => Article::factory(),
            'avater_url' => fake()->imageUrl(300, 300),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
