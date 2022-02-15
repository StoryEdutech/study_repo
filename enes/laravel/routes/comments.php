<?php

use App\Http\Controllers\Auth\SelectChildController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::resource('/comment', CommentController::class)->middleware(['auth','child_auth']);
Route::get('/comment/{id}/delete',[CommentController::class,'confirm_delete'])->middleware(['auth','child_auth']);
Route::get('/comment/{id}/reply_to',[CommentController::class,'reply_to'])->middleware(['auth','child_auth']);
Route::get('/comment/user/{uid}',[CommentController::class,'index'])->middleware(['auth','child_auth']);
