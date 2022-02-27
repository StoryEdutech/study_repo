<?php

namespace App\Policies;

use App\Models\Comment;
use StoryEdutech\ChildAuth\Models\ChildUser;
use App\Policies\BasicPolicy;

class CommentPolicy extends BasicPolicy
{
  public static $allow_without_model_action_only_of_self=["create"];
  public function reply(ChildUser $user, $resource)
  {
      return true;
  }

}
