<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('post_tags')->insert([
            [
                'id' => '1',
                'post_id' => '1',
                'tags_id' => '1'
            ],
            [
                'id' => '2',
                'post_id' => '1',
                'tags_id' => '2'
            ],
        ]);
    }
}
