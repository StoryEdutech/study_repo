<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    public function likeable()
    {
        return $this->morphTo();
    }

    public function posts()
    {
        return $this->belongsTo(Post::class);
    }

    public function comments()
    {
        return $this->belongsTo(Comment::class);
    }
}
