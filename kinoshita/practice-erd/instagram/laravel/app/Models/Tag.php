<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public $timestamps = false; // タイムスタンプカラムを無効にする

    protected $fillable = [
        'body',
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'post_tags');
    }
}
