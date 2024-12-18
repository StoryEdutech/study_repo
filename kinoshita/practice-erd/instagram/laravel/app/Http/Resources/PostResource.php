<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {        
        return [
            'id' => $this->id,
            'author' => [
                'name' => $this->user->last_name.' '.$this->user->first_name,
                'signup_date'  => $this->user->created_at ,
                'post_count' => $this->user->posts->count()
            ],
            'content' => $this->content,
            'image_url' => $this->image_url,
            'comments' => $this->comments,
            'tags' => $this->tags->map(function ($tag) {
                return $tag->body;
            }),
            'likes' => $this->likes->map(function ($like) {
                return $like->user_id;
            }),
            'canComment' => Auth::user()->can('comment', $this)
        ];
    }
}
