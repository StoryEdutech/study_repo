<?php

use App\Http\Controllers\Auth\SelectChildController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::resource('/comments', CommentController::class)->middleware(['auth','child_auth']);
Route::get('/comments/{id}/delete',[CommentController::class,'confirm_delete'])->middleware(['auth','child_auth']);
