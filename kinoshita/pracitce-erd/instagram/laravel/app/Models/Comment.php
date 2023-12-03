<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function commentable()
    {
        return $this->morphTo();
    }

    public function posts()
    {
        return $this->belongsTo(Post::class); 
    }

    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }
}
