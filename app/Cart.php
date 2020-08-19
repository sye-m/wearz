<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable =  ['customer_id'];
    protected $with = ['products','customer'];
    protected $table = 'carts'; // add this line with your table name

    public function customer(){
        return $this->belongsTo('App\Customer');
    }

    public function products(){
        return $this->belongsToMany('App\Product','cart_product','cart_id','product_id')->withTimestamps()->withPivot('id','quantity', 'size');;
    }
}
