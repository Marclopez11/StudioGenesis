<x-fap-layout>

    <body class="antialiased">
        <div class="authentication-wrapper authentication-cover" style="
    background-color: #ffffff;
">
            <div class="authentication-inner row m-0">
                <!-- /Left Text -->
                <div class="d-none d-lg-flex col-lg-7 col-xl-7 align-items-center p-5">
                    <div class="w-100 d-flex justify-content-center">
                        <img src="{{ asset('assets/images/login/login.webp') }}" class="img-fluid" alt="Login image"
                            width="700">

                    </div>
                </div>
                <!-- /Left Text -->

                <!-- Login -->
                <div class="d-flex col-12 col-lg-5 col-xl-5 align-items-center authentication-bg p-sm-5 p-4"
                    style="margin-top: 8%;">
                    <div class="w-px-400 mx-auto">
                        <!-- Logo -->
                        <div class="mb-5">
                            <a class="gap-2">
                                <span class="demo">
                                    <img width="20%">
                                </span>
                                <span class="app-brand-text demo menu-text fw-bold ms-2"
                                    style="text-transform: none;">StudioGenesis</span>
                            </a>
                        </div>

                        <form method="POST" action="{{ route('login') }}">
                            @csrf


                            <div class="mb-3">
                                <label for="email" class="form-label">
                                    Correu electrònic</label>
                                <input type="text" class="form-control" id="email" name="email"
                                    :value="old('email')" placeholder="Introduïu el vostre correu electrònic" required
                                    autofocus autocomplete="username">
                            </div>
                            <div class="mb-3 form-password-toggle">
                                <div class="d-flex justify-content-between">
                                    <label class="form-label" for="password">{{ __('Contrasenya') }}</label>

                                </div>
                                <div class="input-group input-group-merge">
                                    <input type="password" id="password" class="form-control" name="password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password" />
                                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                                </div>
                            </div>

                            <x-button class="btn btn-primary d-grid w-100">
                                {{ __('Log in') }}
                            </x-button>
                        </form>


                        <x-validation-errors class="mb-4" />




                    </div>
                </div>
                <!-- /Login -->


            </div>
</x-fap-layout>
