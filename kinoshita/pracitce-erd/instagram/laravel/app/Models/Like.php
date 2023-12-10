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

    public function post()
    {
        return $this->morphTo(Post::class);
    }

    public function comment()
    {
        return $this->morphTo(Comment::class);
    }

    public function story()
    {
        return $this->morphTo(Story::class);
    }
}
