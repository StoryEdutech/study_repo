<?php

// ここで名前空間を設定しないと、グローバル名前空間に属す
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

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
    // protected $guarded = [
    //     'id',
    //     'user_id',
    //     'created_at',
    //     'updated_at'
    // ];

    // belongsToは単数形?
    public function user(){
        return $this->belongsTo(User::class);
    }

    // hasManyは複数形?
    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
