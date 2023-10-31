<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date=fake()->date();
        return [
            'title'=>fake()->realText(16),
            'content'=>fake()->realText(),
            'slug'=>fake()->unique()->slug(),
            'created_at'=>$date,
            'updated_at'=>$date,
        ];
    }
}
