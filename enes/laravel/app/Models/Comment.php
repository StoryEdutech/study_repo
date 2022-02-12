<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ChildUser;
use Illuminate\Support\Facades\Session;

class Comment extends Model
{
    use HasFactory;
    public function user(){
      return $this->belongs_to(ChildUser::class,'uid');
    }
    public static function of_current(){
      return static::where('uid',session('child_id'));
    }

}
