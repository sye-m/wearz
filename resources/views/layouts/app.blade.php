<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Wearz') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        html,body {
            width: 100%;
            height:100%;
            margin: 0px;
            padding: 0px;
            font-family:Lato,Roboto,Helvetica,sans-serif;
        }

        #container {
            width: 100%;
            height: 100%;
            top: 74px;
            position: absolute;
            min-height: 600px;
            
        }

        #app {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    @yield('content')
</body>
<script>
        
      window.Auth = {!! json_encode([
            'signedIn' => Auth::check(),
        ]) !!}
</script>
</html>
