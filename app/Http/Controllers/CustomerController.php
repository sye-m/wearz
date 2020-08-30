<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        $user = (object) ['id' => $user->id,'email'=>$user->email, 'name'=>$user->name,'addresses'=>$user->addresses, 'defaultAddress'=>$user->defaultAddress];

        return response()->json(['user'=>$user],200);
    }

    public function editDefaultAddress(Request $request) 
    {
        $user = auth()->user();
        $addressId = $request->addressId;
        $user->address_id = $addressId;
        $user->push();
        $user = (object) ['id' => $user->id,'email'=>$user->email, 'name'=>$user->name,'addresses'=>$user->addresses, 'defaultAddress'=>$user->defaultAddress];
        return response(['user'=>$user],200);
    }

}
