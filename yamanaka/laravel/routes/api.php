<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/articles', [ArticleController::class, 'index']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::get('/articles/{slug}', [ArticleController::class, 'show']);
Route::get('/articles/{slug}/comments', [CommentController::class, 'index']);
Route::post('/articles/{slug}/comments', [CommentController::class, 'store']);
