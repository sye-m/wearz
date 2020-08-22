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

Route::get('getBrands','BrandController@index');
Route::get('getProductTypes','ProductTypeController@index');
Route::get('getProducts','ProductController@index');
Route::get('getProduct/{productId}','ProductController@show');
Route::post('getCartItems','ProductController@getCartItems');

Route::group(['middleware' => 'auth:web'],function(){
    Route::get('getUser','CustomerController@index');
    Route::get('logoutCustomer','Auth\LoginController@logout');
    Route::post('newUserCart','CartController@store');
    Route::post('addToCart','CartController@addToCart');
    Route::get('getUserCart','CartController@getUserCart');
    Route::put('updateUserCart','CartController@update');
    Route::delete('deleteProductFromCart','CartController@deleteProduct');
    Route::delete('emptyCart','CartController@emptyCart');
    Route::get('getOrders','OrderController@index');
    Route::post('orderProducts','OrderController@store');
    Route::delete('deleteOrderedProduct','OrderController@destroy');

});
Route::get( '/{path?}', function(){
    return view( 'react' );
} )->where('path', '.*');

