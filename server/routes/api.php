<?php

use App\Http\Controllers\ApprovedLogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\category_DocumentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DocumentCategoryController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\UserController;


Route::controller(AuthController::class)->group(function () {
    Route::post('auth/login', 'login');
    Route::post('auth/register', 'register');
    Route::post('auth/logout', 'logout');
    Route::post('auth/refresh', 'refresh');
    Route::get('auth/me', 'me');
});


Route::controller(CategoryController::class)->group(function () {
    Route::get('categories', 'index');
    Route::post('category', 'store');
    Route::get('category/{id}', 'show');
    Route::put('category/{id}', 'update');
    Route::delete('category/{id}', 'destroy');
}); 

Route::controller(DocumentController::class)->group(function () {
    Route::get('documents/', 'index');
    Route::post('document', 'store');
    Route::get('document/{id}', 'show');
    Route::put('document/{id}', 'update');
    Route::delete('document/{id}', 'destroy');
    Route::get('documents/pending', 'pending');
    Route::get('document/pending/{id}', 'showpending');
    Route::get('documents/search/{keyword}', 'search');
    Route::get('documents/{limit}', 'getLimit');
    Route::get('doc-cate/{id}', 'getByCate');
    Route::get('doc-popular/{num}', 'popular');
    Route::get('overview', 'overview');
}); 


Route::controller(RatingController::class)->group(function () {
    Route::get('ratings', 'index');
    Route::post('rating', 'store')->middleware('auth:api');
    Route::get('rating/{id}', 'show');
    Route::put('rating/{id}', 'update')->middleware('auth:api');
    Route::delete('rating/{id}', 'destroy')->middleware('auth:api');
}); 


Route::controller(ApprovedLogController::class)->group(function () {
    Route::get('approved_logs', 'index')->middleware('auth:api');
    Route::post('approved_logs', 'store')->middleware('auth:api');
    Route::get('approved_log/{id}', 'show')->middleware('auth:api');
}); 
 

Route::controller(UserController::class)->group(function(){
    Route::get('users', 'index');
    Route::post('user', 'store');
    Route::get('user/{id}', 'show');
    Route::put('user/{id}', 'update');
    Route::delete('user/{id}', 'destroy');
});


Route::controller(category_DocumentController::class)->group(function(){
    Route::get('cate_doc', 'index');
    Route::post('cate_doc', 'store');
    Route::delete('cate_doc_del', 'destroy');
});

