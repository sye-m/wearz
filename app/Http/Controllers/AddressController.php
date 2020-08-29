<?php

namespace App\Http\Controllers;

use App\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function getAddress($addressId){
        $address = auth()->user()->addresses()->where('id',$addressId)->get();
        return response(['address'=>$address[0]],200);
    }

    public function addAddress(Request $request){
        $address = $request->address;
        $this->store($address);
        return response('address added',200);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($addressData)
    {
        $address = Address::create([
            'name' => $addressData['name'],
            'address_line_1' => $addressData['addrLine1'],
            'address_line_2' => $addressData['addrLine2'],
            'landmark' => $addressData['landmark'],
            'state' => $addressData['state'],
            'zip_code' => $addressData['zipCode'],
            'phone' => $addressData['phone'],
            'customer_id'=>auth()->user()->id
        ]);
        //if user does not have a default address assign this new address as default
        $user = auth()->user();
        if($user->address_id == NULL){
            $user->address_id = $address->id;
            $user->push();
        }
        return $address->id;
    }

    public function updateAddress(Request $request, $addressId)
    {
        $updatedAddress = $request->address;
        $address = Address::find($addressId);
        $address->update([
            'name' => $updatedAddress['name'],
            'address_line_1' => $updatedAddress['addrLine1'],
            'address_line_2' => $updatedAddress['addrLine2'],
            'landmark' => $updatedAddress['landmark'],
            'state' => $updatedAddress['state'],
            'zip_code' => $updatedAddress['zipCode'],
            'phone' => $updatedAddress['phone'],
        ]);
        return response()->json('address updated',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Address  $address
     * @return \Illuminate\Http\Response
     */
    public function destroy($addressId)
    {
        $user = auth()->user();
        if($addressId != $user->address_id){
            $address = auth()->user()->addresses()->where('id',$addressId)->first()->delete();
        }
        $user = (object) ['id' => $user->id,'email'=>$user->email, 'name'=>$user->name,'addresses'=>$user->addresses, 'defaultAddress'=>$user->defaultAddress];
        return response(['user'=>$user],200);
    }
}
