<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SelectChildController;
use StoryEdutech\SimpleCrud\Route\RouteBundler;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth','child_auth'])->name('dashboard');

require __DIR__.'/auth.php';
require __DIR__.'/child_auth.php';
require __DIR__.'/crud.php';
