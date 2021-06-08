<?php

use App\Http\Controllers\Auth\SelectChildController;
use Illuminate\Support\Facades\Route;

Route::get('/child_select', [SelectChildController::class, 'index'])
                ->middleware('auth')
                ->name('child.index');

Route::get('/child_select/create', [SelectChildController::class, 'add_new'])
                ->middleware('auth')
                ->name('child.add');

Route::post('/child_select/create', [SelectChildController::class, 'store'])
                ->middleware('auth');


Route::get('/child_select/{id}', [SelectChildController::class, 'select'])
                ->middleware('auth')->name('child.select');
