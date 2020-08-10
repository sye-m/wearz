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

Route::post('registerCustomer','Auth\RegisterController@register');
Route::post('loginCustomer','Auth\LoginController@login');
Route::post('logoutCustomer','Auth\LoginController@logout');

Route::get('getBrands','BrandController@index');
Route::get('getProductTypes','ProductTypeController@index');

Route::group(['middleware' => 'auth:web'],function(){
    Route::resource('customer','CustomerController');
    Route::resource('cart','CartController',['except'=>['create']]);
    Route::resource('order','OrderController',['except'=>['update','edit','create']]);
    Route::resource('product','ProductController',['except'=>['update','edit','create']]);

});
Route::get( '/{path?}', function(){
    return view( 'react' );
} )->where('path', '.*');

