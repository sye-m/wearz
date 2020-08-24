<?php

namespace App\Http\Controllers;

use App\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{

    public function getUserCart(){
        $cart = Cart::where('customer_id',auth()->user()->id)->get();
        return response()->json(['cart'=>$cart[0]->products()->get(['product_id as product','cart_id'])]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cart = new Cart;
        $cart->customer_id = $request->customerId;
        $cart->save();
        return response()->json(['cart'=>$cart]);
    }

    public function addToCart(Request $request){
        $cart = auth()->user()->cart()->get();
        $productId = $request->productId;
        $size = $request->size;
        $quantity = $request->quantity;
        $cart[0]->products()->attach($productId,['size'=>$size,'quantity'=>$quantity]);
        $row = $cart[0]->products()->where('cart_product.product_id',$productId)->where('cart_product.size',$size)->where('cart_product.quantity',$quantity)->get();
        return response()->json(['id'=>$row[0]->pivot->id,'cart_id'=>$cart[0]->id],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $cart = auth()->user()->cart()->get();
        $cartProduct = $request->cartProduct;
        $cartItemToUpdate = $cart[0]->products()->where('cart_product.id',$cartProduct['id'])->first();
        $cartItemToUpdate->pivot->size= $cartProduct['size'];
        $cartItemToUpdate->pivot->quantity= $cartProduct['quantity'];
        $cartItemToUpdate->pivot->save();
        return response()->json('updated product',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function deleteProduct(Request $request)
    {   
        $productDetails = $request->productDetails;
        $cart = auth()->user()->cart()->get();
        $cart[0]->products()->wherePivot('cart_product.id',$productDetails['id'])->detach();
        return response()->json('deleted product',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function emptyCart(Request $request)
    {
        $products = $request->orderedProducts;
        $cart = auth()->user()->cart()->get();
        foreach($products as $product){
            $cart[0]->products()->detach($product['product_id']);
        }
        return response()->json('deleted',200);
    }
}
