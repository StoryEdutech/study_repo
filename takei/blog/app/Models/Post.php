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
        // joinじゃなくてuserメソッドを使いたかったが、やりかた分からず
        $posts = Post::Join('users', 'users.id', '=', 'posts.user_id')
        ->select('posts.id','name','title','content')
        ->get();
        return $posts;
    }

}
