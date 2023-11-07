<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    public function index()
    {
        return ArticleResource::collection(Article::orderBy('updated_at', 'desc')->get());
    }

    public function show(string $slug)
    {
        return new ArticleResource(Article::where('slug', $slug)->firstOrFail());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        $newArticle = Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'slug' => Str::uuid(),
        ]);

        return new ArticleResource($newArticle);
    }
}
