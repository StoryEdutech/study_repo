<?php

use App\Http\Controllers\Auth\SelectChildController;
use Illuminate\Support\Facades\Route;

Route::get('/comment/{id}/reply_to',"CommentController@reply_to")->middleware(['auth','child_auth']);
