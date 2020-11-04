<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->float('price',10,3);
            $table->string('size');
            $table->string('color');
            $table->string('image')->default(NULL)->nullable();
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('type_id');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->foreign('type_id')->references('id')->on('product_types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
