<?php

use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
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

Route::controller(LikeController::class)->group(function () {
    Route::post('/like/{likeable_type}/{likeable_id}', 'store');
    Route::delete('/like/{likeable_type}/{likeable_id}', 'destroy');
});