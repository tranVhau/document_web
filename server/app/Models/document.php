<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use willvincent\Rateable\Rateable;

class Document extends Model
{
    use Rateable;
    use HasFactory;
    protected $fillable  = ['name','user_id','desc', 'thumbnail','isPublic', 'src'];
    
    public function document_category(){
        return $this->hasMany('App\Models\document_category');
    }
}
