<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChildUser extends Model
{
    use HasFactory;
    protected $primaryKey='uid';
    protected $table="child_account";

    public function parent(){
      return $this->belongs_to(User::class,'account_id');
    }
}
