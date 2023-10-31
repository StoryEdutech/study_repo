<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illumination\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;
    
    protected $fillable=[
        'body',
        'name',
        'avater_url',
    ];

    /**
     * Get the article that owns the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }
}
