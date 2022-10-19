<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class document_category extends Model
{
    use HasFactory;
    protected $fillable=['document_id','category_id'];

    public function document(){
        return $this->belongsTo('App\Models\Document');
    }

    public function category(){
        return $this->belongsTo('App\Models\Categor');
    }
}
