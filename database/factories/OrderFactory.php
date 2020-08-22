<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'customer_id' => App\Customer::pluck('id')->random(),
        'billing_id' => App\Address::pluck('id')->random(),
        'shipping_id' => App\Address::pluck('id')->random(),
        'status' => $faker->randomElement(['pending','completed']),
    ];
});
