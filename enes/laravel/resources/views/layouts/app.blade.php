<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <link href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" rel="stylesheet">

        <script src="{{ env('kobetsuba_url') }}/js_includes/react.production.min.js"></script>
        <script src="{{ env('kobetsuba_url') }}/js_includes/react-dom.production.min.js"></script>
        <script src="{{ env('kobetsuba_url') }}/js_includes/jquery.min.js"></script>
        @csrf

        <script>

        window.nickname_and_child_info = {
          1:{ uid: 1, nickname: "インナーサクラ", grade:4 },
          2:{ uid: 2, nickname: "ラクラク", grade:6 }
        };
        window.url_base="{{ env('APP_URL')??'' }}";

        </script>

        <!-- Scripts -->
        <script src="{{ url(mix('js/manifest.js')) }}" defer></script>
        <script src="{{ url(mix('js/vendor.js')) }}" defer></script>
        <script src="{{ url(mix('js/app.js')) }}" defer></script>
    </head>
    <body class="font-sans antialiased">
        <div class="min-h-screen bg-gray-100">
            @include('layouts.navigation')

            <!-- Page Heading -->
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {{ $header??'' }}
                </div>
            </header>

            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>
    <!-- <script src="/js/app.js"></script> -->
    </body>
</html>
