<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\ArticlesCollection;
use App\Models\Article;

class ArticleController extends Controller
{
    public function index(){
        return new ArticlesCollection(Article::all());
    }
    public function show(string $slug){
        return new ArticleResource(Article::where('slug',$slug)->firstOrFail());
    }
    public function store(Request $request){
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        $newArticle=Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'slug' => Str::uuid(),
        ]);
        return new ArticleResource($newArticle);
    }
}
