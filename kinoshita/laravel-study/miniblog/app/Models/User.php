<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

// このUserクラスは、Modelを継承(extends)してかつ、
// AuthenticatableContract他２つのインターフェイスを実装（implements）した、
// クラス(Illuminate\Foundation\Auth\User as Authenticatable)を継承している

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
    // protected $guarded = [
    //     'id',
    //     'email',
    //     'password',
    //     'created_at',
    //     'updated_at'
    // ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // hasManyは複数形?
    public function posts(){
        return $this->hasMany(Post::class);
    }

    // hasManyは複数形?
    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
