<?php

use Illuminate\Support\Facades\Route;

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



Auth::routes();
Route::group(['middleware' => 'auth:web'],function(){
    Route::resource('customer','CustomerController');
    Route::resource('cart','CartController',['except'=>['create']]);
    Route::resource('order','OrderController',['except'=>['update','edit','create']]);
    Route::resource('product','ProductController',['except'=>['update','edit','create']]);

});
Route::get('/home', 'HomeController@index')->name('home');
Route::get( '/{path?}', function(){
    return view( 'react' );
} )->where('path', '.*');

