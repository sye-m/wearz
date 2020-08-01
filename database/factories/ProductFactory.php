<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Storage;
$factory->define(Product::class, function (Faker $faker) {
    $images = Storage::allFiles('public/product_images');
    $randomImage = $images[rand(0, count($images) - 1)];
    return [
        'product_name' => $faker->name,
        'price' => $faker->randomElement([299.999,500,699.999,1000,2500,5000,10000,20000,30000,40000,50000]),
        'size' => $faker->randomElement([5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12.5,13.5,14.5]),
        'color' => $faker->hexcolor(),
        'product_image'=> $randomImage,
        'type_id' => App\ProductType::pluck('id')->random(),
        'brand_id' => App\Brand::pluck('id')->random(),
        
    ];
});
