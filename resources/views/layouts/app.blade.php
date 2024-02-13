<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('partials.tags.meta')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @include('partials.tags.tags')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Toastr -->
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>



    <!-- Select2 CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <!-- livewireStyles -->





</head>

<body>
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">
            @include('partials.elements.menu')
            <div class="layout-page">
                @include('partials.elements.nav')
                <div class="content-wrapper">
                    <main>
                        {{ $slot }}
                    </main>
                    @include('partials.elements.footer')
                    <div class="content-backdrop fade"></div>
                </div>
            </div>
        </div>
        <div class="layout-overlay layout-menu-toggle"></div>
        <div class="drag-target"></div>
    </div>
    @include('partials.tags.tags_footer')
    <!--livewireScripts-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
</body>

</html>
