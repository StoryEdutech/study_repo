<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

use Illuminate\Support\Facades\Log;

class ArticleController extends Controller
{
    public function index(){
        return ArticleResource::collection(Article::orderBy('updated_at','desc')->get());
    }
    public function show(string $slug){
        return new ArticleResource(Article::where('slug',$slug)->firstOrFail());
    }
    public function store(Request $request){
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        Log::debug(Str::uuid());
        $newArticle=Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'slug' => Str::uuid(),
        ]);
        return new ArticleResource($newArticle);
    }
}
