<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $searchTerm = request()->query('searchTerm');
        $brands = request()->query('brands') != "" ?explode(',',request()->query('brands')):[];
        $types = request()->query('types') != "" ?explode(',',request()->query('types')):[];
        //get products with the name like the search term than get the product based on brand and type
        $filteredProducts = Product::where('name','LIKE',$searchTerm."%")->whereHas('brand',
                function($query) use ($brands){
            //where has depends upon the relationship of product and brand table
                    if(count($brands) > 0){
                    $query->whereIn('name',$brands);
                    }
            })
            ->whereHas('type',
                function($query) use ($types){
                    if(count($types) > 0 ){
            //where has depends upon the relationship of product and brand table
                    $query->whereIn('name',$types);
                }
            })->with([
                    'brand' => function($q)
                    {
                     $q->select('id','name');//get only id and name of the brand
                    },
                    'type' => function($q)
                    {
                     $q->select('id','name');//get only id and name of the type of product
                    }
                   ])->get();
        return response()->json(['filteredProducts'=>$filteredProducts]);
    }

    /**-
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $product = Product::find($product);
        return view('product.show')->with('product',$product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
