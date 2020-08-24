<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ['name','address_line_1','address_line_2','street','landmark', 'state', 'zip_code', 'phone','customer_id'];

    public function customer() {
        return $this->belongsTo('App\Customer');
    }

    public function defaultCustomerAddress(){
        return $this->hasOne('App\Customer');
    }

    public function order(){
        return $this->hasOne('App\Order');
    }
}
