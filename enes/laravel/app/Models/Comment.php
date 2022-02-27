<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;
use StoryEdutech\SimpleCrud\Traits\CrudModelWithChildTrait;
use App\Policies\CommentPolicy;
use App\Policies\CanUseActionsListing;

class Comment extends Model
{
    use HasFactory;
    use CrudModelWithChildTrait;
    use CanUseActionsListing;
    public $tab=0;
    public function __construct(array $attributes = []) {
      parent::__construct($attributes);
      $this->setAppends(['can_use_actions']);
    }
    public function policy(){
      return new CommentPolicy;
    }
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
