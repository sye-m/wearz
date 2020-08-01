<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable =  ['customer_id'];

    public function customer(){
        return $this->belongsTo('App\Customer');
    }

    public function products(){
        return $this->belongsToMany('App\Product')->withTimestamps();
    }
}
