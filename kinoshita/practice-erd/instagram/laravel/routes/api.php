<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/post', PostController::class);

Route::group([
    'prefix' => '/like/{likeable_type}/{likeable_id}',
    'controller' => LikeController::class,
    'where' => ['likeable_type' => 'post|comment'],
], function () {
    Route::post('', 'store');
    Route::delete('', 'destroy');
});

Route::post(
    '/comment/{commentable_type}/{commentable_id}', 
    [CommentController::class, 'create']
)->where('commentable_type', 'post|comment');

Route::get('/profile/{user}', [ProfileController::class, 'show']);