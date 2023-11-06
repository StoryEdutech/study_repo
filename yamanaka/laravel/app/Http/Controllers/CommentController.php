<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Article;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(string $slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        return CommentResource::collection($article->comments()->orderBy('created_at', 'asc')->get());
    }

    public function store(string $slug, Request $request)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        $request->validate([
            'body' => 'required',
        ]);
        $newComment = Comment::create([
            'user_id' => $request->user()->id,
            'body' => $request->body,
            'article_id' => $article->id,
        ]);

        return new CommentResource($newComment);
    }
}
