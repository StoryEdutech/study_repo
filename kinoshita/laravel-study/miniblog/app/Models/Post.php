<?php

// ここで名前空間を設定しないと、グローバル名前空間に属す
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // ModelとFactoryを関連づける
    use HasFactory;

    protected $guarded = [
        'id',
        'user_id',
        'created_at',
        'updated_at'
    ];

    /**
     * ユーザーとその投稿を紐づける
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function users(){
        return $this->belongsTo(User::class);
    }

    /**
     * ユーザーとコメントを紐づける
     *
     * @return void
     */
    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
