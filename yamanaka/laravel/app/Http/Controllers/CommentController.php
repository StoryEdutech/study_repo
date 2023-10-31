<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Article;

class CommentController extends Controller
{
    public function index(string $slug){
        $article=Article::where('slug',$slug)->firstOrFail();
        return CommentResource::collection($article->comments()->get());
    }
}
