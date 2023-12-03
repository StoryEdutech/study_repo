<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Follower extends Pivot
{
    use HasFactory;

    protected $table = 'followers';

    protected $fillable = [
        'user_id', 'follower_id'
    ];
}

// https://readouble.com/laravel/7.x/ja/eloquent-relationships.html#many-to-many:~:text=%2C%202%5D)%3B-,%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E4%B8%AD%E9%96%93%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E5%AE%9A%E7%BE%A9,-%E3%83%AA%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E4%B8%AD%E9%96%93
