<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $fillable  = ['name','user_id','descr', 'thumbnail','isPublic'];
    
    public function document_category(){
        return $this->hasMany('App\Models\document_category');
    }
}
