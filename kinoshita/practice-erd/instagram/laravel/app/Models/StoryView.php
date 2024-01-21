<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoryView extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'story_id',
    ];

    public function story()
    {
        return $this->belongsTo(Story::class);
    }
}
