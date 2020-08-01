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
        // $this->call(UserSeeder::class);
        factory(App\Brand::class,5)->create();
        factory(App\ProductType::class,5)->create();
        factory(App\Customer::class,5)->create()->each(function($u) {
            $u->cart()->save(factory(App\Cart::class)->make())->each(function($c){
             $c->products()->saveMany(factory(App\Product::class,rand(1,2))->make());   
            });
            $u->orders()->saveMany(factory(App\Order::class,rand(1,2))->make())->each(function($o){
             $o->products()->saveMany(factory(App\Product::class,rand(1,2))->make());
            });
        });

        
    }
}
