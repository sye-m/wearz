<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use App\Customer;
use App\Http\Controllers\AddressController;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allOrders = auth()->user()->orders()->get();
        $orders = array();
        foreach($allOrders as $order){
            array_push($orders,$order->products()->get());
        }

        return response()->json(['orders'=>$orders]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $products = $request->orderedProducts;
        $sameAsDefaultAddress = $request->sameAsDefaultAddress;
        $addressData = $request->addressFormData;
        if($sameAsDefaultAddress){
        $order = Order::create(['customer_id'=>auth()->user()->id,'shipping_id'=>auth()->user()->defaultAddress->id]);
        }
        else{
            $address = new AddressController;
            $address_id = $address->store($addressData);
            $order = Order::create(['customer_id'=>auth()->user()->id,'shipping_id'=>$address_id]);
        }
        foreach($products as $product){
            $order->products()->attach($product['product_id'],['size'=>$product['size'],'quantity'=>$product['quantity']]);
        }
        
        return response()->json(['allProducts'=>$order],200);
    }

    
    public function destroy(Request $request)
    {
        $orderedProduct = $request->orderedProduct;
        $order = auth()->user()->orders()->where('id',$orderedProduct['order_id'])->first();
        $order->products()->wherePivot('order_product.id',$orderedProduct['id'])->detach();
        // a single order will have many products associated with it
        //if the last product in an order is deleted then delete the order itself
        if(count($order->products()->get()) <= 0){
        $order->delete();
        }
        return response()->json('deleted order',200);
        
    }
}
