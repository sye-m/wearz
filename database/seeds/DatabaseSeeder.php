<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Brand::class,5)->create();
        factory(App\ProductType::class,5)->create();
        factory(App\Customer::class,5)->create()->each(function($u) {
            //for each customer create a single cart
            $u->cart()->save(factory(App\Cart::class)->make())->each(function($cart){
                //each cart will have 1 or 2 products
             $cart->products()->saveMany(factory(App\Product::class,rand(1,2))->make())->each(function($product) use($cart){
                $productSizes = explode(",", $product->size);
                //edit the pivot table to save the data
                $cart->products()->attach($product->id,array(
                    'size' => $productSizes[rand(0, count($productSizes)-1)],
                ));
             });   
            });
            //create a single address for each user
            factory(App\Address::class)->create();
            //for each user create 1 or 2 orders
            $u->orders()->saveMany(factory(App\Order::class,rand(1,2))->make())->each(function($order){
                //for each order create 1 or 2 product
                $products = factory(App\Product::class,rand(1,2))->make();
                //for each product save its size and price. Quantity by default will be 1
                $order->products()->saveMany($products)->each(function($product) use($order){
                    $productSizes = explode(",", $product->size);
                    $price = $product->price;
                    //edit the pivot table to save the data
                    $order->products()->attach($product->id,array(
                        'size' => $productSizes[rand(0, count($productSizes)-1)],
                        'price' => $price,
                    ));
                });
                
        });  
    });
    }
}