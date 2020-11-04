<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ProductType;
use Faker\Generator as Faker;

$factory->define(ProductType::class, function (Faker $faker) {
    $images = Storage::allFiles('public/product_types');
    $randomImage = $images[rand(0, count($images) - 1)];
    return [
        'name'=>$faker->name,
        'image'=> str_replace('public', 'storage', $randomImage),
    ];
});
