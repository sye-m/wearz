<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Brand;
use Faker\Generator as Faker;

$factory->define(Brand::class, function (Faker $faker) {
    $images = Storage::allFiles('public/brand_images');
    $randomImage = $images[rand(0, count($images) - 1)];
    return [
        'name'=>$faker->name,
        'image'=> str_replace('public', 'storage', $randomImage),
    ];
});
