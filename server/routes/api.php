<?php

use App\Http\Controllers\ApprovedLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
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
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(TodoController::class)->group(function () {
    Route::get('todos', 'index');
    Route::post('todo', 'store');
    Route::get('todo/{id}', 'show');
    Route::put('todo/{id}', 'update');
    Route::delete('todo/{id}', 'destroy');
}); 


Route::controller(CategoryController::class)->group(function () {
    Route::get('categories', 'index');
    Route::post('category', 'store');
    Route::get('category/{id}', 'show');
    Route::put('category/{id}', 'update');
    Route::delete('category/{id}', 'destroy');
}); 

Route::controller(DocumentController::class)->group(function () {
    Route::get('documents', 'index');
    Route::post('document', 'store');
    Route::get('document/{id}', 'show');
    Route::put('document/{id}', 'update');
    Route::delete('document/{id}', 'destroy');
}); 


Route::controller(RatingController::class)->group(function () {
    Route::get('ratings', 'index');
    Route::post('rating', 'store');
    Route::get('rating/{id}', 'show');
    Route::put('rating/{id}', 'update');
    Route::delete('rating/{id}', 'destroy');
}); 


Route::controller(ApprovedLogController::class)->group(function () {
    Route::get('approved_logs', 'index');
    Route::post('approved_logs', 'store');
    Route::get('approved_logs/{id}', 'show');
    // Route::put('rating/{id}', 'update');
    // Route::delete('rating/{id}', 'destroy');
}); 
