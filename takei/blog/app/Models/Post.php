<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'content'
    ];

    // protected $guarded = ['created_at', 'updated_at'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public static function fetchPosts()
    {
        return Post::with('user')->get();
    }

    public static function fetchPostsComment($id)
    {
        return Post::with(['user','comments'])->find($id);
    }

}
