<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ['name','street','landmark', 'state', 'zipcode'];

    public function customer() {
        return $this->belongsTo('App\Customer');
    }

    public function order(){
        return $this->hasOne('App\Order');
    }
}
