<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Address;
use Faker\Generator as Faker;

$factory->define(Address::class, function (Faker $faker) {
    return [
        'name'=>$faker->name,
        'street_name' => $faker->streetName,
        'street_address' => $faker->streetAddress,
        'landmark' => $faker->name,
        'state' => $faker->state,
        'zip_code' => $faker->postcode,
        'customer_id' => App\Customer::pluck('id')->random()
    ];
});
