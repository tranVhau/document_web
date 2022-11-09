<?php

use App\Http\Controllers\ApprovedLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DocumentCategoryController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\RatingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('auth/login', 'login');
    Route::post('auth/register', 'register');
    Route::post('auth/logout', 'logout');
    Route::post('auth/refresh', 'refresh');
});


Route::controller(CategoryController::class)->group(function () {
    Route::get('categories', 'index');
    Route::post('category', 'store')->middleware('auth:api');;
    Route::get('category/{id}', 'show');
    Route::put('category/{id}', 'update')->middleware('auth:api');;
    Route::delete('category/{id}', 'destroy')->middleware('auth:api');;
}); 

Route::controller(DocumentController::class)->group(function () {
    Route::get('documents', 'index');
    Route::post('document', 'store')->middleware('auth:api');
    Route::get('document/{id}', 'show');
    Route::put('document/{id}', 'update')->middleware('auth:api');;
    Route::delete('document/{id}', 'destroy')->middleware('auth:api');;
}); 


Route::controller(RatingController::class)->group(function () {
    Route::get('ratings', 'index');
    Route::post('rating', 'store')->middleware('auth:api');;
    Route::get('rating/{id}', 'show');
    Route::put('rating/{id}', 'update')->middleware('auth:api');;
    Route::delete('rating/{id}', 'destroy')->middleware('auth:api');;
}); 


Route::controller(ApprovedLogController::class)->group(function () {
    Route::get('approved_logs', 'index')->middleware('auth:api');;
    Route::post('approved_logs', 'store')->middleware('auth:api');;
    Route::get('approved_logs/{id}', 'show')->middleware('auth:api');;
}); 
 
