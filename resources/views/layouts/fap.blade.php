<!DOCTYPE html>
<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed layout-compact" dir="ltr"
    data-theme="theme-default" data-template="vertical-menu-template"
    lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>


    @include('partials.tags.meta')

    @include('partials.tags.tags')


    <!-- Styles -->
    <style>
        body {
            background-color: white
        }

        .authentication-cover {
            background-size: cover;
            background-position: center;
            height: 100vh;
            /* Full viewport height */
            width: 100vw;
            /* Full viewport width */
        }
    </style>
</head>

<body class="antialiased">
    <div class="authentication-wrapper authentication-cover" style="background-color: #F8F7F5;">

        {{ $slot }}


    </div>

</body>

@include('partials.tags.tags_footer')


</html>
