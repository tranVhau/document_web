<?php

use App\Http\Controllers\DocumentCotroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/document', [DocumentCotroller::class,'getAllDocument']);


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


