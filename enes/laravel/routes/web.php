<?php

use Illuminate\Support\Facades\Route;
use StoryEdutech\SimpleCrud\Route\RouteBundler;
use StoryEdutech\KobetsubaApiClient\KobetsubaApiClient;

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
// require __DIR__.'/child_auth.php';
require __DIR__.'/crud.php';

Route::get('/video_test', function () {

  $client=new KobetsubaApiClient;

  return $client->get('/video_search?div_id=v-123')->json();
});
