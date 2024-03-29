<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'body' => $this->body,
            'articleId' => $this->article_id,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'author' => [
                'name' => $this->user->name,
                'avaterUrl' => $this->user->avater_url,
            ],
        ];
    }
}
