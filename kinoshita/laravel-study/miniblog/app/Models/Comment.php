<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'content',
        'post_id',
        'user_id',
    ];
    // protected $guarded = [
    //     'id',
    //     'post_id',
    //     'user_id',
    //     'created_at',
    //     'updated_at'
    // ];

    // belongsToは単数形?
    public function user(){
        return $this->belongsTo(User::class);
    }

    // belongsToは単数形?
    public function post(){
        return $this->belongsTo(Post::class);
    }

}
