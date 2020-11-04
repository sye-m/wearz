<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = ['brand_name','image'];

    public function products(){
        return $this->hasMany('App\Brand');
    }
}
