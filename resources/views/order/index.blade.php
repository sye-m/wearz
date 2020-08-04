@extends('layouts.app');

@section('content')
<Example/>
<div>
    @foreach ($orders as $order)
        {{$order}}
    @endforeach
</div>
@endsection