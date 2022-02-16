<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;
use StoryEdutech\SimpleCrud\Traits\CrudModelWithChildTrait;

class Comment extends Model
{
    use HasFactory;
    use CrudModelWithChildTrait;
    public $tab=0;
    public function replies(){
      return $this->hasMany(static::class,"reply_to");
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'content',
        'reply_to'
    ];

}
