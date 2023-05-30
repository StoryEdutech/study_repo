<?php

// ここで名前空間を設定しないと、グローバル名前空間に属す
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

/**
 * Post Model
 *
 * @property integer $id
 * @property integer $user_id
 * @property string $title
 * @property string $content
 * 
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 *
 * @property \Illuminate\Database\Eloquent\Collection|\App\Models\User $user
 * @property \Illuminate\Database\Eloquent\Collection|\App\Models\Comment[] $comments
 */

class Post extends Model
{
    // ModelとFactoryを関連づける
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'title',
        'content',
        'user_id'
    ];

    protected $hidden = [
        'deleted_at'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
