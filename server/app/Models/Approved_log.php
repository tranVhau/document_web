<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Approved_log extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'document_id'];
    

};
