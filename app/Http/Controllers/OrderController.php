<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use App\Customer;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        $order = auth()->user()->orders()->find($order);
        return view('order.show')->with('order',$order);
    }

    
    public function destroy(Order $order)
    {
        auth()->user()->orders()->find($order)->destroy();
        return view('or der.index');
    }
}
