<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'first_name',
        'last_name',
        'email',
        'icon_url',
        'password',
    ];

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
        'password' => 'hashed',
    ];

    public function followers() // フォロワー (自分をフォローしてくれている人)
    {
        // return $this->belongsToMany(User::class)->using(Follower::class)->withPivot('follower_id');
        return $this->belongsToMany(User::class, 'followers', 'follower_id', 'user_id');
    }

    public function followees() // フォロイー (自分がフォローしている人)
    {
        return $this->belongsToMany(User::class, 'followers', 'user_id', 'follower_id');
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function stories()
    {
        return $this->hasMany(Story::class);
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
