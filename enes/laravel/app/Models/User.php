<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use StoryEdutech\ChildAuth\Models\ParentUser;
use App\Models\ChildUser;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable,ParentUser;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table="parent_account";
    protected $primaryKey = 'account_id';
    // protected $connection= 'common_db';
    protected $rememberTokenName = false;
    public function __construct($attributes=[]){
      $this->parent_user_construct();
      parent::__construct($attributes);
    }

    protected $fillable = [
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
    ];
}
