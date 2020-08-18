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
        return response()->json(['cart'=>$cart,'productId'=>$productId,'quantity'=>$quantity,'size'=>$size]);
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
        $cart[0]->products()->updateExistingPivot($cartProduct['product_id'],['size'=>$cartProduct['size'],'quantity'=>$cartProduct['quantity']]);
        return response()->json('updated',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy($productId)
    {
        $cart = auth()->user()->cart()->get();
        $cart[0]->products()->detach($productId);
        return response()->json('deleted',200);
    }
}
