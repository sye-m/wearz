<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['product_name', 'size', 'color','price'];

    public function brand(){
        return $this->belongsTo('App\Brand');
    }

    public function type(){
        return $this->belongsTo('App\ProductType');
    }

    
    public function orders(){
        return $this->belongsToMany('App\Order')->withTimestamps()->withPivot('size','quantity');
    }

    public function carts(){
        return $this->belongsToMany('App\Product','cart_product','cart_id','product_id')->withTimestamps()->withPivot('quantity', 'size');;
    }
}
