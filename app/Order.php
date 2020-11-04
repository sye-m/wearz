<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable=['customer_id','status','shipping_id'];

    public function customer(){
        return $this->belongsTo('App\Customer');
    }
    public function products(){
        return $this->belongsToMany('App\Product')->withTimestamps()->withPivot('id','size','quantity','price');
    }

    public function shippingAddress(){
        return $this->belongsTo('App\Address','shipping_id');
    }
  
}
