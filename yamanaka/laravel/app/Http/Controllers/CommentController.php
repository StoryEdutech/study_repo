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
            'name' => 'required',
            'body' => 'required',
            'avaterUrl' => 'required|url',
        ]);
        $newComment = Comment::create([
            'name' => $request->name,
            'body' => $request->body,
            'avater_url' => $request->avaterUrl,
            'article_id' => $article->id,
        ]);

        return new CommentResource($newComment);
    }
}
