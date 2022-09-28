<?php

namespace App\Http\Controllers;

use App\Models\document;
use Illuminate\Http\Request;

class DocumentCotroller extends Controller
{
    public function getAllDocument (){
        return document::all();
    }
}
