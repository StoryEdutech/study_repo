<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
        'post_id',
        'user_id',
        'created_at',
        'updated_at'
    ];

    /**
     * ユーザーのコメントを紐づける
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function users(){
        return $this->belongsTo(Users::class);
    }

    /**
     * ユーザーの投稿と紐づける
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function posts(){
        return $this->belongsTo(Post::class);
    }

}
