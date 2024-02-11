<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tags');
        // https://readouble.com/laravel/10.x/ja/eloquent-relationships.html#many-to-many:~:text=%E4%B8%AD%E9%96%93%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AE%E5%90%8D%E5%89%8D%E3%82%92%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AB%E5%8A%A0%E3%81%88%E3%81%A6
    }
}
