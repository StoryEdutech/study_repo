<?php

namespace App\Policies;

use App\Models\User;
use App\Models\ChildUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class ChildEditUsePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function before(User $user, $ability)
    {
        if ($user->isAdmin) {
            return true;
        }
    }
    public function update($child)
    {
      return Auth::user()->account_id === $child->account_id;
    }
    public function use($child){
      return Auth::user()->account_id === $child->account_id;
    }

}
